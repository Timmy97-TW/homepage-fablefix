/* =============================================================================
   PREVIEW ONLY. THIS FILE IS NOT PART OF THE HOMEPAGE.
   -----------------------------------------------------------------------------
   This repository holds the homepage and the files it loads, and nothing else:
   no description/, no parts/, no hardware/bioreactor/ record. Every link out of
   the page would land on a 404 here, which makes a design review about broken
   links instead of about the design.

   So, in THIS repository only, a link that points at a wiki page the repository
   does not contain is sent to the published wiki instead. Links to files that
   ARE here (assets, the hardware model and scripts), anchors, mail and external
   links are left alone.

   WHEN MERGING THESE CHANGES BACK INTO releaf-wiki: delete this file and the one
   <script> line that loads it in index.html. Nothing else refers to it, and the
   relative links in index.html are already the correct ones for the wiki.
   ========================================================================== */

(function () {
  "use strict";

  var WIKI = "https://timmy97-tw.github.io/releaf-wiki/";

  /* A wiki PAGE is a directory link, "parts/" or "hardware/bioreactor/", and
     none of those directories are here; a FILE link keeps its extension and is
     served from this repository. hardware/ is both, which is why the test is
     the trailing slash and not the first path segment. */
  var PAGE = /\/$/;

  function absolute(href) {
    return WIKI + href.replace(/^\.\//, "");
  }

  function fix(root) {
    var links = root.querySelectorAll("a[href]");
    Array.prototype.forEach.call(links, function (a) {
      var href = a.getAttribute("href");
      if (!href) return;
      if (/^(#|https?:|mailto:|tel:|\/)/.test(href)) return;   /* anchors, external, absolute */
      if (!PAGE.test(href)) return;                            /* a file that is in this repo */
      a.setAttribute("href", absolute(href));
      a.setAttribute("data-preview-link", "");
    });
  }

  /* The site nav builds itself from markup that is empty at parse time, so its
     links have to be caught after nav.js has run as well as at load. */
  document.addEventListener("DOMContentLoaded", function () {
    fix(document);
    window.setTimeout(function () { fix(document); }, 0);
  });
})();
