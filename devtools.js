var x = new XMLHttpRequest();
x.open('GET', 'sunburst.css');
x.onload = function() {
    chrome.devtools.panels.applyStyleSheet(x.responseText);
};
x.send();
