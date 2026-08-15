---
title: "Capitec: Consumer Fintech Ecosystem Adoption Intelligence"
date: 2026-04-03
summary: "Fintech product analytics case study using synthetic Capitec-shaped banking data to read activation, product depth, retention, and repeat-failure pressure."
tags: ["Fintech Analytics", "Product Analytics", "Retention", "Ecosystem Adoption", "Synthetic Data"]
featured: true
roleFocus: "Fintech Analytics | Product Intelligence"
projectShows:
  - "Adoption ladder analysis"
  - "Cross-sell and retention interpretation"
  - "Trust-failure impact modelling"
snapshot:
  problem: "Customer growth alone does not explain whether digital banking users are becoming retained, multi-product customers."
  focus: "I modelled a Capitec-shaped consumer banking dataset across activation, transactions, support, product attach, and retention to read where the ecosystem story strengthens or breaks."
  outcome: "The case turns consumer fintech behaviour into a clearer view of adoption depth, cross-sell opportunity, and trust risk."
demo: "https://km-webdvlpr.github.io/capitec-product-intelligence/"
demoLabel: "View project walkthrough"
repo: "https://github.com/km-webdvlpr/capitec-product-intelligence"
repoLabel: "Open GitHub project"
---

## Overview
Capitec: Consumer Fintech Ecosystem Adoption Intelligence is a product analytics case study built around the public shape of a large consumer fintech ecosystem. The work focuses on how users move from basic banking activity into deeper product use, which attach paths are easiest to grow, and where repeated failure starts to weaken trust.

## Hero
Fintech product analytics case study focused on digital activation, ecosystem depth, retention, and failure-led churn risk.

## Intelligence Layer
High customer numbers do not automatically mean strong ecosystem adoption. The more useful question is whether digitally active users are becoming primary-banked, multi-product, and durable over time. That is the layer this case is designed to surface.

## Problem
The core problem is not account growth. It is the lack of a joined-up view across digital activity, transaction behaviour, product attach, support pressure, and retention. Without that, teams can push cross-sell too early, miss trust breakdowns, and overestimate how many customers are actually moving into deeper ecosystem use.

## Data / Signals
### Analyst Objective
Build a fintech intelligence layer that helps teams:
- read the adoption ladder from opened account to deep ecosystem use,
- identify which products are easiest to attach after core banking,
- measure how product depth changes retention,
- and quantify how repeated transaction failure affects next-cycle churn.

### Stakeholders
- Product teams improving activation, self-serve use, and feature adoption.
- Growth teams deciding where cross-sell effort should land first.
- Retention and CX teams tracking trust friction before it becomes silent churn.
- Leadership teams reviewing whether ecosystem growth is durable or shallow.

### Key Questions
- How many users move from basic account ownership into digital and primary-banked behaviour?
- Which non-core products are the easiest next attach for active customers?
- How strongly does retention improve as product depth increases?
- When transaction failure repeats, how much more vulnerable is the next month?

### KPI Framework
- Activation: digitally active rate, primary-banked rate, adoption ladder progression.
- Ecosystem depth: 2+ product rate, deep ecosystem rate, attach rates by product.
- Retention: 30-day retention, 90-day retention, retention by product depth.
- Trust friction: failed transaction exposure, support-contact rate, next-month churn gap.

## Insight
- The modelled ladder moves 15 000 opened accounts into 9 791 digitally active users, 8 988 digitally active primary-banked users, and 2 035 deep ecosystem users, or 13.6% of the full user base.
- `value_services` is the easiest non-core attach product among primary-banked users at 54.4%, ahead of savings at 38.5%.
- Deep ecosystem users retain at 63.9% over 90 days versus 22.3% for core-only users.
- Repeat failure months raise next-month churn from 32.5% to 41.5% and lift support-contact rate from 4.7% to 32.7%.

## Implication
- The more defensible growth path is not broad cross-sell. It is moving digitally active, primary-banked users into the first practical add-on products that are easiest to adopt and reuse.
- Product depth should be watched because retention improves materially in the deeper-product groups.
- Repeated payment failure should be reviewed in weekly product health checks, not left in the support queue alone.
- Trust protection matters because repeat-failure months weaken the next cycle even when topline activity still looks healthy.

## Closing
### Deliverables
- Synthetic Capitec-shaped datasets across users, logins, transactions, product usage, balances, and support events.
- Pandas-based analysis for activation, product attach, retention, and failure impact.
- Exported CSV outputs, documented notebook, and visual storytelling assets.
- Hosted walkthrough report plus structured GitHub project documentation.

### Outcome
The case demonstrates how consumer fintech analytics can move beyond usage counts into a more practical ecosystem view for product, growth, and retention decisions.

### Key Visuals
<div class="report-figure">
  <img src="../../projects/capitec-product-intelligence/adoption-ladder.png" alt="Capitec adoption ladder" />
  <p class="report-caption">The modelled adoption ladder shows where users keep moving and where ecosystem depth starts to narrow sharply.</p>
</div>

<div class="report-figure">
  <img src="../../projects/capitec-product-intelligence/cross-sell-matrix.png" alt="Capitec cross-sell matrix" />
  <p class="report-caption">Value services emerge as the easiest attach path, while deeper combinations stay more selective and should be sequenced carefully.</p>
</div>

<div class="report-figure">
  <img src="../../projects/capitec-product-intelligence/retention-by-depth.png" alt="Capitec retention by product depth" />
  <p class="report-caption">Retention rises materially as users move from core-only behaviour into broader ecosystem use.</p>
</div>

<div class="report-figure">
  <img src="../../projects/capitec-product-intelligence/failure-impact.png" alt="Capitec failure impact on next-month churn" />
  <p class="report-caption">Repeat failed transaction months increase both support pressure and next-month churn risk.</p>
</div>

### Recommendations
- Prioritise savings and value-services journeys for digitally active primary-banked users.
- Track product depth as a watchpoint for whether customer value is becoming more durable.
- Flag repeated transaction failure into a weekly product health review.
- Treat next-month drop-off after repeat failure as a product-health metric, not only a CX metric.

### Embedded Project
<div style="position:relative;height:78vh;min-height:620px;border:1px solid var(--border);border-radius:.45rem;overflow:hidden;background:var(--panel);margin-top:.75rem;">
  <iframe
    src="https://km-webdvlpr.github.io/capitec-product-intelligence/"
    title="Capitec Product Intelligence"
    loading="lazy"
    style="width:100%;height:100%;border:0;"
  ></iframe>
</div>

### Link
- Hosted walkthrough: [Capitec Product Intelligence](https://km-webdvlpr.github.io/capitec-product-intelligence/)
- GitHub repo: [capitec-product-intelligence](https://github.com/km-webdvlpr/capitec-product-intelligence)
