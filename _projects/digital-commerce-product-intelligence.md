---
title: "Digital Commerce Product Intelligence"
date: 2026-01-29
summary: "Commerce analytics case study turning synthetic e-commerce events, orders, and returns into a clearer view of conversion, launch health, and returns risk."
tags: ["Commerce Analytics", "Product Analytics", "Retail Intelligence", "Conversion", "Returns Risk"]
featured: true
roleFocus: "Commerce Analytics | Product Intelligence"
projectShows:
  - "Funnel interpretation"
  - "Product prioritisation"
  - "Risk-aware merchandising insight"
snapshot:
  problem: "Product and trading teams can mistake traffic or revenue for healthy product performance when conversion friction and returns risk are hidden."
  focus: "I structured synthetic e-commerce events, orders, and returns into a practical intelligence pack across funnel performance, post-launch product health, and false-winner detection."
  outcome: "Stakeholders can review conversion, launch health, and returns risk in one place and use that view to prioritise follow-up."
repo: "https://github.com/kabelo-analytics/digital-commerce-product-intelligence"
repoLabel: "View code"
---
{% assign slow_rows = site.data.digital_commerce_product_intelligence.slow_starters_top20 %}
{% assign false_winners = site.data.digital_commerce_product_intelligence.returns_risk_products | where_exp: "item", "item.false_winner_flag == 'True'" %}

## Overview
Digital Commerce Product Intelligence translates synthetic South African retail-inspired e-commerce events, orders, and returns into a practical product intelligence pack. The work focuses on where the funnel loses momentum, which launches underperform early, and which apparent revenue winners become risky once returns and margin are included.

<div class="artifact-actions">
  <a href="https://github.com/kabelo-analytics/digital-commerce-product-intelligence" target="_blank" rel="noreferrer">Open source repo</a>
  <a href="#insights-report">Jump to insights report</a>
  <a href="#trading-actions">Jump to trading actions</a>
</div>

## Hero
Commerce analytics case study focused on product performance, conversion friction, and risk-adjusted trading decisions.

## Intelligence Layer
Trading and merchandising teams can see traffic, orders, and revenue every day, but those signals do not automatically reveal where product-page friction is building, which launches need fixing, or which strong sellers are eroding value through returns. This project structures those signals into a sharper operating view.

## Problem
High visibility and high revenue can both be misleading. Teams need a way to separate weak conversion from weak demand, and topline revenue from products that carry too much returns or margin risk.

## Data / Signals
### Analyst Objective
Build a concise commerce intelligence pack that helps teams:
- read the journey from sessions to purchase,
- compare early product performance against category baselines,
- and flag revenue-leading products that may still be commercially risky.

### Stakeholders
- Digital commerce or trading teams deciding what to review, fix, or deprioritise.
- Merchandising and product owners reviewing launch health and PDP effectiveness.
- Category or operations leads needing clearer visibility into returns-driven risk.

### Key Questions
- Where is the main friction in the commerce journey, and does it differ by device?
- Which newly launched products had visibility but failed to convert in the first 14 days?
- Which revenue-leading products may be misleading because returns or weak margin undermine their apparent success?
- Which actions belong in PDP improvement, quality investigation, pricing response, or deprioritisation?

### KPI Framework
- Funnel: sessions, PDP sessions, add-to-cart sessions, checkout sessions, purchase sessions.
- Launch health: 14-day PDP visibility, ATC rate, purchase rate, and category-relative baselines.
- Commercial risk: net revenue, estimated margin, return rate, and top return reason.

## Insight
- Structured the repo outputs into a decision-led trading narrative rather than a generic performance summary.
- Used the project's slow-starter logic to separate fixable launch friction from genuine low-demand cases.
- Paired revenue with returns and estimated margin so commercially risky products did not look healthy on topline alone.
- Kept the analysis recruiter-readable while preserving the actual logic from the source project.

## Implication
- Traffic concentration alone is not enough: mobile drives most sessions but converts less efficiently through later funnel stages.
- The slow-starter queue is mostly fix-oriented rather than promo-first, which changes the first action teams should consider.
- Revenue leaders in Women Shoes still need scrutiny because returns risk can distort what looks like strong trading performance.

<div id="insights-report"></div>

## Embedded Insights Report
### Executive Snapshot
<div class="report-grid">
  <div class="report-card">
    <div class="report-card__label">Journey Conversion</div>
    <div class="report-card__value">145 609 -> 2 431</div>
    <p class="report-card__copy">The frozen synthetic run moves from 145 609 sessions to 2 440 purchases, for a 1.68% session-to-purchase rate.</p>
  </div>
  <div class="report-card">
    <div class="report-card__label">Device Gap</div>
    <div class="report-card__value">2.11% vs 1.51%</div>
    <p class="report-card__copy">Desktop converts 2.11% of sessions into purchase, while mobile converts 1.51% despite driving 71.9% of all sessions.</p>
  </div>
  <div class="report-card">
    <div class="report-card__label">Slow-Starter Queue</div>
    <div class="report-card__value">20 products</div>
    <p class="report-card__copy">The prioritised list contains 20 slow starters: 12 PDP-content fixes, 6 quality-risk cases, and 2 clear deprioritisation calls.</p>
  </div>
  <div class="report-card">
    <div class="report-card__label">Revenue vs Margin</div>
    <div class="report-card__value">ZAR 1.63m / 619k</div>
    <p class="report-card__copy">Across 18 trading weeks, synthetic revenue totals ZAR 1.63m and estimated margin totals ZAR 619k, with average margin share just under 38%.</p>
  </div>
  <div class="report-card">
    <div class="report-card__label">False Winners</div>
    <div class="report-card__value">{{ false_winners | size }} flagged</div>
    <p class="report-card__copy">The false-winner logic surfaces {{ false_winners | size }} products, all in Women Shoes, with size and quality issues appearing most often in the flagged set.</p>
  </div>
</div>

### Funnel Insight
The funnel in `funnel_metrics.csv` tracks the journey as Sessions -> PDP -> Add-to-cart -> Checkout -> Purchase. Overall, 54.5% of sessions reach a PDP, 11.4% of PDP sessions reach cart, 66.6% of carts reach checkout, and 40.6% of checkouts end in purchase.

The device split matters. Mobile generates 71.9% of all sessions but only 64.6% of purchases, while desktop has the stronger end-to-end conversion path. That supports a closer look at the mobile journey and the early product-page steps before assuming more traffic will solve the problem.

<div class="report-figure">
  <img src="../../projects/digital-commerce-product-intelligence/funnel-by-device.png" alt="Journey funnel by device for digital commerce product intelligence" />
  <p class="report-caption">Desktop turns 2.11% of sessions into purchase versus 1.51% on mobile, even though mobile carries most traffic volume.</p>
</div>

### Revenue vs Margin Context
This project keeps revenue and estimated margin together at weekly level, because topline growth can look healthy while commercial quality deteriorates underneath. In the frozen run, the generated series peaks in the week of 2026-02-09 at roughly ZAR 117.9k revenue and ZAR 44.5k estimated margin.

<div class="report-figure">
  <img src="../../projects/digital-commerce-product-intelligence/weekly-revenue-margin.png" alt="Weekly revenue and estimated margin trend for digital commerce product intelligence" />
  <p class="report-caption">Weekly revenue and estimated margin generally move together, but the margin gap reinforces why product ranking cannot rely on revenue alone.</p>
</div>

### Slow Starters Analysis
The `slow_starters_top20.csv` output uses the repo's 14-day post-launch rule: above-category-median visibility combined with below-category-median ATC and/or purchase performance. The resulting queue is mostly operational rather than promotional. Twelve of the twenty prioritised products point to PDP improvement, six point to quality risk, and two land in deprioritisation.

Home contributes 6 of the 20 slow starters, while Women Shoes contributes 5. That is enough to suggest concentration in a few categories, but not enough to overstate category-level certainty.

<div class="report-table-wrap">
  <table class="report-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>14d views</th>
        <th>ATC rate</th>
        <th>Purchase rate</th>
        <th>Return rate</th>
        <th>Recommended action</th>
      </tr>
    </thead>
    <tbody>
      {% for row in slow_rows limit: 8 %}
      {% assign badge_class = 'report-badge--deprioritise' %}
      {% if row.action_label == 'Improve PDP content' %}
        {% assign badge_class = 'report-badge--fix' %}
      {% elsif row.action_label == 'Quality risk (high returns)' %}
        {% assign badge_class = 'report-badge--risk' %}
      {% endif %}
      <tr>
        <td>{{ row.product_id }}</td>
        <td>{{ row.category }}</td>
        <td>{{ row.pdp_views_14d }}</td>
        <td>{{ row.atc_rate_14d | times: 100 | round: 1 }}%</td>
        <td>{{ row.purchase_rate_14d | times: 100 | round: 1 }}%</td>
        <td>{{ row.return_rate | times: 100 | round: 1 }}%</td>
        <td><span class="report-badge {{ badge_class }}">{{ row.action_label }}</span></td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
<p class="report-caption">Top 8 entries shown from the prioritised `slow_starters_top20.csv` export.</p>

### Returns Risk / False Winner Analysis
The `returns_risk_products.csv` export applies the project's false-winner rule: top-revenue-quartile products that also have return rate at or above 18% or estimated margin in the bottom quartile. In the frozen run, the rule flags {{ false_winners | size }} products, and every flagged product sits in Women Shoes.

That concentration is the real point of the logic. High revenue alone would push these products toward promotion, but the return story changes the read. Four of the flagged products are dominated by size-related returns, with the rest driven by quality, damage, and expectation issues. The flagged set contributes about 10.6% of catalogue revenue, which is large enough to matter in weekly review.

<div class="report-figure">
  <img src="../../projects/digital-commerce-product-intelligence/returns-risk-matrix.png" alt="Returns risk matrix highlighting false winners for digital commerce product intelligence" />
  <p class="report-caption">Highlighted points show false winners: high-revenue products with return rates above the project risk threshold or weak relative margin quality.</p>
</div>

<div class="report-table-wrap">
  <table class="report-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Brand</th>
        <th>Revenue</th>
        <th>Est. margin</th>
        <th>Return rate</th>
        <th>Top reason</th>
      </tr>
    </thead>
    <tbody>
      {% for row in false_winners %}
      <tr>
        <td>{{ row.product_id }}</td>
        <td>{{ row.brand }}</td>
        <td>ZAR {{ row.net_revenue_total | times: 0.001 | round: 1 }}k</td>
        <td>ZAR {{ row.estimated_margin_total | times: 0.001 | round: 1 }}k</td>
        <td>{{ row.return_rate | times: 100 | round: 1 }}%</td>
        <td>{{ row.return_reason_top }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
<p class="report-caption">Flagged items rendered from the `returns_risk_products.csv` export.</p>

<div id="trading-actions"></div>

### Trading Actions / Recommended Decisions
- Review PDP content first on high-visibility, low-conversion launches rather than treating all slow starters as demand problems.
- Separate mobile conversion analysis from desktop because later-stage mobile performance is materially weaker despite heavier traffic share.
- Escalate sizing, quality, and expectation-setting issues on Women Shoes before increasing promotion on high-revenue items.
- Keep weekly trade review anchored on revenue plus estimated margin, not revenue alone.
- Deprioritise launches that remain weak after the first 14-day visibility window and do not show compensating commercial upside.

## Closing
### Deliverables
- Reproducible synthetic e-commerce data generation and feature build pipeline.
- Funnel metrics across overall traffic and device split.
- `slow_starters_top20.csv` for 14-day post-launch prioritisation.
- `returns_risk_products.csv` for false-winner detection.
- Native portfolio report visuals built from the project outputs.

### Outcome
The project demonstrates how product and trading analytics can move beyond traffic and revenue reporting into a more useful operating view. The result is a clearer way to see what needs investigation, what looks fixable, and what should not be judged on revenue alone.

### Link
- Case project: [Digital Commerce Product Intelligence](https://github.com/kabelo-analytics/digital-commerce-product-intelligence)
