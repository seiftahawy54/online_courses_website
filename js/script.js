/* global console, document, window */


/* Global Variables */

var user_name = document.getElementById("userName"),
    user_password = document.getElementById("userPassword"),
    user_re_pass = document. getElementById("userRePassword"),
    submit_btn = document.getElementById("submitBtn"),
    disAttr = document.createAttribute("disabled");



/* Validation Function */

function validation() {

    "use strict";

    if (user_name.value != "" && user_password.value != "") {

        if (user_re_pass.value != user_password.value) {

            alert("The Two Passwords Aren't The Same !");

            return false;

        } else {

            return true;

        }

    } else {

        alert("Sorry, The Input Fields Are Empty!");

        return false;

    }

};
