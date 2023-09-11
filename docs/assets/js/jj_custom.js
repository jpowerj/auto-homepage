// Add smooth scrolling on all links inside the navbar
$("#sideNav a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Closes responsive menu when a scroll trigger link is clicked
        $('.navbar-collapse').collapse('hide');

        // Store hash
        var hash = this.hash;
        window.location.hash = hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            //window.location.hash = hash;
            return;
        });

    } // End if

}); 
