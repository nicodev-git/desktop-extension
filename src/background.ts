const SITE_URL = "https://www.ralphlauren";

// Show popup when visiting Retail page
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url.includes(SITE_URL)) {
    chrome.tabs.sendMessage(
      tabId,
      {
        action: "show_popup",
      },
      function (res) {}
    );
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "user_activated" && request.tab.url) {
  }

  return true;
});
