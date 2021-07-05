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
 
    });
    $('#signup input[type="button"]').click(function () {
        var form = $('#signup');
        var userid = $('#signup input[name="userid"]').val();
        var password = $("#signup input[name='password']").val();
        var password_check = $("#signup input[name='password_check']").val();
        if (password == password_check) {
            $.ajax({
                type: "GET",
                url: "controller/aync.php",
                data: { func: 'User::find', userid: userid }
            }).done(function (data) {
                // 通信成功時のコールバック処理
                if (data) {
                    alert("そのユーザーIDは既に使用されています。\n別のユーザーIDを選択してください。");
                } else {
                    var emp = "";
                    for (let index = 0; index < password.length; index++) {
                        emp += "●";
                    }
                    var email = $("#signup input[name='email']").val();
                    var flag = confirm("ユーザーID：" + userid + "\nパスワード：" + emp + "\nメール：" + email + "\n\n上記のメールに登録完了のURLを送信します。\nよろしいですか？");
                    if (flag) form.submit();
                }
            }).fail(function (data) {
                // 通信失敗時のコールバック処理
                alert("申し訳ございません。エラーが発生しました。\n時間を空けてもう一度お試しください。");
            }).always(function (data) {
                // 常に実行する処理
            });
        } else {
            alert("パスワードが一致しません。");
        }
    });*/
    $("#signup input[name='userid']").change(function (e) {
        var userid = $("#signup input[name='userid']").val();
        $("#signup .userid div").addClass("is-loading");
        $.ajax({
            type: "GET",
            url: "controller/aync.php",
            data: { func: 'User::find', userid: userid }
        }).done(function (data) {
            // 通信成功時のコールバック処理
            $("#signup .userid div").removeClass("is-loading");
            if (data) {
                $("#signup .userid div input[name='userid']").addClass("is-danger");
            } else {
                $("#signup .userid div i").addClass("fa-check");
            }
            
        }).fail(function (data) {
            // 通信失敗時のコールバック処理
            alert("申し訳ございません。エラーが発生しました。\n時間を空けてもう一度お試しください。");
        }).always(function (data) {
            // 常に実行する処理
        });
    });
});