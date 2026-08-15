---
title: "Bontle: Operational Intelligence for Service Teams"
date: 2026-03-01
summary: "Designed a state-based workflow for multi-location service teams, with KPI logic and reporting structured around real day-to-day operating flow."
tags: ["Product Analytics", "Product Ownership", "Systems Design"]
featured: true
roleFocus: "Operational Analysis | Product Analytics"
projectShows:
  - "Workflow design"
  - "KPI definition"
  - "Ops decision support"
snapshot:
  problem: "Service teams lacked a clear way to track work across branches, handoffs, and delays."
  focus: "I designed the state-based workflow, KPI logic, and reporting structure."
  outcome: "The result was a more measurable operating flow that managers could review more consistently."
demo: "https://bontle-web-app.onrender.com/book"
demoLabel: "View live workflow"
---

## Product Analytics Case Study

Bontle is an operational workflow system for multi-location service teams.
It tracks execution as state transitions rather than isolated bookings, so delivery performance can be reviewed as work moves through the process.

## Business Context
Service delivery teams across multiple locations need more than a booking list. They need a clear view of work in progress, ownership, handoffs, delays, and execution quality. Without that, managers react late and leadership cannot see where performance is breaking down.

## Problem Statement
The operational challenge was not simply scheduling work. It was the lack of a reliable workflow and measurement structure for tracking how work moved, where it stalled, and how those patterns affected service quality and commercial performance.

## Analyst Objective
Design an operational workflow model that supports day-to-day execution, gives teams clear KPI definitions, and gives leadership better reporting on throughput, quality, and capacity.

## Stakeholders
- Frontline consultants needed clearer ownership and handoff visibility.
- Operations leads needed a live queue view and faster exception detection.
- Branch managers needed comparable performance views across locations.
- Leadership needed KPI definitions that linked workflow behaviour to business outcomes.

## Key Questions
- Where in the workflow were jobs slowing down or being reassigned?
- Which exceptions needed earlier operational intervention?
- How should throughput, quality, and utilisation be measured in a way teams could trust?
- How could state changes be converted into management reporting and review signals?

## Impact Snapshot
- Shifted service delivery from booking administration to something teams could measure and manage.
- Created a shared view of execution health across frontline and leadership teams.
- Defined KPI groups around flow, quality, capacity, and commercial performance.
- Made review conversations more concrete by linking state changes to clear management questions.

## Workflow and Control Design
**State model:** Today -> In Progress -> Completed

- Transitions are explicit, server-enforced, and role-scoped.
- Events are auditable with immutable logs and timestamped ownership.
- Concurrency checks and idempotent writes protect reliability during retries.
- State history becomes direct input for cycle-time, backlog, and exception KPIs.

This workflow design made the operating process measurable. Instead of treating service delivery as isolated tasks, it created a flow that could be reviewed, managed, and improved.

The strongest value here is not technical complexity on its own. It is that messy operational work became easier to see, govern, and discuss across teams.

## Execution Views
- Consultant Board: daily ownership clarity, handoff visibility, and queue-priority focus.
- Ops Queue: branch filtering, stalled-item detection, and early cross-team risk surfacing.

## Analytics and KPI Trust
### Throughput
- Volume moved by state and location.
- Completion trend by period.
- Backlog age and movement.
*Business Question Answered: Are we moving enough work, fast enough, in the right places?*

### Execution Quality
- Rework and reassignment frequency.
- Late transition exceptions.
- Duration variance across workflow stages.
*Business Question Answered: Where is delivery quality breaking down?*

### Utilisation
- Workload distribution by team and branch.
- Capacity pressure by operating unit.
- Queue concentration risk.
*Business Question Answered: Are we using capacity evenly and sustainably?*

### Revenue Intelligence
- Service output by operational state.
- Commercial impact of delays.
- Performance comparison across locations.
*Business Question Answered: Which execution patterns are helping or hurting commercial outcomes?*

Exports are available in CSV and JSON for BI ingestion.

KPI trust is supported through record versioning, event-level audit trails, reconciliation checks, masked PII handling, and stable SQL pagination. In practice, that matters because teams are more likely to trust operational reporting when they can see where numbers came from and how state changes were recorded.

## Deliverables
- Operational problem framing
- Workflow and state-transition design
- KPI definition across throughput, quality, utilisation, and revenue
- Management reporting structure for service performance reviews
- Audit-ready event and reconciliation logic

## Insights
- Workflow visibility improved when ownership and transitions were explicit.
- State-based measurement gave a better basis for root-cause analysis than static booking counts.
- Reporting became more useful when KPI definitions were tied to specific management questions.

## Method / Limits
- This case study is strongest as an operational design and control framework, not as a published before-versus-after performance study.
- The page demonstrates workflow logic, KPI modelling, and reporting structure more clearly than it demonstrates measured adoption outcomes.
- Where the write-up refers to management usefulness, that should be read as the intended operating benefit of the design.

## Architecture & Delivery
- Frontend: React + TypeScript + Vite
- Backend: FastAPI + SQLModel + PostgreSQL
- Infrastructure: Docker, Render, GitHub CI, JWT RBAC

<div class="artifact-actions">
  <a href="https://bontle-web-app.onrender.com/book" target="_blank" rel="noreferrer">Live Demo</a>
</div>
<p>Render free tier may take a moment to wake.</p>

## What This Demonstrates
- Product analytics thinking grounded in operational workflow behaviour.
- KPI modelling through state transitions.
- Operational data architecture with traceability.
- Reliability and auditability in delivery control.
- Executive framing for decision review.
- Iterative system design with clear human control.

**Business Analysis -> Product Ownership -> Product Analytics -> Systems Design**

## Next Steps
- Add branch-level exception alerts so issues can be picked up earlier.
- Compare planned workload against completed work to spot capacity gaps.
- Review reassignment and delay patterns regularly to identify where the process is breaking down.

## Supporting Documents
<div class="artifact-actions">
  <a href="../../artifacts/bontle/brd">Open BRD summary</a>
  <a href="../../artifacts/bontle/prd">Open PRD summary</a>
  <a href="../../artifacts/bontle/trd">Open TRD summary</a>
</div>

## Appendix: Reconstructed Analyst Artefacts
These short extracts show the kind of documentation that would support the workflow and reporting design in a real delivery setting.

### Business Requirements Summary
- **Business goal:** improve operational visibility across service teams and locations.
- **Problem to solve:** managers do not have a reliable way to track ownership, handoffs, delays, or execution quality in one workflow.
- **In scope:** state-based workflow control, KPI definitions, audit trail logic, and management reporting views.
- **Out of scope:** workforce payroll, advanced financial planning, and unrelated branch administration.
- **Success measures:** clearer ownership, faster exception handling, better backlog visibility, and more reliable operational reporting.

### Product Requirements Summary
- Users must be able to move work through clearly defined states with role-based control.
- Managers must be able to view branch queues, stalled work, and reassignment patterns.
- The workflow must preserve a history of changes for review and reporting.
- The product must support daily operating use, not only end-of-week reporting.
- KPI views must reflect the actual flow of work rather than static booking counts.

### Technical Requirements Summary
- State transition logic enforced on the server.
- Event logging for status changes, timestamps, and ownership updates.
- Data model that supports throughput, backlog, exception, and utilisation reporting.
- Export capability for BI consumption.
- Concurrency protection and idempotent write handling for operational reliability.

## Artefacts
<div class="artifact-actions">
  <a href="../../downloads/Bontle-Operational-Intelligence-for-Multi-Location-Service-Teams_v1.pptx.ppsm" download>Download the deck (PPSM)</a>
  <a href="https://bontle-web-app.onrender.com/book" target="_blank" rel="noreferrer">View Live Demo</a>
  <a href="#" aria-disabled="true">GitHub Repo (Optional)</a>
</div>
