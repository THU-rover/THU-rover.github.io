---
title: "SIM1: Reproducing a Physics-Aligned Data Scaler for Deformable Worlds"
description: "Reconstructing SIM1's end-to-end loop from paper to simulation replay to data export, and finding that physically runnable rollouts are still far from task-successful ones."
order: 5
tags:
  - "Physics AI"
  - "Deformable Manipulation"
  - "World Models"
  - "Simulation"
---

> Feb 2026 - Jul 2026 · Big Data and High-Performance Computing group, PKU · Survey and reproduction · Internship

**Problem.** Cloth folding is an under-actuated, high-dimensional nonlinear system. Real robot data is expensive and hard to scale, while purely generative world models lack explicit PDE, conservation, and contact constraints, so they hallucinate penetration, mass loss, and drifting objects. The gap sits between unscalable real collection and under-constrained generative models.

**Insight.** A physics-aligned simulator fills that gap by turning limited reference trajectories into large-scale, dynamics-consistent, replayable, and filterable rollouts. It is a zero-shot data scaler, not a video renderer.

**Method.**

- Reconstructed SIM1's full loop from paper understanding and system decomposition to simulation replay, structured state export, pixel-level video rendering, and quality analysis.
- Built a headless physics simulation and long-horizon parallel replay pipeline on a remote cluster, generating 20 cloth-folding rollouts, each with robot-cloth interaction, USD mesh time series, video, and computable geometry metrics.

![Key replay frames of sample 000003: grasp, fold, release, and second fold](/images/sim1-replay.png)

**Result.**

- All 20 rollouts passed joint-trajectory continuity checks, so action injection and physical replay are closed.
- Only 7 of 20 passed the cloth geometry filter: final height, plane drift, and bounding area diverged on the rest.
- The failure concentrates in the second fold, where small placement errors get amplified by self-collision and friction into large final-state spread.

**Takeaway.** Physically runnable does not mean task-successful, and passing a coarse geometry filter does not mean high-quality learning data. For deformable worlds, evaluation has to move from a final-frame geometry gate toward staged, semantics-aware, feedback-driven data generation.
