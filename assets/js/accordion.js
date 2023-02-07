var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.style.borderBottom = "1px solid #E7E7E7";
    panel.style.borderLeft = "1px solid #E7E7E7";
    panel.style.borderRight = "1px solid #E7E7E7";
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.border = "0px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      
    } 
  });
}