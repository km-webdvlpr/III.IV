---
layout: artifact
title: "Estate Planning | PRD Summary"
description: "Reconstructed product requirements document for the estate planning case study."
projectTitle: "Digitising Estate Planning for Emerging Households"
artifactLabel: "PRD Summary"
caseStudyHref: "/projects/digitising-estate-planning-for-emerging-households"
---

## Product Purpose
This document captures the main product requirements behind the estate planning concept. It focuses on the user journey, key product behaviours, operating requirements, and product measures that would guide a first working version.

## Product Vision
The product was intended to make estate planning feel more approachable by guiding users through a structured process on a familiar channel. The product did not aim to replace all legal complexity. It aimed to reduce the effort required to start, progress, and complete the core journey.

## Users
### Primary User
A first-time user who needs to create a will, is likely working on mobile, and is not comfortable navigating a legal-heavy process without guidance.

### Secondary User
An operator, reviewer, or partner-side user who needs the submitted information to be structured enough for review, support, or operational follow-up.

## User Problem
The user is not only trying to create a document. The user is trying to get through a process that feels unfamiliar and high-stakes. The product therefore has to reduce uncertainty and help the user feel that they are progressing correctly.

## User Journey
1. User enters the WhatsApp flow.
2. The product explains the purpose of the journey in simple language.
3. The user answers guided prompts step by step.
4. The product validates inputs before allowing progression.
5. The system prepares the document based on captured information.
6. The user receives the final output through email.

The journey must feel progressive and manageable. Users should not face an overwhelming wall of questions or legal wording up front.

## Core Product Requirements
- The journey must work well on mobile and avoid heavy form-based interaction.
- The flow must guide the user in a clear sequence rather than expecting the user to understand the whole process upfront.
- The product must reduce ambiguity by explaining what each step requires.
- Input validation must happen early enough to prevent invalid progression.
- The final output must be clear enough to review, store, and print.

## Workflow Requirements
- Each step must have a clear purpose and expected input.
- The user should only move forward when required information has been captured correctly.
- The product should make it obvious where the user is in the journey.
- Failure or interruption should not make the whole process unusable.
- The flow should support review of incomplete or failed journeys from an operational perspective.

## Content and UX Requirements
- Use plain language wherever possible.
- Avoid legal terminology unless it is necessary.
- Keep prompt wording concise and understandable.
- Use the channel to make the process feel conversational rather than administrative.
- Reduce the sense of risk by guiding users before errors occur.

## Functional Requirements
- capture user responses in structured form
- validate required fields
- manage stage progression
- generate a document from captured information
- trigger final delivery by email
- support basic process monitoring and review

## Edge Cases
- the user leaves the journey before completion
- a required field is missing or invalid
- the user misunderstands a question and submits conflicting information
- document generation fails
- email delivery fails after generation succeeds

## Acceptance Criteria
- A new user can complete the main journey using mobile-first interaction.
- The product prevents progression when required information is missing.
- The final output is generated successfully for valid submissions.
- The journey can be reviewed operationally when a user fails to complete or submit.
- The structure is simple enough to improve through user testing rather than major rework.

## Product Measures
- start-to-completion rate
- drop-off by stage
- validation failure rate
- successful document generation rate
- successful delivery rate

## Constraints
- legal review may place limits on how far automation can go
- trust is part of the user experience and cannot be solved only through interface design
- the product must stay simple in its first version to avoid recreating the same friction it is trying to remove

## Product Recommendation
The first product version should focus on a narrow, guided flow that can be tested quickly. The main product goal should be to confirm that the journey is understandable, completable, and operationally manageable before broader expansion.
