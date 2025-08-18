// Button links open in new tab + animations
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // stop normal behaviour
      const link = this.getAttribute("href");
      if (link) {
    window.location.href = link; // open in same tab
}


      // small click animation
      btn.style.transform = "scale(0.95)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 150);
    });
  });
});

// Highlight Notice Button
function highlightNotice() {
  const notice = document.getElementById("notice");
  notice.style.background = "black";
  notice.style.padding = "10px";
  notice.style.border = "2px solid red";
  notice.style.borderRadius = "8px";
}

