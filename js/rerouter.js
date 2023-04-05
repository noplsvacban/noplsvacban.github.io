// Remove ".html" extension from URL
if (window.location.pathname.split('/').pop().indexOf('.html') > -1) {
  var newPathname = window.location.pathname.replace('.html', '');
  window.history.replaceState({}, '', newPathname);
}
