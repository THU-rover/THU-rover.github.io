---
title: "Diffusion Reproduction and One-Step Distillation on CIFAR-10"
description: "Reproducing DDPM/EDM from scratch, then distilling a 1000-step diffusion model into a single-step generator, with an ablation that pins down why the teacher's quality is the hard ceiling."
order: 4
tags:
  - "Diffusion Models"
  - "Distillation"
  - "Generative Modeling"
  - "CIFAR-10"
---

> Dec 2025 - Apr 2026 · He Sun's group, School of Software and Microelectronics, PKU · Independent · CSIG entry test

**Problem.** A standard diffusion model needs around 1000 sampling steps to produce a good image, which makes inference slow and expensive. The task had two parts: reproduce DDPM/EDM training from scratch, then use a distillation method such as Diff-Instruct to compress the multi-step model into a single-step generator.

**Insight.** You cannot train a one-step student by directly fitting the teacher's output with MSE, because one noisy input maps to many possible images and MSE regresses to their average, a blurred superposition. Distillation has to match distributions through KL or score terms, and the student can never exceed its teacher's quality.

**Method.**

- Built a DDPM/EDM pipeline in PyTorch from scratch: forward noising, reverse denoising with epsilon-prediction, and a UNet-based network, reaching a working prototype around FID 60.
- Distilled with Diff-Instruct: integrated KL divergence plus gradient alignment between student and teacher scores, converted through Tweedie's formula into denoiser outputs.
- Ran a controlled ablation across a weak self-trained teacher and a strong pretrained NVLabs EDM teacher, plus a bonus SiD (score identity distillation) variant.

![Single-step generation after distillation converges](/images/diffusion-one-step.png)

**Result.**

- Weak teacher (FID ≈ 60) distilled to a student at FID ≈ 168.5, worse than the teacher itself.
- Strong pretrained teacher distilled to a single-step student at FID 7.35, from roughly 1000 steps down to one.
- Measured speedup near 1000× on the strong teacher proxy, and roughly 484× against the weak teacher.
- SiD reached FID 8.58 under a 13.4 GB single-GPU budget.

**Takeaway.** Distillation transfers and compresses a teacher's ability, it never creates ability beyond it. The single most decisive factor is the teacher's quality, not the distillation recipe.
