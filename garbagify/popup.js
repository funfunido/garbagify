document.getElementById('clickbutton').addEventListener('click', () => {
    chrome.runtime.sendMessage({
      type: "garbagifyButtonClicked"//,
      //data: "I dont need this rn"
    });
  });