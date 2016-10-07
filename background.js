chrome.browserAction.onClicked.addListener(function(activeTab) {
  var url = "https://www.remind.com/messages/new?&utm_source=chrome_extension&utm_medium=site&utm_campaign=content_share&body=" + encodeURIComponent(activeTab.title + ": " + activeTab.url);
  chrome.tabs.create({url: url});
});
