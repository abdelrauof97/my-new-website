---
layout: page
title: Notes
headline: Notes
crumb: Notes
eyebrow: Archive
lede: Earlier writing from RealtorToThrive. These pieces are kept available. They are not the current service offering.
description: Earlier notes from RealtorToThrive on real estate websites, IDX, and market structure.
permalink: /blog/
sitemap_priority: 0.4
---

<section class="page-section">
  <div class="container note-grid">
    {% for post in site.posts %}
      <article class="note-card">
        <a href="{{ post.url | relative_url }}">
          {% if post.heroImage %}
            <img src="{{ post.heroImage | relative_url }}" alt="" width="800" height="500" loading="lazy">
          {% endif %}
          <div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.date | date: "%B %-d, %Y" }}</p>
          </div>
        </a>
      </article>
    {% endfor %}
  </div>
</section>
