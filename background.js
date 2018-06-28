'use strict';

chrome.commands.onCommand.addListener(function(command) {
  const url = command === 'google.com' ? 
    'https://www.google.com/webhp?gl=us&hl=en' : 'https://www.google.co.jp'
  chrome.tabs.create({
    url,
    active: true
  });
});
