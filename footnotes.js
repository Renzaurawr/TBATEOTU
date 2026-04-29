// ============================================================
// TBATEOTU — Footnote Tooltips
// Hover over a footnote number to see a preview
// Pure vanilla JS, no dependencies
// ============================================================

(function () {
  'use strict';

  var tooltip = null;

  function getFootnoteContent(href) {
    // href looks like "#fn:1" or "#fn1"
    var id = href.replace(/^#/, '');
    var el = document.getElementById(id);
    if (!el) return null;
    // Clone the li, remove the backlink
    var clone = el.cloneNode(true);
    var backref = clone.querySelector('.reversefootnote, .footnote-backref, a[href^="#fnref"]');
    if (backref) backref.remove();
    return clone.innerHTML.trim();
  }

  function createTooltip() {
    var div = document.createElement('div');
    div.className = 'footnote-tooltip';
    div.setAttribute('aria-hidden', 'true');
    document.body.appendChild(div);
    return div;
  }

  function positionTooltip(tip, anchor) {
    var rect = anchor.getBoundingClientRect();
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollX = window.scrollX || window.pageXOffset;

    var top = rect.bottom + scrollY + 8;
    var left = rect.left + scrollX;

    // Keep within viewport
    var tipWidth = 320;
    if (left + tipWidth > window.innerWidth - 16) {
      left = window.innerWidth - tipWidth - 16;
    }
    if (left < 8) left = 8;

    tip.style.top = top + 'px';
    tip.style.left = left + 'px';
  }

  function init() {
    // Only attach to footnote reference links
    var fnLinks = document.querySelectorAll('a[href^="#fn:"], a[href^="#fn"], sup.footnote a, .footnote-ref a');
    if (!fnLinks.length) return;

    tooltip = createTooltip();

    fnLinks.forEach(function (link) {
      link.addEventListener('mouseenter', function () {
        var href = link.getAttribute('href');
        var content = getFootnoteContent(href);
        if (!content) return;

        tooltip.innerHTML = content;
        positionTooltip(tooltip, link);
        tooltip.classList.add('visible');
      });

      link.addEventListener('mouseleave', function () {
        tooltip.classList.remove('visible');
      });

      link.addEventListener('focus', function () {
        var href = link.getAttribute('href');
        var content = getFootnoteContent(href);
        if (!content) return;
        tooltip.innerHTML = content;
        positionTooltip(tooltip, link);
        tooltip.classList.add('visible');
      });

      link.addEventListener('blur', function () {
        tooltip.classList.remove('visible');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
