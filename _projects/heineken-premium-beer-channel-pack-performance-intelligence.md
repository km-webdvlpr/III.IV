---
title: "Heineken South Africa: Premium Beer Channel & Pack Performance Intelligence"
date: 2026-04-04
summary: "Built a commercial intelligence case study using synthetic beer-category data to examine how pack formats, channels, and promotions shape premium beer performance in Gauteng."
tags: ["Python", "Commercial Analytics", "FMCG", "Synthetic Data"]
featured: true
roleFocus: "Commercial Intelligence | Category Performance"
projectShows:
  - "Pack and channel analysis"
  - "Promotion trade-off logic"
  - "Market-focused growth thinking"
snapshot:
  problem: "Premium beer performance depends on channel mix and pack strategy, but those trade-offs are not always visible in one view."
  focus: "I built a synthetic category dataset and tested how volume, repeat purchase, and margin move across packs, channels, and promotions."
  outcome: "The result is a pack-and-channel model that helps sort scale from commercial quality and shows which combinations are worth reviewing first."
repo: "https://github.com/km-webdvlpr/heineken-premium-beer-performance"
demo: "https://km-webdvlpr.github.io/heineken-premium-beer-performance/"
repoLabel: "Open GitHub project"
demoLabel: "Live case study"
---

## Overview
This case study examines premium beer performance in Gauteng, with a focus on how pack formats and sales channels influence volume, repeat purchase, and margin quality.

## Business Context
Premium beer portfolios do not move on brand equity alone. The result also depends on the mix of single-serve and multi-pack formats, the role of take-home retail versus on-premise consumption, and whether promotions are helping or distorting performance.

## Problem Statement
The category needed a clearer view of which pack and channel combinations were creating healthier commercial patterns, rather than simply moving sales volume at the expense of margin.

## Analyst Objective
Build a commercial intelligence case study that tests how pack strategy, channel mix, and promotions affect premium beer performance in Gauteng, and identify which combinations the model suggests reviewing first.

## Stakeholders
- Commercial and category teams need a clearer view of pack and channel trade-offs.
- Growth teams need evidence on where premium beer expansion looks most commercially attractive.
- Brand and promotion teams need better visibility into where uplift supports or weakens margin quality.

## Key Questions
- Which pack formats drive the most meaningful volume and repeat purchase?
- Which channels create the strongest balance of value, margin, and commercial scale?
- Where do promotions create useful momentum, and where do they weaken the economics?
- Which pack and channel combinations rank highest in Gauteng once repeat purchase, margin, and scale are weighted together?

## Workflow Thinking
- Pack choice shapes both shopper behaviour and margin structure.
- Channel choice affects how volume, value, and repeat purchase convert into commercially useful growth.
- Promotion analysis only becomes useful when it is read alongside channel role and pack economics.

## KPI Framework
- Commercial metrics: volume, value, average margin contribution, promo uplift.
- Behaviour metrics: repeat purchase rate, pack-format preference, channel concentration.
- Market lens: Gauteng volume share, Gauteng opportunity score, top-ranked pack-channel combinations.

These metrics mattered because the purpose was to compare growth quality inside a synthetic decision-support model, not just total sales activity.

## Approach
- Designed a synthetic beer-category dataset with believable patterns across customers, transactions, packs, and promotions.
- Analysed pack performance across single-serve and multi-pack formats.
- Compared channel trade-offs across take-home retail, on-premise, and wholesale.
- Reviewed promotion uplift against margin pressure and then ranked Gauteng combinations with a weighted scoring model.

## Insights
- `6_pack_can` is the strongest repeat-purchase format in the portfolio.
- Take-home retail remains the main driver of premium beer volume.
- Promotions lift demand, but the margin trade-off is visible and needs active management.
- Gauteng serves as the main comparison lens once pack strength and channel economics are read together.

## Deliverables
- Synthetic FMCG dataset across transactions, customers, packs, and promotions
- Jupyter notebook for category analysis
- Exported charts for pack performance, channel mix, promotion trade-offs, and Gauteng opportunity
- Summary tables for commercial review
- Published GitHub Pages case study

## Results
- Overall repeat purchase rate landed at 50.8%.
- `6_pack_can` in take-home retail was the highest-volume pack-channel combination.
- Take-home retail delivered the strongest average margin contribution in the final model.
- `12_pack` in take-home retail ranked first in the Gauteng opportunity model.

## Interpretation Notes
- This is a synthetic case study built to test pack and channel decision logic, not a claim about live Heineken trading data.
- Gauteng carries most of the modelled volume by design, so it is best treated as the main comparison lens rather than a discovered market truth.
- The Gauteng opportunity score is a weighted ranking built from repeat purchase, average margin, and volume share.

## Next Steps
- Extend the model to compare Heineken and Amstel more explicitly at brand level.
- Add retailer-specific pack and promo scenarios to test channel execution choices.
- Build a second FMCG case study to compare alcohol with another repeat-purchase category.

## Embedded Project
<div style="position:relative;height:78vh;min-height:460px;border:1px solid var(--border);border-radius:.45rem;overflow:hidden;background:var(--panel);margin-top:.75rem;">
  <iframe
    src="https://km-webdvlpr.github.io/heineken-premium-beer-performance/"
    title="Heineken South Africa: Premium Beer Channel & Pack Performance Intelligence"
    loading="lazy"
    style="width:100%;height:100%;border:0;"
  ></iframe>
</div>

## Links
- Repository: [heineken-premium-beer-performance](https://github.com/km-webdvlpr/heineken-premium-beer-performance)
- Live case study: [GitHub Pages](https://km-webdvlpr.github.io/heineken-premium-beer-performance/)
