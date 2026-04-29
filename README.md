# TBATEOTU

**The Blog at the End of the Universe**: Renzo's online presence.

---

## Quick Start

### 1. Upload this to GitHub

Create a new repo (or replace your current one), push all these files, and enable GitHub Pages from `Settings → Pages → Deploy from branch → main → / (root)`.

Your site will be at `https://yourusername.github.io/TBATEOTU/`.

### 2. Edit `_config.yml`

Change at minimum:
```yaml
title:       "Your Site Title"
tagline:     "YOUR ABBR"
description: "Your description."
author:      "Your Name"
url:         "https://yourusername.github.io"
baseurl:     "/your-repo-name"   # or "" if it's yourusername.github.io
```

### 3. Run locally (optional)

```bash
gem install bundler
bundle install
bundle exec jekyll serve
# → http://localhost:4000/TBATEOTU/
```

---

## Writing Posts

Create a file in `_posts/` named `YYYY-MM-DD-your-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
subtitle: "Optional subtitle shown below title and in post list"
date: 2026-04-29
tags: [tag1, tag2]
math: false        # set true to enable MathJax
---

Your content here.

Footnotes work like this.[^1]

[^1]: This appears at the bottom of the post with a back-link.
```

### Footnote syntax

Kramdown (Jekyll's default Markdown) handles footnotes natively:

```markdown
Here is a claim that needs a citation.[^myref]

[^myref]: The citation, explanation, or digression goes here.
```

The hover tooltip is handled by `assets/js/footnotes.js` — no external libraries needed.

### Math / LaTeX

Add `math: true` to the post's front matter, then use standard LaTeX syntax:
- Inline: `$E = mc^2$`
- Display: `$$\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$`

---

## Customizing the Design

### Change colors, fonts, spacing

Edit **`_sass/_variables.scss`** — this is the single source of truth for the entire visual design:

```scss
// Swap the font stack
$font-serif: 'Playfair Display', Georgia, serif;

// Change the accent color
$color-accent: #2a5a8b;   // deep blue instead of terracotta

// Adjust the prose width
$max-width-prose: 720px;
```

Then change the Google Fonts import in `_includes/head.html` to match.

### Change navigation

Edit `_includes/header.html` — add or remove `<li>` items.

### Add a new static page

Create `pages/mypage.md`:

```markdown
---
layout: page
title: My Page
permalink: /mypage/
---

Content here.
```

Then add a link to it in `_includes/header.html`.

---

## File Structure

```
tbateotu/
├── _config.yml          ← Site settings
├── _layouts/
│   ├── default.html     ← Wraps everything (header + footer)
│   ├── post.html        ← Individual post template
│   └── page.html        ← Static page template
├── _includes/
│   ├── head.html        ← <head> tag (meta, fonts, CSS)
│   ├── header.html      ← Nav bar
│   ├── footer.html      ← Footer
│   └── post-list.html   ← Reusable post list partial
├── _posts/              ← Your writing goes here
│   └── YYYY-MM-DD-title.md
├── _sass/
│   ├── _variables.scss  ← ★ Edit this to retheme everything
│   ├── _base.scss       ← Typography, links, reset
│   ├── _layout.scss     ← Header, footer, nav, post list
│   └── _posts.scss      ← Post styles, footnotes
├── assets/
│   ├── css/main.scss    ← SCSS entry point (imports _sass/)
│   └── js/footnotes.js  ← Hover tooltip footnotes
├── pages/
│   ├── about.md
│   └── archive.md
├── index.md             ← Home page
└── 404.html
```

---

## Migrating Your Existing Posts

Your old posts from the argmin-gravitas fork had broken URLs because they pointed to `renzaurawr.github.io/enhance` instead of `renzaurawr.github.io/TBATEOTU/enhance`. In this setup, permalink is set to `/:title/` so a post named `2026-02-20-transnormalism.md` will be at `/TBATEOTU/transnormalism/`.

To recreate your posts, just create files in `_posts/` with the right date prefix and copy your content in. Front matter template:

```markdown
---
layout: post
title: "Transnormalism"
subtitle: "in which human enhancement won without thinking"
date: 2026-02-20
tags: [philosophy, technology]
---

[paste your content here]
```
