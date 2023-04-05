// Get the current URL
let url = window.location.href;

// Check if the URL contains "index"
if (url.indexOf("index") !== -1) {

  // Replace "index" with "home" in the URL
  url = url.replace("index", "home");

  // Change the URL in the browser without reloading the page
  window.history.replaceState({}, null, url);
}
