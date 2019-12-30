/**
 * Date: 12/7/2019
 * Time: 05:07 PM
 */
"use strict";
(function(){

    /**
     * events
     */

    let headerContainer = $('.head-content-wrapper');
    let footerContainer = $('.footer-content-wrapper');

    headerContainer.load('header.html');

    // footerContainer.load('footer.html');

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        let user = {
            name    : $('#name').val(),
            lastName: $('#lastname').val(),
            email   : $('#email').val(),
            message : $('#message').val()
        };
        console.log(user);
    });

}());
