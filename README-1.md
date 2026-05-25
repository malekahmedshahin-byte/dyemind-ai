<div align="center">

# 🧪 DyeMind AI
### Intelligent Dyeing Brain v1.0

**Expert colour prediction · Sustainability scoring · Recipe optimisation · Fault diagnosis**

[![Version](https://img.shields.io/badge/version-1.0-blue?style=flat-square)](https://github.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Offline](https://img.shields.io/badge/works-100%25%20offline-teal?style=flat-square)](#)
[![No API](https://img.shields.io/badge/no%20API%20key-required-orange?style=flat-square)](#)
[![HTML](https://img.shields.io/badge/built%20with-HTML%20%2F%20JS-yellow?style=flat-square)](#)

---

> *The world's first intelligent dyeing brain — runs entirely in the browser with zero dependencies.*

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Modules](#-modules)
  - [🎨 Dye Recipe Generator](#-module-1--dye-recipe-generator)
  - [⚡ Recipe Optimizer](#-module-2--recipe-optimizer)
  - [🔧 Fault Diagnosis](#-module-3--fault-diagnosis)
- [Supported Fibres](#-supported-fibres)
- [Supported Dye Classes](#-supported-dye-classes)
- [How It Works](#-how-it-works)
- [Getting Started](#-getting-started)
- [Usage Tutorial](#-usage-tutorial)
- [Technical Architecture](#-technical-architecture)
- [Sustainability Metrics](#-sustainability-metrics)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## 🌟 Overview

**DyeMind AI** is a browser-based intelligent assistant for textile dyeing professionals, students, and researchers. It combines colour science (CIE L\*a\*b\*, ΔE\* calculations), real-world dye chemistry knowledge, and sustainability metrics into a single offline tool — no server, no API key, no subscription.

Whether you're formulating a reactive dye recipe for cotton, optimising for lowest carbon footprint, or diagnosing a patchy dyeing fault, DyeMind AI gives you expert-level guidance in seconds.

---

## 🔗 Live Demo

```
Simply open index.html in any modern browser — no build step, no install.
```

> ✅ Works in Chrome, Firefox, Safari, and Edge. No internet connection required after the initial page load (Google Fonts loads once from CDN).

---

## 📸 Screenshots

### Hero — Landing View
```
┌─────────────────────────────────────────────────────────────┐
│  🧪 DyeMind AI                          Abdul Malek · v1.0  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│         ── The World's First Intelligent Dyeing Brain ──    │
│                                                             │
│              Dye Smarter.  Think Greener.                   │
│                                                             │
│   Expert colour prediction · Sustainability scoring ·       │
│   Recipe optimisation · Fault diagnosis — all offline       │
│                                                             │
│  [ 🎨 Dye Recipe ]  [ ⚡ Optimizer ]  [ 🔧 Fault Diagnosis ]│
└─────────────────────────────────────────────────────────────┘
```

### Module 1 — Dye Recipe Generator
```
┌──────────────────────┬──────────────────────────────────────┐
│  Colour & Fabric     │  Recipe Output                       │
│  ─────────────────   │  ─────────────────────────────────   │
│  Target Colour: 🔵   │  ┌─ Metrics ──────────────────────┐  │
│  Fibre: Cotton       │  │ ΔE* 0.9 │ Eco 78 │ L* 48.2    │  │
│  Weight: 100 kg      │  └────────────────────────────────┘  │
│  Depth: Deep         │                                      │
│  Bath Ratio: 1:10    │  Dye Class: REACTIVE                 │
│                      │  Dyes:  C.I. Reactive Blue 222       │
│  [Generate Recipe]   │         C.I. Reactive Red 198        │
│                      │         C.I. Reactive Yellow 145     │
│                      │                                      │
│                      │  Auxiliaries: Na₂SO₄, Na₂CO₃,       │
│                      │  Wetting Agent, Levelling Agent       │
│                      │                                      │
│                      │  [ ⬇ Download Recipe PDF ]          │
└──────────────────────┴──────────────────────────────────────┘
```

### Module 2 — Optimizer
```
┌──────────────────────┬──────────────────────────────────────┐
│  Recipe Optimizer    │  🥇 Low-Salt Reactive (Bifunctional) │
│  ─────────────────   │     Eco: 88/100 · ΔE* 1.1           │
│  Colour: 🔴          │                                      │
│  Fibre: Cotton       │  🥈 Standard Reactive (Trichromatic) │
│  Priority: Eco       │     Eco: 74/100 · ΔE* 0.9           │
│                      │                                      │
│  [Compare & Optimise]│  🥉 Vat Dye Route                   │
│                      │     Eco: 68/100 · ΔE* 2.1           │
└──────────────────────┴──────────────────────────────────────┘
```

### Module 3 — Fault Diagnosis
```
┌──────────────────────┬──────────────────────────────────────┐
│  Fault Diagnosis     │  Fault: Uneven Shade / Patchiness    │
│  ─────────────────   │  Severity: HIGH · Confidence: 91%   │
│  Symptom:            │                                      │
│  ✓ Uneven Shade      │  ⚡ Immediate: Stop batch, rinse     │
│                      │                                      │
│  Fibre: Cotton       │  Root Causes:                        │
│  Dye Class: Reactive │  ▸ Uneven salt addition              │
│                      │  ▸ Poor liquor circulation           │
│  [Diagnose Fault →]  │                                      │
│                      │  Corrective Steps: 1. Re-enter at    │
│                      │  40°C... 2. Reduce ramp rate...      │
└──────────────────────┴──────────────────────────────────────┘
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Colour Science** | HEX → CIE L\*a\*b\* conversion, ΔE\* colour accuracy scoring |
| 🧪 **Dye Recipe Engine** | Trichromatic recipe formulation for 30+ fibre types |
| 🌱 **Sustainability Scoring** | Eco score (0–100), CO₂e estimation, water usage |
| ⚡ **Recipe Optimizer** | Ranks 3 recipe options by Cost / Eco / Quality priority |
| 🔧 **Fault Diagnosis** | Root-cause analysis for 10+ dyeing faults with corrective steps |
| 📄 **PDF Export** | Download full recipe card with process curve chart (via jsPDF) |
| 🌊 **Blend Support** | One-bath and two-bath processes for blended & tri-component fabrics |
| 📴 **100% Offline** | No API key, no backend, no data sent anywhere |
| 📱 **Responsive** | Works on desktop and mobile browsers |

---

## 📦 Modules

---

### 🎨 Module 1 — Dye Recipe Generator

The core module. Pick a target colour, select your fibre, set batch parameters, and receive a complete professional dye recipe.

**Inputs:**

| Field | Description |
|---|---|
| Target Colour | HEX colour picker or manual `#RRGGBB` entry |
| Fibre Type | 12 pure fibres + 15 blended fabrics + 5 tri-component blends |
| Blend Ratio | Adjustable % ratio with visual bar (for blend fabrics) |
| Batch Weight | 0.1 – 9,999 kg |
| Shade Depth | Pale / Light / Medium / Deep / Heavy Deep |
| Bath Ratio | 1:4 to 1:20 |
| Machine Type | Jet, Winch, Jigger, Overflow, HT Beam, Beam |
| Water Hardness | Soft / Medium / Hard — adjusts auxiliaries |

**Outputs:**

- **Colour metrics:** L\*, a\*, b\*, shade name, ΔE\* accuracy score
- **Dye selection:** Primary dye class + up to 3 individual dyes with C.I. names
- **Dosing table:** g/L and total kg for each dye and auxiliary chemical
- **Auxiliaries:** Wetting agent, levelling agent, salt (Na₂SO₄), soda ash (Na₂CO₃), sequestering agent, anti-creasing agent
- **Process curve:** Step-by-step temperature and time programme
- **Sustainability block:** Eco score, carbon footprint (kg CO₂e), water consumption (L)
- **Blend warnings:** Special notes for spandex temperature limits, two-bath sequencing, etc.
- **PDF download:** Printable recipe card with embedded Chart.js process curve

---

### ⚡ Module 2 — Recipe Optimizer

Compare up to 3 ranked recipe strategies for the same colour and fibre, prioritised by your production goal.

**Inputs:**

| Field | Options |
|---|---|
| Optimise Priority | Balanced · Lowest Cost · Lowest Carbon · Best Fastness |
| Target Colour | HEX picker |
| Fibre Type | Same fibre library as Module 1 |
| Batch Weight | kg |

**Output — Ranked Option Cards:**

Each ranked option (🥇 🥈 🥉) shows:

- **Dye class & approach** (e.g. "Low-Salt Reactive – Bifunctional")
- **Eco Score** / **ΔE\*** / **Fastness rating** / **CO₂e**
- **Key advantage** and **trade-off**
- **Recipe summary** in one line
- **Cost Index** (1–10) and **Water usage** (L)

---

### 🔧 Module 3 — Fault Diagnosis

Select a dyeing fault symptom, specify fibre and dye class, and receive a structured root-cause diagnosis.

**Fault Symptoms Covered:**

| Fault | Description |
|---|---|
| Uneven Shade / Patchiness | Irregular colour distribution |
| Shade too Light | Under-exhaustion or fixation failure |
| Shade too Dark | Over-dosing or exhaustion overshoot |
| Poor Wash Fastness | Dye bleeding on washing |
| Poor Rub Fastness | Surface dye transfer on rubbing |
| Bronzing / Surface Colour | Dye aggregation on fibre surface |
| Unlevel Dyeing on Blends | Differential uptake between blend components |
| Running Stains / Marks | Machine marks or chemical burns |
| Colour Change After Wash | pH or oxidation-induced hue shift |
| Foaming / Scum | Auxiliary overuse or water contamination |

**Diagnosis Output:**

- **Severity** (Low / Medium / High / Critical) and **confidence %**
- **Salvageable?** Yes / No
- **Immediate action** (what to do right now)
- **Root causes** list
- **Corrective steps** (numbered)
- **Salvage method** (if applicable)
- **Preventive measures**
- **Parameters to check** (tagged chips)
- **Lab tests recommended**
- **Estimated rework cost**

---

## 🧵 Supported Fibres

### Pure Fibres (12)
`Cotton` `Polyester` `Nylon` `Wool` `Silk` `Linen` `Viscose` `Modal` `Tencel` `Acrylic` `Bamboo` `Hemp`

### Blended Fabrics (15)
`Cotton/Polyester (CVC/PC)` `Cotton/Nylon` `Cotton/Viscose` `Cotton/Modal` `Cotton/Tencel (Lyocell)` `Cotton/Linen` `Cotton/Spandex` `Polyester/Viscose (TR)` `Polyester/Wool` `Polyester/Nylon` `Polyester/Spandex` `Wool/Nylon` `Wool/Viscose` `Nylon/Spandex (Swimwear)` `Viscose/Nylon` `Tencel/Modal` `Linen/Viscose`

### Tri-Component Blends (5)
`Cotton/Polyester/Spandex` `Cotton/Viscose/Spandex` `Cotton/Modal/Spandex` `Polyester/Viscose/Spandex` `Polyester/Nylon/Spandex`

---

## 🎨 Supported Dye Classes

| Dye Class | Primary Fibres | Process |
|---|---|---|
| **Reactive** | Cotton, Viscose, Modal, Tencel, Linen, Bamboo, Hemp, Nylon | Cold pad-batch, exhaust at 60°C |
| **Disperse** | Polyester, Acrylic | HT at 130°C |
| **Acid** | Wool, Silk, Nylon | 98°C, pH 4–6 |
| **Vat** | Cotton, Linen, Hemp | Reduction/oxidation cycle |
| **Direct** | Cotton, Viscose, Linen | Simple exhaust |
| **Cationic** | Acrylic, modified Polyester | 98°C, pH 4–5 |
| **Chrome** | Wool | After-chrome mordanting |
| **Sulphur** | Cotton | Reduction exhaust |
| **Azoic** | Cotton | Coupling reaction |

---

## ⚙️ How It Works

DyeMind AI uses a **deterministic expert-rules engine** — no machine learning, no external API calls. All logic runs in the browser via vanilla JavaScript.

```
HEX Input
   │
   ▼
sRGB → CIE XYZ → CIE L*a*b*
   │
   ├─ Hue angle → Colour name
   ├─ L* → Shade depth (Pale / Light / Medium / Deep / Heavy Deep)
   └─ ΔE* scoring vs target
   
   │
   ▼
Fibre lookup in FIBRE_DYE_MAP
   │
   ├─ Primary dye class
   ├─ Alternative dye classes
   ├─ Blend process: one-bath / two-bath
   └─ Special notes (temp limits, spandex degradation, etc.)
   
   │
   ▼
Recipe engine
   │
   ├─ %owf calculation per shade depth
   ├─ Trichromatic dye selection (hue-based C.I. name lookup)
   ├─ Auxiliary dosing (salt, alkali, levelling, wetting)
   └─ Process programme (ramp rates, hold temps, times)
   
   │
   ▼
Sustainability scoring
   │
   ├─ Eco score (dye class base × fibre factor × auxiliaries)
   ├─ CO₂e estimation (kg) based on energy + chemical load
   └─ Water consumption (L) = weight × bath ratio
   
   │
   ▼
Output rendered to DOM (+ optional PDF export)
```

---

## 🚀 Getting Started

### Option 1 — Direct open (fastest)

```bash
# Clone the repository
git clone https://github.com/your-username/dyemind-ai.git

# Open in browser
open index.html
# or
double-click index.html
```

### Option 2 — Local server (optional)

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .

# Then open: http://localhost:8080
```

No build step. No npm install. No configuration.

---

## 📚 Usage Tutorial

### Step 1 — Generate a Dye Recipe

1. Click the **🎨 Dye Recipe** tab (active by default).
2. Click the **colour swatch** or type a HEX code (e.g. `#3A86FF`) into the input field.
3. Select your **Fibre Type** from the dropdown. If it's a blend, a ratio bar appears — adjust the % split.
4. Set your **Batch Weight** in kg (e.g. `100`).
5. Choose **Shade Depth**, **Bath Ratio**, **Machine Type**, and **Water Hardness**.
6. Click **Generate Recipe →**.
7. Review the output: colour metrics, dye dosing table, process steps, and sustainability block.
8. Click **⬇ Download Recipe PDF** to save a printable version with the process curve chart.

> 💡 **Tip:** For blended fabrics like Cotton/Polyester, DyeMind AI automatically generates a **two-bath process** (Disperse on polyester first, Reactive on cotton second).

---

### Step 2 — Compare Options with the Optimizer

1. Click the **⚡ Optimizer** tab.
2. Pick a colour and fibre type.
3. Set **Optimise Priority** — e.g. `Lowest Carbon / Greenest` for sustainability-focused production.
4. Click **Compare & Optimise →**.
5. Three ranked recipe options appear with medals (🥇🥈🥉), each showing Eco Score, ΔE\*, cost index, and water usage.

> 💡 **Tip:** Use `Balanced` priority for everyday production and `Best Fastness` when working on performance wear or automotive textiles.

---

### Step 3 — Diagnose a Dyeing Fault

1. Click the **🔧 Fault Diagnosis** tab.
2. Click a **fault symptom** card (e.g. "Uneven Shade / Patchiness").
3. Select your **Fibre** and **Dye Class** from the dropdowns.
4. Click **Diagnose Fault →**.
5. The panel shows: severity, confidence %, immediate action, root causes, corrective steps, salvage method, and recommended lab tests.

> ⚠️ **Critical faults** (e.g. severe running stains) are flagged in red with high severity and include both salvage and prevention guidance.

---

## 🏗️ Technical Architecture

```
index.html
├── CSS (inline)
│   ├── CSS custom properties (design tokens)
│   ├── Responsive grid (two-col, met-grid)
│   └── Animations (fadeUp, spin, pulse, blink)
│
├── HTML
│   ├── <header> — sticky nav with logo + version badge
│   ├── <section class="hero"> — headline
│   ├── <div class="tabs"> — tab navigation
│   └── <div class="section"> — 3 tab panels
│
└── JavaScript (inline)
    ├── Colour helpers
    │   ├── hexToRgb()
    │   ├── rgbToLab()       — sRGB → XYZ (D65) → CIE L*a*b*
    │   ├── labToShadeDepth()
    │   └── labToName()
    │
    ├── Data maps
    │   ├── FIBRE_DYE_MAP    — 30+ fibre/blend entries
    │   ├── BLEND_INFO       — detailed blend process notes
    │   └── FAULT_DATA       — 10+ fault symptom objects
    │
    ├── Module 1 — generateRecipe()
    ├── Module 2 — generateOptimizer() + computeOptimizerOptions()
    ├── Module 3 — generateFault() + computeFault()
    │
    └── PDF export — downloadPDF() using jsPDF + Chart.js
```

**External libraries (CDN, loaded once):**

| Library | Version | Purpose |
|---|---|---|
| [jsPDF](https://github.com/parallax/jsPDF) | 2.5.1 | PDF recipe export |
| [Chart.js](https://www.chartjs.org/) | 4.4.1 | Process curve chart in PDF |
| Google Fonts | — | DM Sans, DM Serif Display, IBM Plex Mono |

---

## 🌱 Sustainability Metrics

DyeMind AI calculates three sustainability indicators for every recipe:

### Eco Score (0–100)
Higher = greener. Calculated from:
- Dye class base score (Vat/Reactive low-salt = highest; Azoic/Chrome = lowest)
- Fibre factor (natural fibres score higher than synthetics)
- Auxiliary chemical load
- Process temperature (lower temperature = better score)

### Carbon Footprint (kg CO₂e)
Estimated from:
- Energy consumption of heating cycle (kWh based on bath volume + ramp profile)
- Chemical production emissions (CO₂e coefficients per dye class)
- Batch weight

### Water Consumption (L)
```
Water = Batch Weight (kg) × Bath Ratio × 1,000
```
e.g. 100 kg at 1:10 = 1,000 L

---

## 🗺️ Roadmap

- [x] v1.0 — Core recipe engine, optimizer, fault diagnosis, PDF export
- [ ] v1.1 — Lab dip / pilot recipe scaling calculator
- [ ] v1.2 — Colour matching from uploaded fabric photo (camera input)
- [ ] v1.3 — Historical recipe database (IndexedDB, local storage)
- [ ] v1.4 — Wastewater treatment cost estimator
- [ ] v2.0 — AI-assisted recipe correction from spectrophotometer ΔE\* feedback

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/your-username/dyemind-ai.git

# Create a feature branch
git checkout -b feature/my-new-feature

# Make your changes to index.html
# (All logic is in one file — easy to navigate)

# Commit and push
git commit -m "Add: my new feature"
git push origin feature/my-new-feature

# Open a Pull Request on GitHub
```

**Good first contributions:**
- Add new fault symptoms to `FAULT_DATA`
- Add new fibre types to `FIBRE_DYE_MAP`
- Improve the eco score algorithm
- Add more C.I. dye names to the colour lookup tables
- Translations / i18n

---

## 👤 Author

**Abdul Malek**

Built with deep knowledge of textile dyeing chemistry and a passion for making expert tools accessible to everyone in the industry.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Abdul Malek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

<div align="center">

**DyeMind AI** — *Dye Smarter. Think Greener.*

⭐ If this project helped you, please consider giving it a star on GitHub!

</div>
