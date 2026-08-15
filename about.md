---
layout: page
title: About
description: Portfolio-led product intelligence work across consumer behaviour, commercial performance, and growth opportunities.
status_context: ABOUT // KABELO MAKUA
body_class: page-about
page_class: page-about
---

<section class="page-header">
  <div class="breadcrumb">HOME <span>//</span> ABOUT</div>
  <h1 class="page-title">About <span style="color:var(--green-bright);">{{ site.mark_name }}</span></h1>
  <p class="page-subtitle">This portfolio shows how I work as a Product Intelligence Analyst: starting with the question, understanding the context, and turning data into something a team can actually use.</p>
</section>

<section class="about-layout">
  <aside class="sidebar">
    <div class="sidebar-label">// ON THIS PAGE</div>
    <a class="sidebar-link" href="#profile">Profile</a>
    <a class="sidebar-link" href="#case-files">Case files</a>
    <a class="sidebar-link" href="#process">How I work</a>
    <a class="sidebar-link" href="#background">Background</a>
    <a class="sidebar-link" href="#credentials">Education</a>
    <hr class="sidebar-divider">
    <a class="sidebar-link" href="{{ '/projects/' | relative_url }}">View Projects</a>
    <a class="sidebar-link" href="mailto:{{ site.contact_email }}">Email me</a>
    <hr class="sidebar-divider">
    <div class="sidebar-meta">
      LOCATION: <span class="hi">{{ site.location_label }}</span><br>
      STATUS: <span class="hi">AVAILABLE</span><br>
      FOCUS: <span class="hi">PRODUCT INTELLIGENCE / DECISION SUPPORT</span>
    </div>
  </aside>

  <main class="about-main">
    <section class="section" id="profile">
      <div class="section-tag reveal">// init.profile</div>
      <div class="profile-block reveal">
        <div class="profile-prompt">
          <span class="dollar">$</span>
          <span>whoami</span>
        </div>
        <div class="profile-name">Kabelo Makua</div>
        <div class="profile-title">PRODUCT INTELLIGENCE ANALYST &nbsp;//&nbsp; CONSUMER, COMMERCIAL &amp; GROWTH INSIGHTS &nbsp;//&nbsp; {{ site.location_label }}</div>
        <hr class="profile-divider">
        <p class="profile-text">
          I'm Kabelo. I work as a Product Intelligence Analyst, using data to help teams make clearer product and business decisions. The work here is built around real questions, stakeholder context, and usable outputs rather than reporting for its own sake.
        </p>
        <p class="profile-text">
          My work often sits between analytics, product thinking, and commercial analysis. I do my best work when analysis helps a team understand what is happening, why it matters, and what to do next.
        </p>
        <p class="profile-text">
          This portfolio reflects my growth, range, and the way my thinking has developed across different kinds of work. My career has not followed one simple straight line, and this body of work shows how I learn, adapt, and build towards the kind of analyst I&apos;m becoming.
        </p>
        <div class="profile-stats">
          <div class="stat-cell">
            <span class="stat-val" data-count-up>8+</span>
            <span class="stat-label">Years in business</span>
          </div>
          <div class="stat-cell">
            <span class="stat-val" data-count-up>{{ site.projects | size }}</span>
            <span class="stat-label">Portfolio projects</span>
          </div>
          <div class="stat-cell">
            <span class="stat-val">{{ site.location_label }}</span>
            <span class="stat-label">Based &amp; available</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="case-files">
      <div class="section-tag reveal">// casefiles.map --about</div>
      <p class="page-desc reveal" style="margin-bottom:1.2rem;max-width:none;">Selected case files showing how I approach product questions, commercial trade-offs, KPI design, and decision support.</p>
      <div class="compact-grid">
        {% for entry in site.data.project_registry %}
          {% if entry.about %}
            {% for project in site.projects %}
              {% if project.slug == entry.slug %}
                {% include project-card.html project=project meta=entry variant='compact' %}
                {% break %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endfor %}
      </div>
    </section>

    <section class="section" id="process">
      <div class="section-tag reveal">// process.sh --how-i-work</div>
      <div class="process-grid reveal">
        <div class="process-cell">
          <div class="process-num">01</div>
          <div class="process-title">Business Question</div>
          <div class="process-desc">I start with the decision that needs to be made, then work backwards to the data and evidence required.</div>
          <div class="process-cmd">define_problem --before --choosing_work</div>
        </div>
        <div class="process-cell">
          <div class="process-num">02</div>
          <div class="process-title">Discovery</div>
          <div class="process-desc">I review the data, the process, the stakeholders, and the operating context before deciding what matters most.</div>
          <div class="process-cmd">scan --data --context --stakeholders</div>
        </div>
        <div class="process-cell">
          <div class="process-num">03</div>
          <div class="process-title">Metrics &amp; Workflow</div>
          <div class="process-desc">I define measures that connect to how the business actually works, not just what is easy to report.</div>
          <div class="process-cmd">kpi.define --connect_to_decisions</div>
        </div>
        <div class="process-cell">
          <div class="process-num">04</div>
          <div class="process-title">Decision Support</div>
          <div class="process-desc">I turn analysis into something a team can use: clearer options, stronger prioritisation, and more confident next steps.</div>
          <div class="process-cmd">output --actionable --not_decorative</div>
        </div>
      </div>
    </section>

    <section class="section" id="background">
      <div class="section-tag reveal">// background.signals</div>
      <div class="career-log">
        <div class="log-entry reveal">
          <div class="log-timestamp">OPERATIONS</div>
          <div class="log-role">Process, controls, and structured work</div>
          <div class="log-org">Financial services foundation</div>
          <div class="log-desc">Early work in bond administration built discipline around accuracy, documentation, structured workflows, and operational detail.</div>
          <span class="log-tag">#ProcessControl</span>
          <span class="log-tag">#Accuracy</span>
          <span class="log-tag">#Operations</span>
        </div>
        <div class="log-entry reveal">
          <div class="log-timestamp">PRODUCT</div>
          <div class="log-role">Workflow thinking and business viability</div>
          <div class="log-org">Startup and venture experience</div>
          <div class="log-desc">Product and venture work strengthened how I think about user friction, adoption, commercial reality, and the difference between an idea that sounds good and one that people actually use.</div>
          <span class="log-tag">#ProductThinking</span>
          <span class="log-tag">#UserFriction</span>
          <span class="log-tag">#CommercialContext</span>
          <div class="log-insight">// That experience still shapes how I read performance: numbers matter, but incentives, constraints, and behaviour matter too.</div>
        </div>
        <div class="log-entry reveal" style="padding-bottom:0;">
          <div class="log-timestamp">PORTFOLIO</div>
          <div class="log-role">Cross-sector analytical case work</div>
          <div class="log-org">Commercial, civic, product, and market analysis</div>
          <div class="log-desc">The portfolio is where those threads come together: structured analysis, KPI logic, stakeholder context, and output designed to support a real decision.</div>
          <span class="log-tag">#Analytics</span>
          <span class="log-tag">#DecisionSupport</span>
          <span class="log-tag">#BusinessContext</span>
        </div>
      </div>
    </section>

    <section class="section" id="credentials">
      <div class="section-tag reveal">// education</div>
      <div class="cred-block reveal">
        <div class="cred-row">
          <div class="cred-left">
            <div class="cred-year">2026</div>
            <div class="cred-title">Applied Data Science - Certificate</div>
            <div class="cred-org">ALX / ExploreAI</div>
            <p>Professional data science programme focused on practical analytical delivery.</p>
          </div>
          <a href="{{ '/assets/images/84-data-science-certificate-kabelo-makua.png' | relative_url }}" class="cred-link" target="_blank" rel="noreferrer">View Cert</a>
        </div>
        <div class="cred-row">
          <div class="cred-left">
            <div class="cred-year">ACADEMIC BASE</div>
            <div class="cred-title">BCom</div>
            <div class="cred-org">UNISA</div>
            <p>Economics-led business training with grounding in Investment Management, financial management, and Business Management. That foundation still shapes how I approach commercial analysis, KPI logic, and decision-making today.</p>
          </div>
          <span class="cred-link" style="cursor:default;">FOUNDATION</span>
        </div>
        <div class="cred-row">
          <div class="cred-left">
            <div class="cred-year">IN PROGRESS</div>
            <div class="cred-title">Postgraduate Data Science Path</div>
            <div class="cred-org">Continuing technical development</div>
            <p>Ongoing technical development in data science and analytical depth.</p>
          </div>
          <span class="cred-link" style="cursor:default;">IN PROGRESS</span>
        </div>
      </div>
    </section>

    <div class="about-cta reveal">
      <a href="{{ '/projects/' | relative_url }}" class="btn-solid">View Projects</a>
      <a href="mailto:{{ site.contact_email }}" class="btn-outline">Get in Touch</a>
    </div>
  </main>
</section>
