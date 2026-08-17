---
title: "Physics-Constrained CNN and Bayesian Inference for Beam-Parameter Inversion"
description: "Pairing a neural network with a physical equation and a probability distribution, turning laser beam-parameter measurement from black-box fitting into a checkable measurement system."
order: 3
tags:
  - "AI for Optics"
  - "Bayesian Inference"
  - "CNN"
  - "Uncertainty Quantification"
---

> Jul 2025 - Feb 2026 · Jie Xu's group, School of Physics and Astronomy, SYSU · First author · University Physics accepted · National Second Prize, AI + Physics Experiment Track

**Problem.** Measuring a laser's waist radius, waist position, and beam quality factor usually relies on a second-moment integral, which diverges on noisy, saturated, or uneven spots. A bare CNN reads the beam width, but it tells you nothing about how trustworthy the number is or whether it follows Gaussian propagation.

**Insight.** Pair the neural network with a physical equation as referee and a probability distribution for uncertainty, turning black-box fitting into a checkable measurement.

![The fitted beam-width curve against CNN-extracted points](/images/laser-beam-fit.png)

**Method.**

- Trained a CNN on 25,600 physics-driven synthetic spots with realistic detector noise, reaching 2.32% MAPE on beam width.
- Fed the CNN widths into the Gaussian-beam hyperbolic equation and fit with Levenberg-Marquardt; added MCMC posterior sampling and Monte Carlo perturbation for uncertainty analysis.

![The posterior distribution over beam parameters from Monte Carlo sampling](/images/laser-beam-posterior.png)

**Result.**

- Fit R² 0.987 on a single lens, 0.982 transferred to a lens group; beam quality factor 1.028 near the ideal mode.
- Monte Carlo uncertainty 1.21 µm, 24% lower than the conventional 1.60 µm, explained by a -0.76 correlation between waist position and quality factor.
- Accepted at University Physics; National Second Prize in the AI + Physics experiment track.

**Takeaway.** A number without a physical equation and a probability distribution floats in the air. Interpretability decides whether the number can be trusted.
