// Highlights the current page in the sidebar TOC and wires up the
// mobile nav toggle. Runs on every page since the sidebar markup is
// duplicated per-page (this is a static multi-file site, no includes).
(function () {
  var here = location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.toc nav a[data-file]');
  links.forEach(function (link) {
    if (link.getAttribute('data-file') === here) {
      link.classList.add('current');
      link.setAttribute('aria-current', 'page');
    }
  });

  var toggle = document.querySelector('.toc-toggle');
  var toc = document.querySelector('.toc');
  if (toggle && toc) {
    toggle.addEventListener('click', function () {
      toc.classList.toggle('open');
      var expanded = toc.classList.contains('open');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
  }
})();
