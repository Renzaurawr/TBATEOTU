---
layout: default
title: Home
---

<div class="home-hero">
  <p class="home-hero__eyebrow">TBATEOTU</p>
  <h1 class="home-hero__title">The Blog at the End of the Universe</h1>
  <p class="home-hero__description">
    Hi, I'm Renzo. I write about technology, philosophy, and whatever's at the edges of things.
  </p>
</div>

<div class="section-header">
  <h2>Recent posts</h2>
  <a href="{{ '/archive/' | relative_url }}" class="view-all-link">All posts</a>
</div>

{% include post-list.html posts=site.posts limit=8 %}
