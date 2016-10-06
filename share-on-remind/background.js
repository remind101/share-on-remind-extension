chrome.browserAction.onClicked.addListener(function(activeTab) {
  var url = "https://www.remind.com/messages/new?body=" + encodeURIComponent(activeTab.title) + "%3A%20" + encodeURIComponent(activeTab.url);
  chrome.tabs.create({url: url});
});
