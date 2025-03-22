document.getElementById('clickbutton').addEventListener('click', () => {
    chrome.runtime.sendMessage({
      type: "garbagifyButtonClicked"//,
      //data: "Some data from the popup"
    });
  });