---
title: "Digitising Estate Planning for Emerging Households"
date: 2026-03-01
summary: "Explored how estate planning could be made more accessible through a WhatsApp-based product concept grounded in workflow design, trust, and practical delivery."
tags: ["Product Owner", "Business Analysis", "InsurTech", "WhatsApp", "Process Design"]
featured: true
roleFocus: "Business Analysis | Product Design"
projectShows:
  - "Problem framing"
  - "Process design"
  - "Commercial thinking"
snapshot:
  problem: "Traditional estate planning was expensive, unclear, and difficult to complete for the target market."
  focus: "I mapped the user journey, defined the workflow, and shaped the business and product logic."
  outcome: "The concept reframed a difficult legal process as a guided service flow with a clearer operating model."
demo: "https://www.youtube.com/watch?v=-K-K1YlgGSU"
demoLabel: "Watch concept demo"
---

## Hero Summary
Digitising Estate Planning for Emerging Households translated a legal-heavy process into a guided WhatsApp workflow with structured data capture and document output.  
The work combined business analysis, product definition, and system design to reduce friction and make the process easier to complete.

### Impact Highlights
- Reframed estate planning from a legal task into a guided workflow.
- Connected user process design to realistic commercial options.
- Built and demonstrated a prototype flow from intake to PDF output via email.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/-K-K1YlgGSU"
    title="Digitising Estate Planning Demo Video 1"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## Business Context
Estate planning remains under-served for many emerging households in South Africa. The process is often seen as expensive, legal-heavy, and difficult to complete, which creates risk for families and leaves a clear gap in access.

This is not only a process-efficiency problem. It is also a trust problem. People are being asked to complete something important, unfamiliar, and emotionally loaded, often without the language, confidence, or support structure to do it comfortably.

## Problem Statement
Potential users needed a simpler and more accessible way to create a will, while the business needed a delivery model that reduced friction, supported trust, and could connect to viable commercial pathways.

## Analyst Objective
Understand where users were dropping off in the traditional process, define a simpler digital workflow, and shape a solution that balanced accessibility, operations, and commercial potential.

## Stakeholders
- End users needed a guided process they could complete on mobile.
- Families and beneficiaries depended on completion accuracy and document validity.
- Legal or service operators needed structured information capture and clearer process control.
- Commercial partners or insurers would need a model that could support distribution and revenue.

## My Role & Scope
- Owned discovery, problem framing, and stakeholder mapping.
- Defined operational workflow states and user journey logic.
- Mapped market assumptions and monetisation options.
- Specified solution architecture and delivery flow.
- Drove the prototype from business need into workflow and system behaviour.

## Key Questions / Requirements
- Where did complexity or uncertainty stop users from completing the process?
- What minimum data needed to be captured for a valid and useful output?
- Which parts of the journey could be guided through a familiar channel like WhatsApp?
- How should the process handle validation, document generation, and final delivery?
- What commercial models could support access without making the service unaffordable?

## Workflow / Process View
- User enters the WhatsApp flow and is guided through eligibility and information prompts.
- Structured responses are captured and validated before moving to the next step.
- Backend services transform captured information into a formatted will document.
- The final output is delivered through email for review, storage, and printing.

This turned an opaque legal task into a guided service flow with clearer stages, inputs, and outputs.

## What We Designed
The team designed a WhatsApp-based will generation flow that captures user information through structured conversational prompts, validates inputs in backend services, and produces a printable PDF delivered via email. My focus was workflow definition, requirements structure, and end-to-end process logic.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/-AtRgk3v4bo"
    title="Digitising Estate Planning Demo Video 2"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## KPI / Measurement Framework
- Business metrics: completion rate, cost to serve, partner or channel viability, conversion into paid or partnered pathways.
- Product metrics: start-to-completion rate, drop-off points, validation errors, document delivery success.
- Operational metrics: turnaround time, exception handling, data capture completeness.

These measures matter because the solution only works if users can complete it, operators can support it, and the model can work commercially.

## Commercial & Market Thinking
- Market framing suggested a plausible estate-cover segment within life insurance.
- Early bottom-up sizing pointed to meaningful demand potential in formal housing, but this would still need validation with real distribution and completion data.
- Monetisation pathways considered: policy commission, executor subscriptions, white-label insurer partnerships, and B2B2C voucher models.
- Main tradeoff: consumer-only pricing improved access but limited standalone unit economics without ecosystem partners.

## Insights
- The main barrier was not only awareness; it was process friction, cost sensitivity, and low confidence in completing a legal task correctly.
- WhatsApp was a strong fit because it reduced channel friction and matched familiar user behaviour.
- A guided workflow improved the chances of completion, but the commercial model likely depended on partnerships rather than direct consumer pricing alone.

## Method / Limits
- This project is strongest as a concept and workflow-design case study rather than a live scaled product with measured adoption.
- The prototype demonstrates the intended flow and operating logic, but not full legal, operational, or commercial rollout.
- Market and commercial assumptions are framed as working hypotheses, not validated production metrics.

## Deliverables
- Business problem framing for digital estate planning access
- Stakeholder and user-journey mapping
- Requirements and workflow notes for guided intake and document generation
- Commercial model exploration
- Prototype concept and system architecture definition

## Architecture & System Thinking
<img src="../../projects/estate-planning/Business_Analyst_Technical_Architecture_Polished.png" alt="High-level technical architecture for WhatsApp-based will generation system" />

The architecture used a familiar channel, structured data capture, and controlled document generation. It separated conversation handling, validation, and output services so the process stayed easier to manage and trace.

## Next Steps
- Test the flow with real users to see where they hesitate, drop off, or need more guidance.
- Define a practical legal and operational review process before rolling it out more widely.
- Explore insurer or partner-led distribution so the model is easier to sustain.

## Supporting Documents
<div class="artifact-actions">
  <a href="../../artifacts/estate-planning/brd">Open BRD summary</a>
  <a href="../../artifacts/estate-planning/prd">Open PRD summary</a>
  <a href="../../artifacts/estate-planning/trd">Open TRD summary</a>
</div>

## Appendix: Reconstructed Analyst Artefacts
These are short reconstructed extracts based on the case study work. They are included to show the kind of analyst documentation that would sit behind the project.

### Business Requirements Summary
- **Business goal:** make will creation more accessible for emerging households through a lower-friction digital process.
- **Problem to solve:** the current process is costly, confusing, and difficult to complete without legal guidance.
- **In scope:** guided user intake, structured data capture, document generation, and digital delivery.
- **Out of scope:** full legal advisory services, manual case management, and complex estate dispute handling.
- **Success measures:** higher completion rates, lower drop-off, usable document output, and a model that can support partner-led distribution.

### Product Requirements Summary
- The user must be able to complete the flow on WhatsApp without switching to a complex web form.
- The flow must guide users step by step and reduce uncertainty about what information is needed.
- The product must validate key inputs before moving users forward.
- The final output must produce a clear document that can be emailed, stored, and printed.
- The journey must be simple enough for first-time users who are not familiar with estate planning language.

### Technical Requirements Summary
- WhatsApp interaction layer for guided input capture.
- Backend validation rules for required fields, formatting, and stage progression.
- Document-generation service to create a structured PDF output.
- Email delivery step for final document distribution.
- Logging and traceability so failed or incomplete journeys can be reviewed.

## Extended Materials (Optional)
<div class="artifact-actions">
  <a href="../../downloads/Digitising-Estate-Planning-for-Emerging-Households.pptx.ppsm" download>Download Case Study Deck (Optional)</a>
</div>
