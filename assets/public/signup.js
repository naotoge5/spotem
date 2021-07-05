$(function () {
    $("#first input[type='button']").click(function (e) {
        $("#first").addClass("is-hidden");
        $("#second").removeClass("is-hidden");
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
                    $("#userid p").text("特殊文字は使用できません - 例：@ / < - | ;");
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
                $("#signup .password_check div input[name='password_check']").removeClass("is-danger is-success");
                $("#signup .password_check p").text("");
                $("#signup .password_check div .is-right i").removeClass("fa-check");
                var password = $("#signup input[name='password']").val();
                var password_check = $("#signup input[name='password_check']").val();
                if (password.length != 0) {
                    if (passwordCheck(password)) {
                        $("#signup .password div input[name='password']").addClass("is-success");
                        $("#signup .password div .is-right i").addClass("fa-check");
                        passwordComparison(password, password_check);
                    } else {
                        $("#signup input[name='password']").addClass("is-danger");
                        $("#signup .password p").text("形式が正しくありません");
                    }
                }
            }
        }
    });/*
    $("#signup").change(function (e) {
        $("#signup ." + e.target.name + " div input[name='" + e.target.name + "']").removeClass("is-danger is-success");
        $("#signup ." + e.target.name + " p").text("");
        $("#signup ." + e.target.name + " div .is-right i").removeClass("fa-check");
        if (e.target.value != 0) {
            $("#signup ." + e.target.name + " div").addClass("is-loading");
            if (e.target.name == 'userid') {
                $("#signup .userid p").text("");
                var userid = e.target.value;
                if (userid.match(/[^A-Za-z0-9]+/)) {
                    $("#signup input[name='userid']").addClass("is-danger");
                    $("#signup .userid p").text("特殊文字は使用できません - 例：@ / < - | ;");
                } else {
                    find(e.target);
                }
            } else if (e.target.name == 'email') {
                $("#signup .email p").text("");
                var email = e.target.value;
                if (email.match(/.+@.+\..+/)) {
                    find(e.target);
                } else {
                    $("#signup input[name='email']").addClass("is-danger");
                    $("#signup .email p").text("形式が正しくありません");
                }
            } else if (e.target.name == 'password') {
                $("#signup .password_check div input[name='password_check']").removeClass("is-danger is-success");
                $("#signup .password_check p").text("");
                $("#signup .password_check div .is-right i").removeClass("fa-check");
                var password = $("#signup input[name='password']").val();
                var password_check = $("#signup input[name='password_check']").val();
                if (password.length != 0) {
                    if (passwordCheck(password)) {
                        $("#signup .password div input[name='password']").addClass("is-success");
                        $("#signup .password div .is-right i").addClass("fa-check");
                        passwordComparison(password, password_check);
                    } else {
                        $("#signup input[name='password']").addClass("is-danger");
                        $("#signup .password p").text("形式が正しくありません");
                    }
                }

            } else if (e.target.name == 'password_check') {
                var password = $("#signup input[name='password']").val();
                var password_check = $("#signup input[name='password_check']").val();
                if ($("#signup input[name='password']").hasClass("is-success")) {
                    passwordComparison(password, password_check);
                }
            } else {//name
                $("#signup input[name='name']").addClass("is-success");
                $("#signup .name div .is-right i").addClass("fa-check");
            }
            $("#signup ." + e.target.name + " div").removeClass("is-loading");
        }
        formCheck();
    });

    $('#signup input[type="button"]').click(function () {
        var form = $("#signup");
        var userid = $("#signup input[name='userid']").val();
        var name = $("#signup input[name='name']").val();
        var email = $("#signup input[name='email']").val();
        var password = $("#signup input[name='password']").val();
        var password_check = $("#signup input[name='password_check']").val();
        var emp = "";
        for (let index = 0; index < password.length; index++) {
            emp += "●";
        }
        var email = $("#signup input[name='email']").val();
        var flag = confirm("ユーザーID：" + userid + "\nユーザー名：" + name + "\nパスワード：" + emp + "\nメール：" + email + "\n\n上記のメールに登録完了のURLを送信します。\nよろしいですか？");
        if (flag) form.submit();
    });*/

    //functions
    function find(target) {
        var unique = target.value;
        if (unique.length != 0) {
            $.ajax({
                type: "GET",
                url: "controller/aync.php",
                data: { func: 'User::find', unique: unique }
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
                            if ($("input[name='email_check']").hasClass("is-success")) $("#second .next").prop('disabled', false);
                            break;
                    }
                }
            }).fail(function (data) {
                // 通信失敗時のコールバック処理
                alert("申し訳ございません。エラーが発生しました。\n時間を空けてもう一度お試しください。");
            });
        }
    }

    function passwordCheck(password) {
        if (password.length > 7 && password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
            return true;
        } else {
            return false;
        }
    }
    function passwordComparison(password, password_check) {
        if (password == password_check) {
            $("#signup input[name='password_check']").addClass("is-success");
            $("#signup .password_check div .is-right i").addClass("fa-check");
        } else if (password_check.length != 0) {
            $("#signup input[name='password_check']").addClass("is-danger");
            $("#signup .password_check p").text("パスワードが一致しません");
        }
    }

    function formCheck() {
        if ($("#signup input[name='userid']").hasClass("is-success") && $("#signup input[name='name']").hasClass("is-success") && $("#signup input[name='email']").hasClass("is-success") && $("#signup input[name='password']").hasClass("is-success") && $("#signup input[name='password_check']").hasClass("is-success")) {
            $("#signup .button").prop('disabled', false);
        } else {
            $("#signup .button").prop('disabled', true);
        }
    }
});