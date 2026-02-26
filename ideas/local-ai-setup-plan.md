# Local AI Setup Plan for Mac

**Prepared for:** Viktor (harkylton)  
**Date:** February 25, 2026  
**Goal:** Set up local AI models for voice transcription, TTS, and image generation

---

## Overview

This plan outlines the best local AI tools for your M-series Mac, balancing quality, performance, and ease of setup. All options work well with Apple Silicon's unified memory architecture.

---

## 1. Voice Transcription (Speech-to-Text)

### Recommended: **MLX Whisper**

**Why:**
- Optimized for Apple Silicon (M1/M2/M3/M4)
- Fast inference using MLX framework
- No cloud dependencies - fully offline
- Good accuracy for Swedish and English

**Hardware Requirements:**
- Any M-series Mac
- 8GB RAM minimum (16GB+ recommended)
- ~2GB free disk space

**Setup Steps:**

1. **Install Python 3** (if not already installed):
   ```bash
   python3 --version
   # If needed: brew install python
   ```

2. **Install MLX Whisper and dependencies:**
   ```bash
   pip install mlx-whisper pyaudio numpy pyperclip
   ```

3. **Download model:**
   - First run will auto-download `mlx-community/whisper-tiny` (fastest)
   - For better accuracy: use `mlx-community/whisper-medium` or `whisper-large-v3`

4. **Create transcription script** (example):
   ```bash
   cat > ~/bin/mlx-transcribe << 'EOF'
   #!/usr/bin/env python3
   import mlx_whisper
   import pyaudio
   import numpy as np
   import pyperclip
   
   MODEL_NAME = "mlx-community/whisper-tiny"
   FORMAT = pyaudio.paInt16
   CHANNELS = 1
   RATE = 16000
   CHUNK = 1024
   
   def transcribe():
       audio = pyaudio.PyAudio()
       stream = audio.open(format=FORMAT, channels=CHANNELS, rate=RATE, input=True, frames_per_buffer=CHUNK)
       
       frames = []
       while True:
           data = stream.read(CHUNK, exception_on_overflow=False)
           audio_data = np.frombuffer(data, dtype=np.int16)
           if np.max(np.abs(audio_data)) > 500:
               frames.append(audio_data.astype(np.float32) / 32768.0)
           else:
               if len(frames) > 0:
                   break
       
       if frames:
           audio_data = np.concatenate(frames)
           result = mlx_whisper.transcribe(audio_data, path_or_hf_repo=MODEL_NAME)
           transcription = result["text"]
           print(transcription)
           pyperclip.copy(transcription)
       
       stream.stop_stream()
       stream.close()
       audio.terminate()
   
   if __name__ == "__main__":
       transcribe()
   EOF
   ```

5. **Make executable:**
   ```bash
   chmod +x ~/bin/mlx-transcribe
   ```

**Estimated Setup Time:** 10-15 minutes

**Integration with OpenClaw:**
- Use the existing `openai-whisper` skill (local version)
- Or create custom script using MLX Whisper for better Mac performance

---

## 2. Text-to-Speech (TTS)

### Recommended: **XTTS-v2** (via Coqui TTS)

**Why:**
- High-quality, natural-sounding voices
- Multilingual support (including Swedish)
- Voice cloning capability
- Runs locally on Mac

**Alternative: Piper** (if you want faster, lighter option)

**Hardware Requirements:**
- M-series Mac with 8GB+ RAM
- GPU acceleration recommended (Apple Silicon handles this well)
- ~1-2GB disk space

**Setup Steps:**

1. **Install dependencies:**
   ```bash
   pip install TTS pydub
   ```

2. **Create TTS script:**
   ```bash
   cat > ~/bin/tts-generate << 'EOF'
   #!/usr/bin/env python3
   from TTS.api import TTS
   
   def generate_speech(text, output_file="output.wav"):
       # Load XTTS-v2 model
       tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2")
       
       # Generate speech
       tts.tts_to_file(text=text, file_path=output_file)
       print(f"Generated: {output_file}")
   
   if __name__ == "__main__":
       import sys
       if len(sys.argv) > 1:
           generate_speech(" ".join(sys.argv[1:]))
       else:
           print("Usage: tts-generate 'text to speak'")
   EOF
   chmod +x ~/bin/tts-generate
   ```

3. **First run will download the model** (~2GB)

**Estimated Setup Time:** 15-20 minutes (including model download)

**Integration with OpenClaw:**
- The existing `tts` tool can be configured to use local XTTS-v2
- Replace cloud API calls with local generation

---

## 3. Image Generation

### Recommended: **DiffusionBee** (Easiest) or **Draw Things** (More Features)

**Why:**
- One-click install for Mac
- Optimized for Apple Silicon
- No technical setup required
- Supports Stable Diffusion 3, SDXL, and Flux models

**Hardware Requirements:**
- M-series Mac
- 8GB RAM minimum (16GB+ recommended for larger models)
- 5-10GB free disk space for models

**Setup Steps (DiffusionBee):**

1. **Download from:** https://diffusionbee.com/download

2. **Install and launch** - one-click installer

3. **Choose models:**
   - SDXL (good quality, faster)
   - Flux.1 (best quality, slower)
   - Stable Diffusion 3

**Alternative: Draw Things** (Mac App Store)
- More advanced features
- Better UI
- Supports more model types
- $9.99 one-time purchase

**Estimated Setup Time:** 5-10 minutes

**Integration with OpenClaw:**
- Create API wrapper around DiffusionBee or Draw Things
- Or use existing `nano-banana-pro` skill with local model

---

## 4. Model Selection Summary

| Task | Model | Quality | Speed | RAM | Setup Time |
|------|-------|---------|-------|-----|------------|
| STT | Whisper-tiny (MLX) | Good | Fast | 4GB | 10 min |
| STT | Whisper-medium (MLX) | Excellent | Medium | 8GB | 10 min |
| TTS | XTTS-v2 | Excellent | Medium | 8GB | 15 min |
| TTS | Piper | Good | Very Fast | 2GB | 10 min |
| Image | SDXL | Excellent | Medium | 8GB | 5 min |
| Image | Flux.1 | Best | Slow | 16GB | 5 min |

---

## 5. Total Estimated Costs

- **Software:** $0 (all open source)
- **Hardware:** Already have (M-series Mac)
- **Disk Space:** ~15-20GB total
- **Time:** ~40-50 minutes total setup

---

## 6. Integration Roadmap

### Phase 1 (Week 1): Basic Setup
- Install MLX Whisper for transcription
- Install DiffusionBee for image generation
- Test both independently

### Phase 2 (Week 2): TTS Setup
- Install XTTS-v2
- Create voice generation scripts
- Test with various prompts

### Phase 3 (Week 3): OpenClaw Integration
- Configure OpenClaw to use local models
- Replace cloud API calls with local alternatives
- Test end-to-end workflows

### Phase 4 (Week 4): Optimization
- Fine-tune model parameters
- Add voice cloning if desired
- Create custom scripts for specific use cases

---

## 7. Potential Challenges

1. **Memory constraints:** Large models (Flux, Whisper-large) need 16GB+ RAM
2. **Initial download times:** Models range from 1-10GB each
3. **Inference speed:** Mac M-series is fast but not as quick as high-end GPU
4. **Swedish language support:** XTTS-v2 supports Swedish, but test quality

---

## 8. Next Steps

1. **Confirm disk space** - ensure you have ~20GB free
2. **Choose model sizes** based on your RAM (8GB vs 16GB+)
3. **Start with transcription** (MLX Whisper) - most immediate benefit
4. **Add TTS** once transcription is working
5. **Add image generation** last (least critical for voice features)

---

## Contact

Questions or need help with any step? Just ask!