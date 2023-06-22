
//writing animation
function writeText(elem, content) {
    function animate() {
      elem.textContent = ""; // ניקוי תוכן האלמנט
      var contentArray = content.split("");
      var current = 0;
      var interval = setInterval(function () {
        if (current < contentArray.length) {
          elem.textContent += contentArray[current++];
        } else {
          clearInterval(interval);
          setTimeout(animate, 2000); // קריאה חוזרת לפונקציה לאחר פסקה של 2 שניות
        }
      }, 80);
    }
  
    animate();
  }
  
  var holder = document.querySelector("#holder");
  writeText(holder, "WEB DESIGNER + FRONT-END DEVELOPER");
  