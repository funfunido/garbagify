chrome.runtime.onInstalled.addListener(function() {
  
    chrome.tabs.create({
      url: 'chrome-extension://hjoihpfnehdlcmgenmgehnmbcjcomhhl/thanks.html',
      active: true
    });
  
    return false;
  });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.type === "garbagifyButtonClicked") {
        console.log("Garbagify Button Clicked and Sent")
        injectJS();
      }
    }
  );

async function injectJS() {
    console.log("Inject Successful")
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const tab = tabs[0];
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
  
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    });

    if (nextState === "ON") {
        // Insert the CSS file when the user turns the extension on
        await chrome.scripting.executeScript({
            files: ["injectedgarbage.js"],
            target: { tabId: tab.id },
        });
    }
}