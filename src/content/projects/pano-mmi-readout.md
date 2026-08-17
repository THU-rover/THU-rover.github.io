---
title: "PaNO: Readout-Aligned Simulation for Photonic Devices"
description: "Starting from the mismatch between a field surrogate's global error and its port readouts, organizing a neural operator along the propagation axis so the local quantities a designer actually cares about sit at the center of evaluation and design."
order: 1
tags:
  - "AI for Photonics"
  - "Neural Operator"
  - "MMI"
  - "Port Readout"
---

> Aug 2025 - present · Yuzhe Ma's group, Microelectronics Thrust, HKUST(GZ) / Guanzhong's group, SYSU · First author · NeurIPS 2026 under review

**Problem.** Photonic design runs FDTD/FDFD solvers over and over, at ten-plus seconds per device. Neural surrogates cut this to milliseconds, but they are judged by global field error while designers actually care about local port readouts: powers, splitting ratios, phases, coupling. A field can look accurate overall while the output-plane region drifts, so port power goes wrong and candidate devices get mis-ranked.

**Insight.** Port readouts are localized integrals over the output plane, produced by modal interference accumulated along the propagation axis. A surrogate must preserve the whole field-to-readout chain, not just dense-field accuracy.

![A field can look accurate while the output-plane profile that the port integrates drifts](/images/pano-mismatch.png)

**Method.**

- Introduced a Field/Mediator/Readout evaluation: dense field reconstruction, propagation and output diagnostics, and localized port readouts, all computed from the predicted complex field with no separate scalar head.
- Designed PaNO, a propagation-aligned operator: anisotropic front end, learned transverse modal tokens, a selective state-space scan along the propagation axis, cross-mode coupling, plus an output-aware reverse-residual branch (PaNO-R2).

![PaNO's propagation-aligned modal representation](/images/pano-architecture.png)

**Result.**

- PaNO cut port-power error from 0.2018 to 0.0739 despite slightly worse field error; PaNO-R2 reached the best field error 0.1471 and port power 0.0551, down 72.7% from NeurOLight, with output profile down 72.5%.
- One forward pass takes 6.19 ms, about three orders of magnitude faster than generating a reference field.
- First-author paper under review at NeurIPS 2026.

**Takeaway.** Evaluation comes before architecture. Naming the field-to-readout mismatch made the next step obvious: align the objective to the readout chain first, then organize the network's latent space along that chain.
