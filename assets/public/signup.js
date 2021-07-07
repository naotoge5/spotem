auth_code = 0;
$(function () {
    $("#last").click(function(){
        $("form").submit();
    });
    $(".next").click(function (e) {

        if (e.target.id == "toSecond") {
            $("#first").addClass("is-hidden");
            $("#second").removeClass("is-hidden");
        } else {
            sendMail($("input[name='email']").val());
            $("#second").addClass("is-hidden");
            $("#third").removeClass("is-hidden");
        }
    });
    $("#first").change(function (e) {
        $("input[name='" + e.target.name + "']").removeClass("is-danger is-success");
        $("#" + e.target.name + " p").text("");
        $("#" + e.target.name + " .is-right i").removeClass("fa-check");
        $("#first .next").prop('disabled', true);
        if (e.target.value != 0) {
            if (e.target.name == 'userid') {
                var userid = $("input[name='userid']").val();
                if (userid.match(/[^A-Za-z0-9]+/)) {
                    $("input[name='userid']").addClass("is-danger");
                    $("#userid p").text("特殊文字不可");
                } else {
                    find(e.target);
                }
            } else {
                $("input[name='name']").addClass("is-success");
                $("#name .is-right i").addClass("fa-check");
                if ($("input[name='userid']").hasClass("is-success")) $("#first .next").prop('disabled', false);
            }
        }
    });
    $("#second").change(function (e) {
        $("input[name='" + e.target.name + "']").removeClass("is-danger is-success");
        $("#" + e.target.name + " p").text("");
        $("#" + e.target.name + " .is-right i").removeClass("fa-check");
        $("#second .next").prop('disabled', true);
        if (e.target.value != 0) {
            if (e.target.name == 'email') {
                var email = $("input[name='email']").val();
                if (email.match(/.+@.+\..+/)) {
                    find(e.target);
                } else {
                    $("input[name='email']").addClass("is-danger");
                    $("#email p").text("形式が正しくありません");
                }
            } else if (e.target.name == 'password') {
                $("input[name='password_check']").removeClass("is-danger is-success");
                $("#password_check p").text("");
                $("password_check .is-right i").removeClass("fa-check");
                var password = $("input[name='password']").val();
                var password_check = $("input[name='password_check']").val();
                if (passwordCheck(password)) {
                    $("input[name='password']").addClass("is-success");
                    $("#password .is-right i").addClass("fa-check");
                    if (password == password_check) {
                        $("input[name='password_check']").addClass("is-success");
                        $("#password_check .is-right i").addClass("fa-check");
                        if ($("input[name='email']").hasClass("is-success")) $("#second .next").prop('disabled', false);
                    } else if (password_check.length > 7) {
                        $("input[name='password_check']").addClass("is-danger");
                        $("#password_check p").text("パスワードが一致しません");
                    }
                } else {
                    $("input[name='password']").addClass("is-danger");
                    $("#password p").text("形式が正しくありません");
                }

            } else {
                var password = $("input[name='password']").val();
                var password_check = $("input[name='password_check']").val();
                if (password_check.length > 7 && $("input[name='password']").hasClass("is-success")) {
                    if (password == password_check) {
                        $("input[name='password_check']").addClass("is-success");
                        $("#password_check .is-right i").addClass("fa-check");
                        if ($("input[name='email']").hasClass("is-success")) $("#second .next").prop('disabled', false);
                    } else if (password_check.length > 7) {
                        $("input[name='password_check']").addClass("is-danger");
                        $("#password_check p").text("パスワードが一致しません");
                    }
                }
            }

        }
    });
    $("#third").change(function () {
        $("input[name='code']").removeClass("is-danger is-success");
        $("#code p").text("");
        $("#code .is-right i").removeClass("fa-check");
        var code = $("input[name='code']").val();
        if (code.length > 0) {
            if (code == auth_code) {
                $("input[name='code']").addClass("is-success");
                $("#code .is-right i").addClass("fa-check");
                $("input[name='code']").prop('disabled', true);
                $("#last").prop('disabled', false);
            } else {
                $("input[name='code']").addClass("is-danger");
                $("#code p").text("認証コードが正しくありません");
            }
        }
    });

    //functions
    function find(target) {
        var unique = target.value;
        $.ajax({
            type: "POST",
            url: "controller/aync.php",
            data: { func: 'User::find', value: unique }
        }).done(function (data) {
            // 通信成功時のコールバック処理
            if (data) {
                $("#" + target.name + " input[name='" + target.name + "']").addClass("is-danger");
                $("#" + target.name + " p").text("既に使用されています。");
            } else {//return 0 ユーザー使用可
                $("#" + target.name + " input[name='" + target.name + "']").addClass("is-success");
                $("#" + target.name + " .is-right i").addClass("fa-check");
                switch (target.name) {
                    case 'userid':
                        if ($("input[name='name']").hasClass("is-success")) $("#first .next").prop('disabled', false);
                        break;
                    case 'email':
                        if ($("input[name='password_check']").hasClass("is-success")) $("#second .next").prop('disabled', false);
                        break;
                }
            }
        }).fail(function (data) {
            // 通信失敗時のコールバック処理
            alert("申し訳ございません。エラーが発生しました。\n時間を空けてもう一度お試しください。");
        });
    }
    function sendMail(email) {
        $.ajax({
            type: "POST",
            url: "controller/aync.php",
            data: { func: 'sendForAuth', value: email }
        }).done(function (data) {
            // 通信成功時のコールバック処理
            auth_code = data;
        }).fail(function (data) {
            // 通信失敗時のコールバック処理
            alert("申し訳ございません。エラーが発生しました。\n時間を空けてもう一度お試しください。");
        });
    }

    function passwordCheck(password) {
        if (password.length > 7 && password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
            return true;
        } else {
            return false;
        }
    }
});