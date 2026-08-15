---
title: "ALX Data Science: Learner Progression & Completion Intelligence"
date: 2026-04-03
summary: "EdTech product analytics case study using synthetic cohort data to read retention curves, sprint drop-off, assignment pressure, and learner completion risk."
tags: ["EdTech Analytics", "Product Analytics", "Learner Progression", "Completion Intelligence", "Synthetic Data"]
featured: true
roleFocus: "EdTech Analytics | Learner Intelligence"
projectShows:
  - "Cohort retention analysis"
  - "Sprint drop-off interpretation"
  - "Assignment and device risk signals"
snapshot:
  problem: "Weekly activity alone does not show where a structured cohort programme starts losing learner momentum."
  focus: "I modelled an ALX-shaped data science programme across cohorts, weekly lesson progression, assignments, and dropout flags to isolate the pressure points that matter most."
  outcome: "The case turns learner activity into a practical product and programme intelligence layer for retention, completion, and intervention planning."
demo: "https://km-webdvlpr.github.io/alx-product-intelligence/"
demoLabel: "View project walkthrough"
repo: "https://github.com/km-webdvlpr/alx-product-intelligence"
repoLabel: "Open GitHub project"
---

## Overview
ALX Data Science: Learner Progression & Completion Intelligence is an EdTech product analytics case study built around the structure of a guided, cohort-based data science programme. The work focuses on where learner momentum breaks, how assignment strain changes dropout risk, and which learner patterns deserve earlier intervention.

## Hero
EdTech product analytics case study focused on retention, progression, completion, and dropout pressure in a sprint-based learning programme.

## Intelligence Layer
A cohort programme does not fail in one place. Pressure builds through onboarding, pacing, device constraints, assignment deadlines, and middle-stage fatigue. This case joins those signals so the programme team can act earlier and more precisely.

## Problem
The core problem is not low content usage by itself. It is the lack of a joined-up view across weekly lesson progress, sprint pressure, assignment behaviour, and final learner status. Without that, teams can see that completion is weak without clearly seeing where the breakdown starts.

## Data / Signals
### Analyst Objective
Build a decision-ready learner intelligence layer that helps teams:
- track retention by cohort,
- isolate the sprints where dropout clusters hardest,
- measure how engagement and assignment behaviour change completion odds,
- and identify where learner support should intervene first.

### Stakeholders
- Product teams improving learner experience and platform support.
- Programme teams managing cohort pacing and intervention timing.
- Academic leads reviewing sprint load and assignment design.
- Leadership teams tracking completion and learner risk across intakes.

### Key Questions
- Where do cohorts lose the most learners over time?
- Which sprint carries the heaviest single drop-off?
- How strongly does steady weekly engagement improve completion?
- When late work rises, how much more vulnerable does the learner become?
- Which device patterns need different support or design?

### KPI Framework
- Cohort health: retention curves, completion rate, active rate.
- Progression: weekly completion movement, sprint-level drop-off.
- Engagement: time on platform, lesson completion rate, engagement bands.
- Assignment health: submission rate, lateness, score, dropout gap.
- Learner risk: device pattern, employed-learner pressure, dropout reason mix.

## Insight
- The modelled programme covers 538 learners across 10 cohorts, with a 46.7% dropout rate and a 46.1% completion rate.
- Sprint 4 carries the heaviest single drop cluster, but one third of all dropouts still happen by week 6.
- Mobile-only learners complete 16.3 percentage points less often than desktop learners in this run.
- High lateness lifts dropout by 27.2 percentage points versus low-lateness learners.
- 57.8% of week 6 to 10 dropouts come from employed learners, which points to middle-stage schedule pressure.

## Implication
- Onboarding still needs structured support, even though Sprint 4 is the sharpest single spike.
- Late work should be treated as an early intervention signal, not only an academic admin issue.
- Mobile learning needs lighter and clearer support for assignment-heavy weeks.
- Employed learners appear to need more flexible pacing or better week 6 to 10 guardrails.

## Closing
### Deliverables
- Synthetic learner, cohort, progress, assignment, and dropout datasets.
- Pandas-based analysis for retention, sprint pressure, assignment health, and completion risk.
- Exported charts and documented notebook for stakeholder storytelling.
- Hosted walkthrough report plus readable GitHub project documentation.

### Outcome
The case demonstrates how EdTech analytics can move beyond activity reporting into a clearer learner-intelligence view that is more useful for retention and programme decisions.

### Key Visuals
<div class="report-figure">
  <img src="../../projects/alx-product-intelligence/cohort-retention-curves.png" alt="ALX retention curves by cohort" />
  <p class="report-caption">Retention does not move evenly by cohort, but the broad pattern still shows an early decline followed by a later pressure point.</p>
</div>

<div class="report-figure">
  <img src="../../projects/alx-product-intelligence/sprint-dropoff.png" alt="ALX sprint drop-off analysis" />
  <p class="report-caption">The sharpest single drop cluster lands in Sprint 4, while the first two sprints still carry heavy early loss.</p>
</div>

<div class="report-figure">
  <img src="../../projects/alx-product-intelligence/engagement-completion.png" alt="ALX engagement and completion" />
  <p class="report-caption">Steady weekly engagement changes completion odds materially in this model.</p>
</div>

<div class="report-figure">
  <img src="../../projects/alx-product-intelligence/assignment-risk.png" alt="ALX assignment lateness and dropout" />
  <p class="report-caption">Late submissions behave like an early warning signal, not a minor grading detail.</p>
</div>

<div class="report-figure">
  <img src="../../projects/alx-product-intelligence/device-completion.png" alt="ALX device pattern and completion" />
  <p class="report-caption">Mobile-only learners carry the weakest completion outcome in this run.</p>
</div>

### Recommendations
- Strengthen onboarding support in the first two sprints.
- Escalate late work into earlier learner intervention.
- Review Sprint 4 workload and checkpoint design.
- Improve mobile support for assignment-heavy phases.
- Add targeted pacing support for employed learners during weeks 6 to 10.

### Embedded Project
<div style="position:relative;height:78vh;min-height:620px;border:1px solid var(--border);border-radius:.45rem;overflow:hidden;background:var(--panel);margin-top:.75rem;">
  <iframe
    src="https://km-webdvlpr.github.io/alx-product-intelligence/"
    title="ALX Data Science Learner Progression Intelligence"
    loading="lazy"
    style="width:100%;height:100%;border:0;"
  ></iframe>
</div>

### Link
- Hosted walkthrough: [ALX Product Intelligence](https://km-webdvlpr.github.io/alx-product-intelligence/)
- GitHub repo: [alx-product-intelligence](https://github.com/km-webdvlpr/alx-product-intelligence)
