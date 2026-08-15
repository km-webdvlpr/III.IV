---
title: "Beverage Commercial Performance MVP"
date: 2026-01-11
summary: "Built an MVP reporting layer for pricing, distribution, and promotion performance across commercial teams."
tags: ["SQL", "dbt", "Power BI", "Commercial Analytics"]
featured: true
roleFocus: "Business Analysis | Commercial Reporting"
projectShows:
  - "Metric alignment"
  - "Commercial reporting"
  - "Promotion decision support"
snapshot:
  problem: "Commercial teams were working from inconsistent definitions and slow reporting cycles."
  focus: "I aligned key metrics, unified the reporting layer, and built views for pricing, promotion, and channel performance."
  outcome: "Teams got faster reporting, clearer definitions, and earlier signals on promotion performance."
repo: "https://github.com/kabelo-analytics/beverage-commercial-performance-mvp"
repoLabel: "Open GitHub project"
---

## Overview
Commercial managers needed one source of truth for revenue movement across channels, products, and promotions.

## Business Context
Commercial teams were managing pricing, distribution, and promotion performance with fragmented reporting. Sales, finance, and field teams were looking at the same activity through different definitions, which made it harder to react quickly and align on what was driving revenue movement.

## Problem Statement
The business needed faster and more consistent visibility into commercial performance, especially across products, channels, and promotions, so teams could act before issues affected revenue and margin.

## Analyst Objective
Create a reporting and KPI layer that standardised core commercial definitions, reduced manual reconciliation, and made promotion and channel performance easier to review during live trading periods.

## Stakeholders
- Commercial managers needed timely visibility into revenue, margin, and promo effectiveness.
- Sales teams needed channel and account views they could use in weekly reviews.
- Finance teams needed trusted gross-to-net and product hierarchy definitions.
- Field teams needed simpler performance signals to guide action in market.

## Key Questions
- Which channels, products, or regions were driving changes in revenue and margin?
- Where were promotions generating uplift, and where were they diluting value?
- Which metric definitions needed to be standardised across teams?
- How could reporting move from retrospective explanation to in-period decision support?

## Workflow Thinking
- Commercial activity flows from product and channel execution into weekly sales and margin reporting.
- Promotions affect both volume and value, so they need to be reviewed against timing, geography, and product mix.
- Decision-makers need one shared layer before they can compare performance across teams with confidence.

## KPI Framework
- Business metrics: revenue, gross margin, gross-to-net movement, promo uplift.
- Operational metrics: report turnaround time, reconciliation effort, data quality checks.
- Commercial review metrics: channel growth, SKU contribution, regional variance, period-over-period change.

These metrics mattered because they supported trading decisions, budget discussions, and promotion reviews from the same base.

## Approach
- Modelled channel and SKU dimensions with dbt and documented test coverage.
- Unified volume, value, and promo tables in a single semantic layer.
- Built an MVP dashboard with period-over-period change, margin bridge, and geo splits.
- Added decision checklists for account managers directly in the dashboard notes.

## Insights
- Reporting delays were partly a data definition problem, not only a dashboard problem.
- Standardising product and commercial definitions reduced review friction across sales and finance.
- Earlier visibility into promo performance made it easier to intervene before campaign spend was fully absorbed.

## Deliverables
- Business problem framing for commercial reporting
- KPI definition and metric alignment notes
- Unified semantic model for revenue, margin, and promo analysis
- Dashboard MVP for weekly commercial reviews
- Review notes for account managers

## Results
- Reduced report preparation from two days to under one hour.
- Established consistent gross-to-net definitions across commercial teams.
- Enabled earlier promo corrections during in-flight campaign reviews.

## Next Steps
- Add account-level views for promotions that are underperforming.
- Extend reporting to include forecast versus actual trade performance.
- Capture the core metric definitions in a short shared glossary for sales and finance.

## Supporting Documents
<div class="artifact-actions">
  <a href="../../artifacts/beverage-commercial-performance-mvp/brd">Open BRD summary</a>
  <a href="../../artifacts/beverage-commercial-performance-mvp/prd">Open PRD summary</a>
  <a href="../../artifacts/beverage-commercial-performance-mvp/trd">Open TRD summary</a>
</div>

## Appendix: Reconstructed Analyst Artefacts
These extracts are included to show the requirements thinking behind the reporting layer.

### Business Requirements Summary
- **Business goal:** give commercial teams a single reporting view for pricing, channel, and promotion performance.
- **Problem to solve:** inconsistent definitions and manual reconciliation were slowing reviews and weakening decision quality.
- **In scope:** metric alignment, shared hierarchies, reporting model, and dashboard views for commercial review.
- **Out of scope:** trade execution systems, pricing approval workflows, and account planning outside the reporting layer.
- **Success measures:** faster report preparation, consistent metric definitions, and earlier visibility into promotion performance.

### Technical Requirements Summary
- Unified product and channel dimensions across source datasets.
- Shared semantic layer for volume, value, margin, and promotion reporting.
- Data quality checks for hierarchy consistency and KPI accuracy.
- Dashboard views for period change, margin movement, and regional comparison.
- A reporting structure that can be maintained without repeated spreadsheet reconciliation.

## Links
- Repository and implementation notes: [beverage-commercial-performance-mvp](https://github.com/kabelo-analytics/beverage-commercial-performance-mvp)
