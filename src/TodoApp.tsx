"use client";

import { useState, useEffect, useCallback } from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: number;
}

interface AIResponse {
  suggestions: string[];
  estimatedTime: string;
  priority: 'low' | 'medium' | 'high';
}

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [selectedAiSuggestion, setSelectedAiSuggestion] = useState<string | null>(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('todo-ai-todos');
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved todos:', e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todo-ai-todos', JSON.stringify(todos));
  }, [todos]);

  const generateAiSuggestion = async (text: string) => {
    if (!text.trim()) return;

    setIsAiProcessing(true);
    setAiSuggestions([]);

    try {
      // In production, use actual AI API (OpenAI, etc.)
      // For demo, generate mock suggestions based on keywords
      const suggestions = generateMockAiSuggestions(text);
      setAiSuggestions(suggestions);
    } catch (error) {
      console.error('AI generation failed:', error);
    } finally {
      setIsAiProcessing(false);
    }
  };

  const generateMockAiSuggestions = (text: string): string[] => {
    const textLower = text.toLowerCase();
    const suggestions: string[] = [];

    if (textLower.includes('work') || textLower.includes('project')) {
      suggestions.push('Break into smaller tasks');
      suggestions.push('Set deadline: tomorrow');
      suggestions.push('Add to urgent queue');
    } else if (textLower.includes('buy') || textLower.includes('shop')) {
      suggestions.push('Add to shopping list');
      suggestions.push('Check budget first');
      suggestions.push('Compare prices');
    } else if (textLower.includes('call') || textLower.includes('meet')) {
      suggestions.push('Schedule meeting');
      suggestions.push('Prepare agenda');
      suggestions.push('Send calendar invite');
    } else {
      suggestions.push('Add to daily plan');
      suggestions.push('Set priority level');
      suggestions.push('Estimate time needed');
    }

    suggestions.push('Add to today\'s focus');
    suggestions.push('Create checklist');

    return suggestions.slice(0, 5);
  };

  const handleAddTodo = useCallback(() => {
    const text = selectedAiSuggestion || input;
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      priority: 'medium',
      createdAt: Date.now(),
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput('');
    setSelectedAiSuggestion(null);
    setAiSuggestions([]);
  }, [input, selectedAiSuggestion]);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  }, []);

  const getStats = () => {
    const total = todos.length;
    const completed = todos.filter((t) => t.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  };

  const stats = getStats();
  const pendingTodos = todos.filter((t) => !t.completed);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#6366f1] selection:text-white">
      {/* Background Gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-[#8b5cf6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Todo<span className="text-[#6366f1]">AI</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Your intelligent task manager with AI-powered suggestions
          </p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-[#1a1a1a] rounded-2xl p-4 text-center border border-white/5">
            <div className="text-3xl font-bold text-[#6366f1]">{stats.total}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mt-1">Total</div>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl p-4 text-center border border-white/5">
            <div className="text-3xl font-bold text-[#ec4899]">{stats.pending}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mt-1">Pending</div>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl p-4 text-center border border-white/5">
            <div className="text-3xl font-bold text-[#10b981]">{stats.completed}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mt-1">Done</div>
          </div>
        </div>

        {/* Input Section */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !selectedAiSuggestion) {
                  handleAddTodo();
                }
              }}
              placeholder="What needs to be done?"
              className="w-full bg-[#1a1a1a] border-2 border-[#6366f1]/30 rounded-2xl px-6 py-5 text-xl focus:outline-none focus:border-[#6366f1] focus:ring-4 focus:ring-[#6366f1]/20 transition-all placeholder:text-gray-500"
            />
            <button
              onClick={handleAddTodo}
              disabled={isAiProcessing}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Task
            </button>
          </div>

          {/* AI Suggestions */}
          {isAiProcessing && (
            <div className="mt-4 flex items-center justify-center gap-2 text-[#6366f1]">
              <div className="animate-spin">✨</div>
              <span className="text-sm">Analyzing your task...</span>
            </div>
          )}

          {aiSuggestions.length > 0 && (
            <div className="mt-4 bg-[#1a1a1a] rounded-2xl p-4 border border-white/5">
              <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                <span className="text-[#6366f1]">💡</span>
                AI Suggestions
              </h3>
              <div className="space-y-2">
                {aiSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedAiSuggestion(suggestion)}
                    className={`
                      p-3 rounded-xl cursor-pointer transition-all duration-200
                      ${selectedAiSuggestion === suggestion 
                        ? 'bg-[#6366f1]/20 border border-[#6366f1]' 
                        : 'hover:bg-white/5 border border-transparent'}
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-[#6366f1]">
                        {selectedAiSuggestion === suggestion ? '✓' : '➤'}
                      </span>
                      <span className="text-gray-200">{suggestion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedAiSuggestion && (
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 bg-[#10b981]/20 text-[#10b981] px-4 py-2 rounded-lg text-sm text-center">
                Selected: <span className="font-medium">{selectedAiSuggestion}</span>
              </div>
              <button
                onClick={handleAddTodo}
                className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
              >
                Add Selected
              </button>
              <button
                onClick={() => {
                  setSelectedAiSuggestion(null);
                  setAiSuggestions([]);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">
              {pendingTodos.length > 0 ? 'Active Tasks' : 'All Caught Up!'}
            </h2>
            {stats.completed > 0 && (
              <button
                onClick={clearCompleted}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Clear completed
              </button>
            )}
          </div>

          {pendingTodos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 animate-bounce">✨</div>
              <p className="text-xl text-gray-400">No pending tasks!</p>
              <p className="text-sm text-gray-500 mt-2">
                Great job - take a break or add a new task
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {pendingTodos.map((todo) => (
                <div
                  key={todo.id}
                  className="group flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/10"
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                      ${todo.completed
                        ? 'bg-[#10b981] border-[#10b981]'
                        : 'border-gray-600 hover:border-[#6366f1]'
                      }
                    `}
                  >
                    {todo.completed && <span className="text-white">✓</span>}
                  </button>
                  <span
                    className={`
                      flex-1 text-lg transition-all duration-300
                      ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-200'}
                    `}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-[#ec4899] transition-all duration-200"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Completed Tasks */}
        {stats.completed > 0 && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-bold text-gray-400 mb-4">Completed ({stats.completed})</h3>
            <div className="space-y-2">
              {todos.filter((t) => t.completed).slice(0, 10).map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center gap-3 p-3 bg-[#1a1a1a]/50 rounded-xl text-gray-500"
                >
                  <span className="text-[#10b981]">✓</span>
                  <span className="line-through">{todo.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>TodoAI - Your intelligent task manager</p>
          <p className="mt-2">AI suggestions are simulated for demo purposes</p>
        </footer>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}