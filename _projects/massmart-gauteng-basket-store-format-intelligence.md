---
title: "Massmart Gauteng Basket & Store Format Intelligence"
date: 2026-04-04
summary: "Retail basket intelligence case study using synthetic basket data to compare Makro and Game through basket composition, category mix, repeat shopping behaviour, and format-level trade-offs."
tags: ["Retail Analytics", "Commercial Intelligence", "Basket Behaviour", "Synthetic Data"]
featured: true
roleFocus: "Commercial Intelligence | Retail Basket Analytics"
projectShows:
  - "Basket behaviour modelling"
  - "Store-format comparison"
  - "Decision-oriented retail analysis"
snapshot:
  problem: "Massmart needs a clearer view of which basket compositions and store formats create stronger value and repeat behaviour across groceries, liquor, and general merchandise."
  focus: "I built a synthetic basket-level retail dataset across Makro and Game, then ranked basket types, category combinations, promotions, and shopper signals."
  outcome: "The result is a retail basket model that helps sort stronger patterns from noisier ones and shows which areas are worth reviewing first."
repo: "https://github.com/km-webdvlpr/massmart-gauteng-basket-intelligence"
demo: "https://km-webdvlpr.github.io/massmart-gauteng-basket-intelligence/"
repoLabel: "Open GitHub project"
demoLabel: "Open live project"
---

## Overview
This case study looks at how basket composition and store format shape higher-value shopping behaviour across Makro and Game in Gauteng.

## Business Context
Retail growth is not just a traffic problem. It also depends on whether shoppers build baskets that are larger, broader, and more likely to repeat. For Massmart, that means understanding which store formats and category combinations create stronger basket value across groceries, liquor, and general merchandise.

## Problem Statement
The business needed a clearer view of which basket types, category combinations, and store formats were driving the clearest commercial patterns, rather than relying on headline transaction counts alone.

## Analyst Objective
Build a retail basket case study that identifies the basket patterns, promotion combinations, and shopper signals most closely associated with higher-value behaviour in Gauteng.

## Stakeholders
- Commercial and category teams deciding which basket missions to prioritise.
- Trading teams reviewing where category combinations should be promoted together.
- Store-format and growth teams comparing where Makro and Game are strongest.
- Leadership teams needing a cleaner view of what higher-value shoppers actually look like.

## Key Questions
- Which basket types create the strongest basket value and repeat behaviour?
- Which category combinations contribute the most value and penetration?
- Where is Makro outperforming Game, and where is Game outperforming Makro?
- Which promotion combinations create the clearest uplift once low-volume cells are removed, and where is the margin risk highest?
- Which shopper signals are most useful when identifying higher-value customers?

## Analysis Logic
- Basket value must be derived from category mix rather than assigned independently.
- Store format matters because Makro and Game are built for different basket missions.
- Repeat behaviour should correlate with basket quality, but still include noise so it behaves like retail rather than a scoring formula.
- Promotions are only useful when they are read together with uplift, margin pressure, basket composition, and sample size.

## KPI Framework
- Basket metrics: basket value, basket size, category diversity, private-label share.
- Behaviour metrics: repeat shopper rate, basket archetype distribution, high-value shopper share.
- Category metrics: combination penetration, value contribution, mix effect.
- Commercial metrics: promo uplift, margin compression risk, store-format ranking.

These metrics mattered because the project is designed as a synthetic retail decision-support model, not just a descriptive basket summary.

## Approach
- Designed a synthetic basket-level retail dataset with four basket archetypes: Quick Trip, Stock-Up, Liquor-Led, and Mixed Basket.
- Modelled category value across groceries, liquor, and general merchandise so basket totals behave realistically.
- Built ranked outputs for basket types, category combinations, store formats, and promotion impact.
- Added a decision layer that shows what the model suggests reviewing first.

## Insights
- Mixed Basket is the strongest value and repeat-purchase archetype in the portfolio.
- Makro outperforms on basket size and category breadth.
- Game remains better aligned to smaller, more accessible shopping missions.
- Category combinations matter more than isolated single-category pushes.
- Promotions create uplift in the model, but not without visible margin pressure.

## Deliverables
- Synthetic basket-level retail dataset across Makro and Game
- Ranked basket-type, category-combination, store-format, and promotion outputs
- Notebook and exported visuals for stakeholder storytelling
- Published standalone project plus embedded portfolio case file

## Results
- Overall repeat-shopping rate landed at 49.3%.
- Quick Trip remained the dominant basket type by count.
- Makro led on average basket size and repeat behaviour in the final model.
- Mixed Basket delivered the highest average basket value.

## Recommendations
- Start with Mixed Basket because it combines the highest value and stronger repeat behaviour in the model.
- Promote category combinations rather than single-category offers where basket crossover is already visible.
- Use Makro to deepen stock-up and mixed-basket missions.
- Use Game to expand accessible trips and household-led basket growth.
- Treat the highest-uplift promotions carefully when margin compression is visible, and avoid overreading thin promo cells.

## Interpretation Notes
- This is a synthetic case study built to test retail basket decision logic, not a claim about Massmart's live trading data.
- The high-value shopper view is descriptive. It is built from baskets above the portfolio's 70th percentile of value, so it should not be read as a predictive model.
- Store-format differences are partly shaped by the synthetic design, which makes this most useful as a decision framework rather than a market verdict.

## Embedded Project
<div style="position:relative;height:78vh;min-height:460px;border:1px solid var(--border);border-radius:.45rem;overflow:hidden;background:var(--panel);margin-top:.75rem;">
  <iframe
    src="https://km-webdvlpr.github.io/massmart-gauteng-basket-intelligence/"
    title="Massmart Gauteng Basket & Store Format Intelligence"
    loading="lazy"
    style="width:100%;height:100%;border:0;"
  ></iframe>
</div>

## Links
- Live project: [Massmart Gauteng Basket & Store Format Intelligence](https://km-webdvlpr.github.io/massmart-gauteng-basket-intelligence/)
- GitHub repo: [massmart-gauteng-basket-intelligence](https://github.com/km-webdvlpr/massmart-gauteng-basket-intelligence)
