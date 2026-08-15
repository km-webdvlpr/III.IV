---
title: "RSA Music Evolution"
date: 2026-03-20
summary: "Interactive story of South African listening trends and genre evolution from 2021 to 2025, with 2026 treated as outlook rather than measured history."
tags: ["Music Analytics", "Data Storytelling", "HTML", "Chart.js"]
featured: true
roleFocus: "Cultural Analytics | Data Storytelling"
projectShows:
  - "Trend interpretation"
  - "Interactive reporting"
  - "Narrative analytics"
snapshot:
  problem: "Music trend signals were fragmented across genres and periods, making the broader movement harder to read."
  focus: "I structured a single interactive report to compare eras, transitions, and ranking patterns using proxy data and modelled views."
  outcome: "The report made major shifts in listening behaviour easier to explore while staying clearer about what is illustrative versus observed."
demoPath: "/projects/rsa-music-evolution/"
demoLabel: "Open live project"
---

## Overview
RSA Music Evolution is an interactive cultural-analysis narrative that tracks shifts in South African listening behaviour from 2021 to 2025, with 2026 used as forward-looking context.

## Hero
Interactive story of South African listening trends and genre evolution from 2021 to 2025, with 2026 used only as outlook.

## Intelligence Layer
Music trend conversations are often driven by isolated charts or platform snapshots. That makes it hard to see how audience behaviour actually evolves over time, especially across genres.

## Problem
There was no single view that connected era-level movement, ranking volatility, and genre transition patterns into one coherent story while being explicit about where the work relies on proxy data.

## Data / Signals
### Analyst Objective
Build a readable, interactive analysis that helps users:
- understand what changed between eras,
- see where momentum accelerated or slowed,
- and interpret genre transitions in context.

### Stakeholders
- Content and culture teams needing a clear trend narrative.
- Strategy and marketing teams looking for signals on audience direction.
- Portfolio reviewers assessing data storytelling and insight communication quality.

### Key Questions
- Which genre families gained or lost momentum most clearly across 2021-2026?
- Were shifts gradual, or did they happen through sharp transition periods?
- Which patterns were persistent versus temporary spikes?
- How can these patterns be communicated in a way non-technical audiences can quickly use?

### KPI / Signal Framework
- Position and movement in ranking views.
- Period-over-period directional change.
- Transition intensity between eras.
- Concentration versus spread across genre archetypes.

These were chosen to balance interpretability with narrative value.

### Method Note
- This project combines public chart proxies, estimated trend series, and modelled sections built for interpretability.
- Some ranking, transition, and concentration views are illustrative rather than official market totals.
- The strongest value of the project is comparative storytelling, not audited market measurement.

## Insight
- The multi-year view makes the major shifts easier to follow than a stack of isolated snapshots.
- Transition periods matter more than flat annual summaries because several genres move through short bursts rather than steady climbs.
- The modelled sections are most useful as interpretive scaffolding, not as literal market reporting.
- The page works best when it keeps observed proxies and illustrative sections clearly separated.

## Implication
- Genre movement was not linear; transition periods created the clearest inflection points.
- Some headline trends were driven by concentrated bursts rather than sustained long-run growth.
- The narrative structure helps non-technical readers move from context to pattern without needing to inspect every chart in isolation.

## Closing
### Deliverables
- Interactive web report hosted under portfolio projects.
- Multi-section analytics narrative with ranking and transition views.
- Reusable structure for future music-intelligence updates.

### Outcome
The project made a complex multi-year trend story easier to read and compare, improving clarity for non-technical audiences without pretending every section is hard market reporting.

### Tools
- HTML/CSS for single-page experience design.
- Chart.js for interactive visual analytics.
- Public chart proxies plus illustrative modelled sections.

### Embedded Project
<div style="position:relative;height:78vh;min-height:620px;border:1px solid var(--border);border-radius:.45rem;overflow:hidden;background:var(--panel);margin-top:.75rem;">
  <iframe
    src="../rsa-music-evolution/"
    title="RSA Music Evolution"
    loading="lazy"
    style="width:100%;height:100%;border:0;"
  ></iframe>
</div>

### Link
- Live project: [RSA Music Evolution]({{ '/projects/rsa-music-evolution/' | relative_url }})
