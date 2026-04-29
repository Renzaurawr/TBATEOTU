---
layout: default
title: Archive
permalink: /archive/
---

<div class="page-header">
  <h1>Archive</h1>
</div>

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year_group in posts_by_year %}
  <div class="archive-year">
    <h2>{{ year_group.name }}</h2>
    {% include post-list.html posts=year_group.items %}
  </div>
{% endfor %}
