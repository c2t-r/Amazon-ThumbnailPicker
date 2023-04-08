chrome.runtime.onInstalled.addListener(function() {
    const menu = chrome.contextMenus.create({
        type: "normal",
        id: "contextmenu1",
        title: "Open Thumbnail in New Tab",
        contexts: ["link"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, item) {
    if( info.linkUrl == null ) return
    console.log(item);
    console.log(info.linkUrl);
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, info.linkUrl);
    });
});
  