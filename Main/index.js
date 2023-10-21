function openTab(event, tabId) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get the element with the specified id
  tab = document.getElementById(tabId);

  // Show the specified tab content
  tab.style.display = "block";
}

// Add an event listener to the tab link
document.getElementById("san-pham").addEventListener("click", function(event) {
  openTab(event, "san-pham");
});