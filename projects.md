---
layout: projects
title: Projects
description: Selected case studies showing how I move from business questions and KPI logic into analysis, workflow thinking, and usable outputs.
body_class: page-projects
---
{% assign featured_count = 0 %}
{% assign skill_build_count = 0 %}
{% assign creative_count = 0 %}
{% for entry in site.data.project_registry %}
  {% for project in site.projects %}
    {% if project.slug == entry.slug %}
      {% if entry.group == 'featured' %}{% assign featured_count = featured_count | plus: 1 %}{% endif %}
      {% if entry.group == 'skill-build' %}{% assign skill_build_count = skill_build_count | plus: 1 %}{% endif %}
      {% if entry.group == 'creative' %}{% assign creative_count = creative_count | plus: 1 %}{% endif %}
      {% break %}
    {% endif %}
  {% endfor %}
{% endfor %}

<section class="page-header">
  <div class="breadcrumb">HOME <span>//</span> PROJECTS</div>
  <h1 class="page-title">Projects</h1>
  <p class="page-desc">Selected case studies showing how I move from business questions and KPI logic into analysis, workflow thinking, and usable outputs.</p>
</section>

<section class="filter-bar">
  <span class="filter-label">FILTER //</span>
  <button class="filter-btn active" type="button" data-filter="all">All</button>
  <button class="filter-btn" type="button" data-filter="commercial">Commercial</button>
  <button class="filter-btn" type="button" data-filter="consumer">Consumer</button>
  <button class="filter-btn" type="button" data-filter="product">Product</button>
  <button class="filter-btn" type="button" data-filter="operations">Operations</button>
  <button class="filter-btn" type="button" data-filter="culture">Culture</button>
</section>

<section class="projects-layout projects-layout--table">
  <aside class="sidebar sidebar--projects-index">
    <div class="sidebar-label">// INDEX GUIDE</div>
    <p class="sidebar-note">Scan by section, narrow by filter, then open a case file. The filter selection carries into project-to-project navigation.</p>
    <a class="sidebar-link" href="#featured-casefiles">Featured case files</a>
    <a class="sidebar-link" href="#skill-build-casefiles">Skill-build projects</a>
    <a class="sidebar-link" href="#creative-casefiles">Creative space</a>

    <hr class="sidebar-divider">
    <div class="sidebar-label">// TOTALS</div>
    <div class="sidebar-meta">
      TOTAL PROJECTS: <span class="hi">{{ site.projects | size }}</span><br>
      FEATURED: <span class="hi">{{ featured_count }}</span><br>
      SKILL-BUILD: <span class="hi">{{ skill_build_count }}</span><br>
      CREATIVE: <span class="hi">{{ creative_count }}</span>
    </div>

    <hr class="sidebar-divider">
    <div class="sidebar-label">// FILTERS</div>
    <div class="sidebar-link sidebar-link--static">Commercial, consumer, product, operations, and culture filters update the visible list.</div>
    <div class="sidebar-link sidebar-link--static">Case-file navigation keeps the same active filter when possible.</div>
  </aside>

  <main class="project-feed project-feed--table">
    <section data-filter-section id="featured-casefiles">
      <div class="feed-section-header reveal">
        <span class="feed-section-label">// FEATURED ANALYST CASE STUDIES</span>
        <div class="feed-section-line"></div>
        <span class="feed-section-count">{{ featured_count }}</span>
      </div>

      <div class="project-table reveal">
        {% for entry in site.data.project_registry %}
          {% if entry.group == 'featured' %}
            {% for project in site.projects %}
              {% if project.slug == entry.slug %}
              <a
                class="project-row"
                id="{{ project.slug }}"
                href="{{ project.url | relative_url }}"
                data-project-link
                data-base-href="{{ project.url | relative_url }}"
                data-filterable
                data-filters="{{ entry.filters | join: ' ' }}"
                data-project-group="{{ entry.group }}">
                <span class="project-row__num">{{ entry.log }}</span>
                <span class="project-row__main">
                  <span class="project-row__eyebrow">{{ project.roleFocus | default: "Case file" }}</span>
                  <span class="project-row__title">{{ project.title }}</span>
                  {% if project.summary %}<span class="project-row__desc">{{ project.summary }}</span>{% endif %}
                </span>
                <span class="project-row__meta">
                  <span class="project-row__group">Featured</span>
                  <span class="project-row__filters">
                    {% for filter in entry.filters limit: 3 %}
                    <span class="project-row__chip">{{ filter }}</span>
                    {% endfor %}
                  </span>
                </span>
                <span class="project-row__arrow">OPEN</span>
              </a>
              {% break %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endfor %}
      </div>
    </section>

    <section data-filter-section id="skill-build-casefiles">
      <div class="feed-section-header reveal">
        <span class="feed-section-label">// SKILL-BUILDING PROJECTS</span>
        <div class="feed-section-line"></div>
        <span class="feed-section-count">{{ skill_build_count }}</span>
      </div>

      <div class="project-table reveal">
        {% for entry in site.data.project_registry %}
          {% if entry.group == 'skill-build' %}
            {% for project in site.projects %}
              {% if project.slug == entry.slug %}
              <a
                class="project-row project-row--supporting"
                id="{{ project.slug }}"
                href="{{ project.url | relative_url }}"
                data-project-link
                data-base-href="{{ project.url | relative_url }}"
                data-filterable
                data-filters="{{ entry.filters | join: ' ' }}"
                data-project-group="{{ entry.group }}">
                <span class="project-row__num">{{ entry.log }}</span>
                <span class="project-row__main">
                  <span class="project-row__eyebrow">{{ project.roleFocus | default: "Skill-build project" }}</span>
                  <span class="project-row__title">{{ project.title }}</span>
                  {% if project.summary %}<span class="project-row__desc">{{ project.summary }}</span>{% endif %}
                </span>
                <span class="project-row__meta">
                  <span class="project-row__group">Skill-build</span>
                  <span class="project-row__filters">
                    {% for filter in entry.filters limit: 3 %}
                    <span class="project-row__chip">{{ filter }}</span>
                    {% endfor %}
                  </span>
                </span>
                <span class="project-row__arrow">OPEN</span>
              </a>
              {% break %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endfor %}
      </div>
    </section>

    <section data-filter-section id="creative-casefiles">
      <div class="feed-section-header reveal">
        <span class="feed-section-label">// CREATIVE SPACE</span>
        <div class="feed-section-line"></div>
        <span class="feed-section-count">{{ creative_count }}</span>
      </div>
      <p class="page-desc reveal" style="margin-bottom:1.2rem;max-width:none;">Storytelling and design projects outside the core analytics portfolio.</p>

      <div class="project-table reveal">
        {% for entry in site.data.project_registry %}
          {% if entry.group == 'creative' %}
            {% for project in site.projects %}
              {% if project.slug == entry.slug %}
              <a
                class="project-row project-row--creative"
                id="{{ project.slug }}"
                href="{{ project.url | relative_url }}"
                data-project-link
                data-base-href="{{ project.url | relative_url }}"
                data-filterable
                data-filters="{{ entry.filters | join: ' ' }}"
                data-project-group="{{ entry.group }}">
                <span class="project-row__num">{{ entry.log }}</span>
                <span class="project-row__main">
                  <span class="project-row__eyebrow">{{ project.roleFocus | default: "Creative case file" }}</span>
                  <span class="project-row__title">{{ project.title }}</span>
                  {% if project.summary %}<span class="project-row__desc">{{ project.summary }}</span>{% endif %}
                </span>
                <span class="project-row__meta">
                  <span class="project-row__group">Creative</span>
                  <span class="project-row__filters">
                    {% for filter in entry.filters limit: 3 %}
                    <span class="project-row__chip">{{ filter }}</span>
                    {% endfor %}
                  </span>
                </span>
                <span class="project-row__arrow">OPEN</span>
              </a>
              {% break %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endfor %}
      </div>
    </section>

    <div class="project-index-stats reveal">
      <div class="project-index-stats__cell">Visible index rows <span class="hi" data-project-visible-count>{{ site.projects | size }}</span></div>
      <div class="project-index-stats__cell">Featured <span class="hi" data-count-up>{{ featured_count }}</span></div>
      <div class="project-index-stats__cell">Skill-build <span class="hi" data-count-up>{{ skill_build_count }}</span></div>
      <div class="project-index-stats__cell">Creative <span class="hi" data-count-up>{{ creative_count }}</span></div>
    </div>
  </main>
</section>
