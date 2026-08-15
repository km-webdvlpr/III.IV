---
title: "Scotch Whisky: Consumer Progression & Premiumization Intelligence"
date: 2026-04-05
summary: "Beverage retail case study using synthetic Scotch retail data to examine how shoppers move from accessible bottles into more distinctive premium expressions, and where price, packaging, and shelf context interrupt that climb."
tags: ["Python", "Product Intelligence", "Retail Analytics", "Consumer Behaviour", "Synthetic Data"]
featured: true
roleFocus: "Product Intelligence | Beverage Retail"
projectShows:
  - "Consumer progression analysis"
  - "Premiumization friction mapping"
  - "Retail display and gifting read"
snapshot:
  problem: "Retail teams can see price and velocity, but they do not always have a clean read on where Scotch shoppers are progressing, hesitating, or settling into preference."
  focus: "I built a synthetic Scotch retail dataset to read gateway products, destination products, pricing friction, and the shelf conditions shaping premiumization."
  outcome: "The result is a progression model that shows where movement seems to start, where it tightens, and which bottles behave more like recruitment tools versus preference-led destinations."
repo: "https://github.com/km-webdvlpr/scotch-whisky-consumer-progression-intelligence"
repoLabel: "Open GitHub project"
demo: "https://km-webdvlpr.github.io/scotch-whisky-consumer-progression-intelligence/"
demoLabel: "Open live project"
---

## Overview
This case study looks at how Scotch whisky shoppers move from familiar accessible bottles into more distinctive premium expressions, and where that movement gets helped or interrupted by price, packaging, and shelf presentation.

## Business Context
Premiumization in Scotch is rarely a clean straight line. A shopper might browse upward, buy a bottle as a gift, flirt with something more premium on a feature display, then fall back to what still feels safe. That means category teams need something more grounded than sales totals if they want to understand real progression.

## Problem Statement
The commercial problem is not simply whether premium Scotch is selling. It is whether the shelf is creating believable movement upward, where price jumps start to feel uncomfortable, and which products are acting as gateways versus long-term preference bottles.

## Analyst Objective
Build a product intelligence case study that reads progression through product role, shelf conditions, gifting cues, and sparse repeat behaviour, then turns those patterns into a commercial framework a retail or category team could review.

## Stakeholders
- Category and commercial teams deciding how to structure the Scotch ladder.
- Merchandising teams reviewing where premium bottles should sit on shelf.
- Brand teams trying to separate trial-driving packs from loyalty-driving bottles.
- Retail strategy teams needing a more believable view of premiumization friction.

## Key Questions
- Which bottles act as gateway products into a more premium Scotch journey?
- Which bottles behave more like destination products once preference becomes clearer?
- Where does price progression start to tighten?
- Does gift packaging widen trial without building much loyalty?
- Which display conditions drive discovery, and which ones support repeat?

## Analysis Logic
- Entry bottles should dominate raw frequency without automatically becoming loyalty leaders.
- Premium and distinctive bottles should pull average value upward while remaining lower-frequency.
- Gift cues should help trial and occasion-led purchase more than they help repeat.
- Feature-led visibility should recruit discovery, while standard shelf conditions should show more of the loyalty pattern.
- The dataset should stay slightly messy so the progression story feels observed rather than fabricated.

## Approach
- Designed a synthetic Scotch retail dataset with 3 200 observations across eight fixed expressions.
- Modelled product, shelf, display, promo, gifting, and buyer-stage signals with imperfect correlations.
- Exported a compact set of visuals and summary tables focused on progression, friction, loyalty, and stalling points.
- Built a notebook and a portfolio-ready walkthrough that keeps the tone commercial and human.

## Insights
- Johnnie Walker Black Label ranks highest on the gateway score in the final build.
- Lagavulin 16 ranks highest on the destination score: smaller in frequency, stronger in commitment.
- The first clear progression tension appears in the R320-R420 step-up zone.
- Gift packaging helps reach and occasion buying more than it helps repeat.
- Standard shelf execution still matters if the real goal is loyalty rather than spectacle.

## Deliverables
- Synthetic Scotch retail dataset
- Notebook for progression and premiumization analysis
- Exported visuals for tier mix, product role, pricing friction, gifting, display impact, and stalling points
- Supporting summary tables for product role, price friction, gifting, display effects, and stage stalls
- Written insight file for commercial takeaways
- Embedded case walkthrough inside III.IV

## Results
- The build lands at 3 200 retail observations.
- Entry and core bottles still carry most of the category traffic.
- The gateway score ranks Johnnie Walker Black Label first.
- The destination score ranks Lagavulin 16 first.
- The first clear progression tension sits in the R320-R420 jump.

## Recommendations
- Use familiar step-up bottles as the visible bridge into premium Scotch rather than relying on abrupt jumps.
- Treat gift packaging as a recruitment tool, not proof of loyalty.
- Protect the standard shelf for repeat-friendly bottles even when feature displays are doing discovery work.
- Make the first premium price stretch easier to understand with clearer comparison and flavour cues.

## Interpretation Notes
- This is a synthetic case study built to test progression logic, not a claim about live Scotch retail data.
- The gateway and destination labels come from weighted scores, so they should be read as structured heuristics rather than fixed truths.
- The friction read is a repeat-rate heuristic by price band, not a full pricing model.

## Embedded Project
<div style="position:relative;height:78vh;min-height:460px;border:1px solid var(--border);border-radius:.45rem;overflow:hidden;background:var(--panel);margin-top:.75rem;">
  <iframe
    src="{{ page.demo }}"
    title="Scotch Whisky: Consumer Progression & Premiumization Intelligence"
    loading="lazy"
    style="width:100%;height:100%;border:0;"
  ></iframe>
</div>

## Links
- Live project: [Scotch Whisky Consumer Progression Intelligence]({{ page.demo }})
- GitHub repo: [scotch-whisky-consumer-progression-intelligence]({{ page.repo }})
