function showContent(tabId, activeId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
      content.classList.remove('active');
    });
    var tabs = document.querySelectorAll('.tab span');
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });

    var selectedContent = document.getElementById(tabId);
    var activateContent = document.getElementById(activeId);
    if (selectedContent) {
      selectedContent.classList.add('active');
      activateContent.classList.add('active');
    }
  }

  function toggleMenu() {
    var boxes = document.querySelectorAll('.box2-1, .box2-2, .box2-3, .box2-4, .box2-5, .box2-6, .box2-7, .box2-8, .box2-9');
    boxes.forEach(function(box) {
      box.style.display = (box.style.display === "block") ? "none" : "block";
    });
  }
  function toggleMenu2() {
    var boxes = document.querySelectorAll('.box3-1, .box3-2, .box3-3, .box3-4, .box3-5, .box3-6, .box3-7, .box3-8, .box3-9');
    boxes.forEach(function(box) {
      box.style.display = (box.style.display === "block") ? "none" : "block";
    });
  }
  function toggleDropdown() {
    var dropdownContent = document.querySelectorAll('.dropdown-content');
    dropdownContent.forEach(function (element) {
      element.classList.toggle('show');
    });

  }