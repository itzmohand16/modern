function closenavid() {
  document.getElementById("closenavid").style.bottom = "-100vh";
};



window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {

  if (window.innerWidth < 768) {


    if (document.body.scrollTop > 0.1 || document.documentElement.scrollTop > 0.1) {
      // If scroll position is greater than 0.1, show the element with ID "navbar"
      document.getElementById("navbar").style.bottom = "0";
      // Hide the element with ID "zby"
      document.getElementById("scroll").style.display = "none";

      document.getElementById("menu").style.display = "none";

      document.getElementById("exit").style.display = "block";
    } else {
      // If scroll position is less than or equal to 0.1, hide the element with ID "navbar"
      document.getElementById("navbar").style.bottom = "-100vh";
      // Show the element with ID "zby"
      document.getElementById("scroll").style.display = "block"; // or "inline" or "inline-block", depending on the element type
    
      document.getElementById("menu").style.display = "block";

      document.getElementById("exit").style.display = "none";

    }



  }



  else {



    if (document.body.scrollTop > 0.1 || document.documentElement.scrollTop > 0.1) {
      // If scroll position is greater than 0.1, show the element with ID "navbar"
      document.getElementById("navbar").style.bottom = "0";
      // Hide the element with ID "zby"
      document.getElementById("scroll").style.display = "none";

      document.getElementById("menu").style.display = "block";

    } else {
      // If scroll position is less than or equal to 0.1, hide the element with ID "navbar"
      document.getElementById("navbar").style.bottom = "-8rem";
      // Show the element with ID "zby"
      document.getElementById("scroll").style.display = "block"; // or "inline" or "inline-block", depending on the element type

      document.getElementById("menu").style.display = "block";

    }



  }

}






