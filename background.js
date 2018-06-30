'use strict';

chrome.commands.onCommand.addListener(function(command) {
  const url = 'https://www.google.com/webhp?gl=us&hljen';
  if (command == 'current-tab') {
    chrome.tabs.executeScript({
      code: `window.location.href = "${url}";`
    });
  } else {
    chrome.tabs.create({
      url,
      active: true
    });
  }
});
