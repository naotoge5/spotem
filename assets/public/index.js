$(function () {
    /*
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
    
        $('#login_form .button').click(function () {
            var userid = $('#login_form input[name="userid"]').val();
            var password = $('#login_form input[name="password"]').val();
            $.ajax({
                type: "POST",
                url: "controller/aync.php",
                data: { userid: userid, password: password }
            }).done(function (data) {
                // 通信成功時のコールバック処理
                console.log(data);
            }).fail(function (data) {
                // 通信失敗時のコールバック処理
                console.log('ds');
            }).always(function (data) {
                // 常に実行する処理
            });
    
        });*/
    /*
    $('#login_form .button').click(function () {
        var userid = $('#login_form input[name="userid"]').val();
        var password = $('#login_form input[name="password"]').val();
        $.ajax({
            type: "POST",
            url: "controller/aync.php",
            data: { userid: userid, password: password }
        }).done(function (data) {
            // 通信成功時のコールバック処理
            console.log(data);
        }).fail(function (data) {
            // 通信失敗時のコールバック処理
            console.log('ds');
        }).always(function (data) {
            // 常に実行する処理
        });
 
    });*/
    $('#signup .button').click(function (e) { 
        var userid = $('#signup input[name="userid"]').val();
        $.ajax({
            type: "GET",
            url: "controller/aync.php",
            data: { func: 'User::find', userid: userid }
        }).done(function (data) {
            // 通信成功時のコールバック処理
            alert(data);
        }).fail(function (data) {
            // 通信失敗時のコールバック処理
            alert('ds');
        }).always(function (data) {
            // 常に実行する処理
        });
    });
});