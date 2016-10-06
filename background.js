chrome.browserAction.onClicked.addListener(function(activeTab) {
  var url = "https://www.remind.com/messages/new?body=" + encodeURIComponent(activeTab.title + ": " + activeTab.url);
  chrome.tabs.create({url: url});
});
