$(function () {

    $('#top input[name="signup"]').click(function () {
        $('#signup_form.modal').addClass("is-active");
    });
    $('#signup_form.modal .modal-background').click(function (e) {
        $('#signup_form.modal').removeClass('is-active');
    });
    $('#signup_form.modal .delete').click(function (e) {
        $('#signup_form.modal').removeClass('is-active');
    });
    $('#top input[name="login"]').click(function () {
        $('#login_form.modal').addClass("is-active");
    });
    $('#login_form.modal .modal-background').click(function (e) {
        $('#login_form.modal').removeClass('is-active');
    });
    $('#login_form.modal .delete').click(function (e) {

        $('#login_form.modal').removeClass('is-active');
    });

    $.ajax({
        type: "GET",
        url: "../",
        data: "data",
        dataType: "dataType",
        success: function (response) {

        }
    });
});