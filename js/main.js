/**
 * Date: 12/7/2019
 * Time: 05:07 PM
 */
"use strict";
(function(){

    /**
     * events
     */


    //Create on method for submit button in contact form
    $('#contact-form').on('submit', function(event) {
        //the default action of the event will not be triggered. In this case will not refresh page, before the function is executed
        event.preventDefault();
        //Create object with the same fields as in form, take thair value and places in appropriate properties
        let user = {
            name    : $('#name').val(),
            lastName: $('#lastname').val(),
            email   : $('#email').val(),
            message : $('#message').val()
        };
        console.log(user);
    });

}());
