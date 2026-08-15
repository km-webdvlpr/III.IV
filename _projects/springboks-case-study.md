---
title: "Springboks"
date: 2026-03-19
summary: "Public-record sports storytelling piece tracing Springbok performance trends from 2016 to 2025, with estimates clearly flagged where official splits are not published."
tags: ["Sports Analytics", "Data Visualisation", "HTML", "Chart.js"]
featured: true
roleFocus: "Sports Analytics | Performance Trends"
projectShows:
  - "Performance segmentation"
  - "Era comparison"
  - "Visual storytelling"
snapshot:
  problem: "Public discussion of the Springboks often isolates single seasons or major tournaments, which makes the longer arc harder to read."
  focus: "I built a 2016-2025 public-record view that combines win-rate arc, era interpretation, and player context in one narrative."
  outcome: "The result gives a more readable decade view while staying explicit about where the work uses estimates rather than official splits."
demoPath: "/projects/springboks/"
demoLabel: "Open live project"
---

## Overview
Springboks is an interactive sports storytelling piece covering team trajectory from 2016 to 2025, with a focus on performance arc, era transitions, and player-level context drawn from public records.

## Hero
Interactive public-record analysis of Springbok performance trends from 2016 to 2025.

## Intelligence Layer
Springbok discussion often jumps between headline wins, World Cup moments, and isolated seasons. That leaves the longer performance arc harder to read, especially when coaching eras and player turnover overlap.

## Problem
There was no concise interactive view that combined long-range results, an explicit era interpretation, and player context in one readable narrative while also being honest about where estimates were required.

## Data / Signals
### Analyst Objective
Create a 2016-2025 decade view that helps viewers:
- compare major eras consistently,
- understand where results improved or stalled,
- and connect aggregate outcomes with player and debut context.

### Stakeholders
- Rugby media and commentary audiences needing clearer trend context.
- Fans and analysts looking for a structured decade view instead of isolated metrics.
- Portfolio reviewers assessing analytical storytelling and evidence discipline.

### Key Questions
- How did win performance shift across the four key eras?
- Which periods show stability versus transition volatility?
- How does player-profile context support the decade narrative?
- What patterns are visible when trajectory is viewed as one connected timeline?

### KPI / Signal Framework
- Win-rate arc over time.
- Era-level outcome split (wins/losses/draws).
- Debut and player-context indicators.
- Try-scoring and output pattern signals.

### Method Note
- This project uses public rugby records and reporting rather than a packaged dataset.
- Official or widely published results are used for team-level performance views.
- Some player-era allocations, cap distributions, and try-era splits are estimated where official year-by-year splits are not published.
- Estimated sections are labelled in the live project and should be read as directional context, not official record tables.

## Insight
- The 2016-2017 period stands apart as the weakest stretch in the window, which gives the later rebuild clearer contrast.
- Viewing the period in four phases makes the shift from contraction to sustained strength easier to follow than a flat year-by-year reading.
- The later years show stronger attacking output alongside stronger results, which helps explain why 2024-2025 feels different from the earlier rebuild phase.
- Player and debut context adds useful texture, but some of those views rely on flagged estimates rather than fully published official splits.

## Implication
- The decade is easier to understand when it is treated as an interpreted performance arc rather than a list of separate seasons.
- The strongest value in the piece is comparative storytelling across eras, not fully reproducible statistical reporting.
- Credibility depends on keeping the difference between verified records and estimated context visible.

## Closing
### Deliverables
- Interactive Springbok decade report hosted in portfolio projects.
- Team-performance, era, player, debut, and try-context views in one narrative layout.
- A sports storytelling format that can be reused for future public-record analysis pieces.

### Outcome
The project improved readability of long-range team evolution and turned a scattered public-record story into one more coherent 2016-2025 view.

### Tools
- HTML/CSS for narrative layout and interaction.
- Chart.js for visual performance analysis.
- Public rugby records and reporting for source validation.

### Embedded Project
<div style="position:relative;height:78vh;min-height:620px;border:1px solid var(--border);border-radius:.45rem;overflow:hidden;background:var(--panel);margin-top:.75rem;">
  <iframe
    src="../springboks/"
    title="Springboks"
    loading="lazy"
    style="width:100%;height:100%;border:0;"
  ></iframe>
</div>

### Link
- Live project: [Springboks]({{ '/projects/springboks/' | relative_url }})

### Reproducibility
- No downloadable dataset is attached to this project.
- The piece is based on public records plus clearly flagged estimates where official splits are unavailable.
- It should be read as a transparent storytelling analysis, not as an official statistical database.
