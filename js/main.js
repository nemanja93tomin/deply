/**
 * Date: 12/7/2019
 * Time: 05:07 PM
 */
"use strict";
(function(){

    /**
     * events
     */

    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');

    // footerContainer.load('footer.html');

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        let user = {
            name    : document.getElementById('name').value,
            lastName: $('#lastname').value,
            email   : $('#email').value,
            message : $('#message').value
        };
        console.log(user);
    });

}());
