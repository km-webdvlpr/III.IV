---
title: "Bash: Omnichannel Retail Product Intelligence (TFG)"
date: 2026-04-03
summary: "Retail product analytics case study using synthetic Bash-shaped commerce data to surface funnel friction, fulfilment impact, and returns-led commercial risk."
tags: ["Retail Analytics", "Product Analytics", "Omnichannel", "Conversion", "Returns Intelligence"]
featured: true
roleFocus: "Commerce Analytics | Product Intelligence"
projectShows:
  - "Funnel conversion analysis"
  - "Fulfilment impact interpretation"
  - "Returns-led product insight"
snapshot:
  problem: "Traffic, orders, and promotions alone do not show where Bash is losing conversion or where post-order friction is eroding margin."
  focus: "I structured a Bash-shaped synthetic commerce dataset across sessions, events, orders, fulfilment, and returns to isolate the most important operating signals."
  outcome: "The case turns omnichannel retail activity into a clearer operating view of conversion, delivery reliability, and category risk."
demo: "https://km-webdvlpr.github.io/bash-product-intelligence/"
demoLabel: "View project walkthrough"
repo: "https://github.com/km-webdvlpr/bash-product-intelligence"
repoLabel: "Open GitHub project"
---

## Overview
Bash: Omnichannel Retail Product Intelligence is a retail product analytics case study built around the real operating shape of a high-traffic commerce platform. The work focuses on where the user journey breaks between browse and purchase, how fulfilment reliability affects support demand, and where returns begin to distort what looks like healthy product performance.

## Hero
Omnichannel retail product analytics case study focused on conversion pressure, fulfilment reliability, and returns-led commercial risk.

## Intelligence Layer
Retail teams can see sessions, orders, and campaign spikes every day. That does not automatically reveal where the actual product pressure sits. Bash needs a view that connects discovery, checkout, delivery, and returns so product, trading, and operations can make sharper weekly decisions.

## Problem
The core problem is not traffic volume. It is the lack of a joined-up operating view across the full retail journey. Without that, teams risk pushing more acquisition into a weak checkout path, treating delivery issues as a logistics-only concern, and over-celebrating categories that are quietly losing value through returns.

## Data / Signals
### Analyst Objective
Build a product intelligence layer that helps teams:
- read the funnel from session to purchase,
- isolate where mobile and channel friction is breaking checkout,
- measure the commercial effect of late fulfilment,
- and identify which categories carry the heaviest returns pressure.

### Stakeholders
- Product teams improving mobile and checkout experience.
- Growth teams deciding where extra traffic will actually convert.
- Trading and merchandising teams reviewing category performance.
- Fulfilment and CX teams managing post-order friction and support load.

### Key Questions
- Where does the Bash funnel lose the most momentum by device?
- Is mobile web a traffic problem or a checkout problem?
- How much do late orders lift support contact and return risk?
- Which categories require better fit, expectation-setting, or product detail before more demand is pushed through them?

### KPI Framework
- Funnel: sessions, PDP reach, add-to-cart rate, checkout start rate, purchase rate.
- Device quality: session-to-purchase conversion by mobile app, mobile web, and desktop.
- Fulfilment: late-order rate, support-contact rate, split-delivery exposure.
- Returns: category return rate, refund share, top return reasons, net revenue after returns.

## Insight
- The modelled funnel converts 62 959 sessions into 4 186 purchases, a 6.65% session-to-purchase rate.
- Mobile app converts at 8.78% versus 3.30% on mobile web, which is enough to justify a checkout review before more traffic is pushed into mobile web.
- Late orders represent 12.1% of orders, but lift support-contact rate to 31.1% versus 9.8% for on-time delivery.
- Footwear carries the highest modelled return rate at 22.9%, with `size_issue` emerging as the most common return reason overall.

## Implication
- Bash should prioritise mobile web checkout fixes before adding more traffic to that surface.
- Delivery reliability should be reviewed in the weekly trading and operations cadence because late fulfilment lifts both customer effort and return risk.
- Mixed-inventory and split-delivery exposure deserve attention because they raise support demand and returns at the same time.
- Footwear needs sharper sizing, fit guidance, and expectation-setting before heavier promotional pressure is justified.

## Closing
### Deliverables
- Synthetic Bash-shaped datasets across users, sessions, events, orders, fulfilment, and returns.
- Pandas-based funnel, checkout, fulfilment, and returns analysis.
- Exported CSV outputs for KPI review and supporting visuals for stakeholder storytelling.
- Hosted walkthrough report plus readable project documentation in GitHub.

### Outcome
The case demonstrates how omnichannel retail analytics can move beyond traffic and revenue reporting into a more practical weekly operating view.

### Key Visuals
<div class="report-figure">
  <img src="../../projects/bash-product-intelligence/funnel-by-device.png" alt="Bash funnel by device" />
  <p class="report-caption">Mobile app converts far better than mobile web in the modelled funnel, which is enough to justify a checkout review before more traffic is sent into mobile web.</p>
</div>

<div class="report-figure">
  <img src="../../projects/bash-product-intelligence/checkout-dropoff-by-channel.png" alt="Checkout abandonment by channel for Bash case study" />
  <p class="report-caption">Promotional and acquisition-heavy channels show the weakest checkout completion, reinforcing the need to protect downstream experience before scaling traffic.</p>
</div>

<div class="report-figure">
  <img src="../../projects/bash-product-intelligence/late-fulfillment-impact.png" alt="Late fulfilment impact on support and returns" />
  <p class="report-caption">Late delivery increases both support demand and return risk, so fulfilment reliability needs regular attention outside the logistics queue.</p>
</div>

<div class="report-figure">
  <img src="../../projects/bash-product-intelligence/returns-by-category.png" alt="Return rate by category for Bash case study" />
  <p class="report-caption">Returns pressure is concentrated rather than evenly spread, with Footwear carrying the heaviest modelled risk in this run.</p>
</div>

### Recommendations
- Fix mobile web checkout and payment friction before increasing acquisition spend on mobile web.
- Reduce split-delivery exposure on mixed-inventory orders.
- Add tighter delivery-promise communication when order complexity is high.
- Focus category-level content improvements first on Footwear, especially fit and sizing clarity.

### Embedded Project
<div style="position:relative;height:78vh;min-height:620px;border:1px solid var(--border);border-radius:.45rem;overflow:hidden;background:var(--panel);margin-top:.75rem;">
  <iframe
    src="https://km-webdvlpr.github.io/bash-product-intelligence/"
    title="Bash Product Intelligence"
    loading="lazy"
    style="width:100%;height:100%;border:0;"
  ></iframe>
</div>

### Link
- Hosted walkthrough: [Bash Product Intelligence](https://km-webdvlpr.github.io/bash-product-intelligence/)
- GitHub repo: [bash-product-intelligence](https://github.com/km-webdvlpr/bash-product-intelligence)
