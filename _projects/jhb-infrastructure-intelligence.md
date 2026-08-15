---
title: "JHB Municipal Infrastructure Intelligence"
date: 2026-03-28
summary: "Municipal analytics case study using synthetic pothole and water leak incidents to demonstrate operational KPI design, SLA monitoring, and ward-level infrastructure reporting."
tags: ["Infrastructure Analytics", "Civic Data", "Python", "Data Visualisation"]
featured: true
roleFocus: "Infrastructure Analytics | Civic Data"
projectShows:
  - "SLA and operational KPI design"
  - "Ward-level incident monitoring"
  - "Civic data storytelling"
snapshot:
  problem: "Municipal infrastructure incidents such as potholes and water leaks are hard to prioritise when service teams lack a shared view of response times, repair cycles, and open-case backlog."
  focus: "The project packages a synthetic Johannesburg-shaped incident model into generation, cleaning, feature engineering, and notebook-based KPI reporting. The analytical focus is on response time, repair time, SLA breach rates, backlog visibility, and ward-level incident monitoring."
  outcome: "Infrastructure teams and civic decision-makers can review service performance metrics from a reproducible synthetic dataset and use them as a starting point for operational reporting."
repo: "https://github.com/kabelo-analytics/jhb-infrastructure-intelligence"
repoLabel: "Open GitHub project"
demo: "https://kabelo-analytics.github.io/jhb-infrastructure-intelligence/"
demoLabel: "View live dashboard"
---

## Overview
JHB Municipal Infrastructure Intelligence is a civic analytics portfolio project that simulates how a Johannesburg infrastructure team could monitor pothole and water leak service delivery through operational KPIs and Python-based reporting.

## Intelligence Layer
Municipal incident operations are difficult to manage without a shared view of response speed, repair duration, breach rates, and backlog movement. This project focuses on the reporting layer needed to move from raw incident logs to usable operational metrics.

## Problem
Municipal infrastructure data such as potholes, burst pipes, and water leaks is often fragmented across teams, making it harder to monitor SLA compliance, compare service performance, and maintain a consistent operational scorecard.

## Data / Signals

### Analyst Objective
Design a Python reporting workflow that enables infrastructure teams to:
- monitor SLA compliance by incident type, ward, and contractor,
- compare response and repair timelines across issue types,
- and track backlog trends over time for prioritisation.

### Stakeholders
- Ward managers needing operational visibility by area.
- Infrastructure operations leads monitoring service performance.
- Civic oversight teams requiring service-delivery KPI evidence.

### Key Questions
- What are the baseline response and repair times across pothole and water leak incidents?
- How often do incidents breach the defined SLA logic in the synthetic dataset?
- How does backlog move across the reporting period?
- How evenly or unevenly are incidents distributed across wards?

### KPI Framework
- Response: median time-to-first-response (hours) by incident type.
- Resolution: median time-to-repair (days), SLA breach rate, contractor compliance range.
- Backlog: open incident trend over time.
- Coverage: incident volume by ward and issue type.

## Insight
- The synthetic dataset produces 200 000 incident records across 135 wards and 6 contractors, giving enough scale for KPI demonstration.
- The current implementation supports data generation, cleaning, incident-level feature building, and notebook-based KPI outputs.
- Generated summary metrics show a 24.0 hour median first response, 3.55 day median repair time, and a 16.4% SLA breach rate.
- The strongest value of the project is operational KPI design and reporting structure, not advanced hotspot or causal inference.

## Implication
- The project is useful as a municipal KPI reporting example, especially for SLA and backlog monitoring.
- Ward-level incident volume is distributed broadly in the generated data, so the current evidence supports monitoring rather than strong hotspot concentration claims.
- Contractor variation exists in the output, but the current implementation does not support strong procurement or contractor-removal recommendations.

## Closing

### Deliverables
- Python modules for synthetic data generation, cleaning, validation, and feature building.
- Notebook-based KPI analysis with exported figures and summary report.
- Interactive HTML dashboard for portfolio presentation.
- KPI framework centred on response, repair, backlog, and SLA reporting.

### Outcome
The project demonstrates how Python-based analyst workflows can structure municipal incident data into a defensible operational reporting layer using synthetic data.

<div style="position:relative;height:78vh;min-height:620px;border:1px solid var(--border);border-radius:.45rem;overflow:hidden;background:var(--panel);margin-top:.75rem;">
  <iframe
    src="https://kabelo-analytics.github.io/jhb-infrastructure-intelligence/"
    title="JHB Municipal Infrastructure Intelligence"
    loading="lazy"
    style="width:100%;height:100%;border:0;"
  ></iframe>
</div>

### Link
- Live dashboard: [View live dashboard](https://kabelo-analytics.github.io/jhb-infrastructure-intelligence/)
- GitHub repo: [Open GitHub project](https://github.com/kabelo-analytics/jhb-infrastructure-intelligence)
