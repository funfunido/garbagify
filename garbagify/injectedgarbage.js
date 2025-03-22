console.log("Success")

//Get all link tags with rel="stylesheet"
var links = document.querySelectorAll('link[rel="stylesheet"]');
links.forEach(function(link) {
    link.href = "";
});
  
//Get all style tags
var styles = document.querySelectorAll('style');
styles.forEach(function(style) {
    style.innerHTML = "";
});

console.log("Page successfully Garbagified. Refresh to make the page go back to normal.")
alert("Page successfully Garbagified. Refresh to make the page go back to normal.");


