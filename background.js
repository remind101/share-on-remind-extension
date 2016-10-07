chrome.browserAction.onClicked.addListener(function(activeTab) {
  var url = "https://www.remind.com/messages/new" +
    "?body=" + encodeURIComponent(activeTab.title + ": " + activeTab.url) +
    "&utm_source=chrome_extension&utm_medium=site&utm_campaign=content_share";
  chrome.tabs.create({url: url});
});
