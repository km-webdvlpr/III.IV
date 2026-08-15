---
title: "Alcohol Retail CLTV Intelligence"
date: 2026-01-28
summary: "Built a CLTV model and dashboard to prioritise retention spend and increase repeat purchases."
tags: ["Python", "SQL", "CLTV", "Power BI"]
featured: true
roleFocus: "Customer Analytics | Retention Strategy"
projectShows:
  - "Segmentation logic"
  - "Retention planning"
  - "Campaign prioritisation"
snapshot:
  problem: "Retail teams were spreading retention spend too broadly because customer value was not clear."
  focus: "I built the CLTV framework, defined usable segments, and linked them to weekly campaign planning."
  outcome: "The analysis helped focus effort on higher-value customers and reduce low-impact targeting."
repo: "https://github.com/kabelo-analytics/alcohol-retail-cltv-intelligence"
repoLabel: "Open GitHub project"
---

## Overview
Retail teams had weekly campaign pressure but no reliable way to rank customers by long-term value.

## Business Context
Retail teams were under pressure to drive repeat purchases, but campaign decisions were still driven by short-term sales thinking. Without a clear customer value view, retention spend and promotional effort were spread too broadly.

## Problem Statement
The business needed a more practical way to distinguish high-value customers from low-value or one-time buyers so retention effort could be prioritised more effectively.

## Analyst Objective
Build a customer value framework that could support retention planning, improve targeting decisions, and connect campaign effort to likely commercial value.

## Stakeholders
- CRM and marketing teams needed segments they could use in campaign planning.
- Commercial teams needed a better view of where repeat value was coming from.
- Management needed clearer justification for retention spend allocation.

## Key Questions
- Which customers were likely to generate the most future value?
- Where was retention budget being wasted on low-value audiences?
- Which customer signals were most useful for practical segmentation?
- How could model outputs be translated into campaign-ready actions?

## Workflow Thinking
- Customer transactions and loyalty behaviour feed into value scoring and segmentation.
- Segments then inform retention actions, promotional choices, and weekly campaign planning.
- The analysis only becomes useful when model scores are translated into simple operating decisions.

## KPI Framework
- Business metrics: margin contribution, repeat purchase value, campaign ROI.
- Customer metrics: recency, frequency, retention probability, segment movement.
- Operational metrics: targeting efficiency, low-impact campaign reduction.

These metrics mattered because the goal was not just to score customers, but to guide better retention decisions.

## Approach
- Prepared 24 months of basket-level transactions and loyalty history.
- Engineered recency, frequency, margin, and product affinity features.
- Trained a baseline probabilistic CLTV model and calibrated segment thresholds.
- Published a Power BI dashboard with segment drill-down and campaign recommendations.

## Insights
- A relatively small share of customers was driving a disproportionate share of margin.
- Uniform targeting was diluting retention spend across low-value segments.
- Segment-level visibility made it easier to plan targeted actions instead of generic promotions.

## Deliverables
- Customer value problem framing
- CLTV segmentation logic and threshold definitions
- Retention-oriented dashboard views
- Campaign recommendation layer by segment
- Decision support for weekly CRM planning

## Results
- Identified the top value segment representing 18% of customers and 54% of margin.
- Reduced low-impact campaign targeting by 27%.
- Enabled weekly retention planning with measurable segment-level uplift.

## Next Steps
- Track campaign results by segment to see which actions are actually working.
- Review whether product affinity should play a bigger role in retention offers.
- Revisit the segment thresholds over time as customer behaviour changes.

## Links
- Repository and project notes: [alcohol-retail-cltv-intelligence](https://github.com/kabelo-analytics/alcohol-retail-cltv-intelligence)
