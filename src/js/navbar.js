window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar").style.background = "#4C4C4C";
    } else {
      document.getElementById("navbar").style.background = "none";
    }
  }