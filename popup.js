document.addEventListener('DOMContentLoaded', function() {
  var colorButton = document.getElementById('p-color');
  colorButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
    });
  }, false);
}, false);
