$("#year").text( (new Date).getFullYear() ); //inserts the year at the id year in the footer

// Init Scrollspy
$('body').scrollspy({ target: '#main-nav' }); //navbar items are highlighted as scrolling through the page

// Smooth Scrolling - I don't like how the regular href just jumps to the item
$("#main-nav a").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () { //control the time it takes to scroll (in milliseconds)

      window.location.hash = hash;
    });
  }
});