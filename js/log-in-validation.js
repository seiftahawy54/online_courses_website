/* global console, document, window */

/* Global Variables */

var log_user_name = document.getElementById('logUserName'),
    log_user_password = document.getElementById('logPassword'),
    log_Btn = document.getElementById('logBtn');


/* Validation Function */

function validation_log() {


    if (log_user_name.value == "Seif" && log_user_password.value == "123456") {

        alert("Welcome In MR." + log_user_name.value + "..!");

        return true;

    } else {

        alert("Sorry MR." + log_user_name.value + " You Aren't Allowed..!");

        return false;
    }

}
