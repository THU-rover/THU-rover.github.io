---
title: "S-Crescendo: Simulating Higher-Order Nonlinear Circuits"
description: "Building training data from first- to third-order RC networks, then letting the model follow modal structure in the S-domain to reach ninth-order circuits it never saw in training."
order: 2
tags:
  - "AI for EDA"
  - "Transformer"
  - "S-Domain"
  - "Nonlinear Systems"
---

> Dec 2024 - May 2025 · Guanzhong's group, School of Microelectronics Science and Technology, SYSU · Third author · NeurIPS 2025 accepted

**Problem.** In chip backend design, nonlinear drivers sit next to complex RC parasitic networks. As circuit order climbs, SPICE's Newton-Raphson iterations and matrix solves become prohibitively expensive. Existing surrogates speed up a single simulation but drop waveform detail in steep transients and fail on higher-order networks never seen in training.

**Insight.** An RC network decomposes in the S-domain into poles and residues, each pair a decaying mode. If the model reads these modes instead of memorizing whole waveforms, rules learned on low-order systems can be carried step by step to higher orders.

![The nested architecture: a baseline first-order predictor followed by a cascade of residual correction modules](/images/s-crescendo-architecture.png)

**Method.**

- Built HSPICE training data from first- to third-order RC netlists: extracted nodes, resistors, and voltages, then fit transfer functions into pole-residue expansions.
- Proposed Markov-style state compression for higher-order generalization: keep only the previous and current order's poles, residues, and time, so each correction answers one small question.

![Generalization to fourth- through ninth-order transfer functions](/images/s-crescendo-generalization.png)

**Result.**

- Trained on circuits up to third order, tested directly on fourth through ninth: R² ≈ 0.984 on ninth-order nonlinear circuits.
- Up to 18.6× inference speedup over commercial HSPICE on 10 ns / 1000-step transients.
- Accepted at NeurIPS 2025.

**Takeaway.** Data preprocessing decides what the model can see. The form in which a physical object enters the network already writes down the rules it can learn, and the parts it cannot.
