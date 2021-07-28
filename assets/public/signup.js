import { Mail, User } from './modules.js';

let Code = 0;

let Password = {
    first: '',
    second: ''
}

const Form = {
    /**
     * 使用可能時のフォームの装飾
     * @param {string} tag_name 対象のid or class名
     */
    success: function (tag_name) {
        $("input[name='" + tag_name + "']").addClass("is-success");
        $("#" + tag_name + " .is-right i").addClass("fa-check");
    },
    /**
     * 使用不可時のフォームの装飾
     * @param {string} tag_name 対象のid or class名
     * @param {string} message エラーメッセージ
     */
    error: function (tag_name, message) {
        $("input[name='" + tag_name + "']").addClass("is-danger");
        $("#" + tag_name + " .is-danger").text(message);
    },
    /**
     * フォームの装飾を削除
     * @param {string} tag_name 対象のid or class名
     */
    reset: function (tag_name) {
        $("input[name='" + tag_name + "']").removeClass("is-danger is-success");
        $("#" + tag_name + " .is-danger").text("");
        $("#" + tag_name + " .is-right i").removeClass("fa-check");
    }
}

$(function () {
    $("._next").click(function () {
        if (!$("#__one").hasClass("is-hidden")) {
            $("#__one, #__two, ._back").toggleClass("is-hidden");
        } else if (!$("#__two").hasClass("is-hidden")) {
            $("#__two, #__three").toggleClass("is-hidden");
            var deferred = Mail.sendAuthCode($("input[name='email']").val());
            deferred.done(function (data) {
                Code = data;
            });
        } else {
            $("form").submit();
        }
    });

    $("._back").click(function () {
        if (!$("#__two").hasClass("is-hidden")) {
            $("#__one, #__two, ._back").toggleClass("is-hidden");
        } else {
            Form.reset('code');
            $("input[name='code']").val("");
            $("#__three ._next").prop('disabled', true);
            $("#__two, #__three").toggleClass("is-hidden");
        }
    });

    $("._back").hover(function () {
        // over
        $("._back").toggleClass("has-text-success has-text-success-dark");
    }, function () {
        // out
        $("._back").toggleClass("has-text-success has-text-success-dark");
    }
    );
    $("#__one").change(function (e) {
        var name = e.target.name;
        var value = e.target.value;
        Form.reset(name);
        $("#__one ._next").prop('disabled', true);
        if (value == 0) return;
        if (name == 'userid') {
            if (value.match(/[^A-Za-z0-9]+/)) {
                $("input[name='userid']").addClass("is-danger");
                $("#userid .is-danger").text("特殊文字不可");
            } else {
                var deferred = User.find(value);
                //Deferredオブジェクトを監視し、完了の通知がきたらdone内を実行
                deferred.done(function (data) {
                    if (data) {
                        Form.error(name, '既に使用されています。');
                    } else {
                        Form.success(name);
                        if ($("input[name='name']").hasClass("is-success")) $("#__one ._next").prop('disabled', false);
                    }
                });
            }
        } else {
            Form.success(name);
            if ($("input[name='userid']").hasClass("is-success")) $("#__one ._next").prop('disabled', false);
        }
    });

    $("#__two").change(function (e) {
        var name = e.target.name;
        var value = e.target.value;
        Form.reset(name);
        $("#__two ._next").prop('disabled', true);
        if (value != 0) {
            switch (name) {
                case 'email':
                    if (Mail.check(value)) {
                        var deferred = User.find(value);
                        deferred.done(function (data) {
                            if (data) {
                                Form.error(name, '既に使用されています。');
                            } else {
                                Form.success(name, true);
                                if ($("input[name='password'], input[name='password_check']").hasClass("is-success")) $("#__one ._next").prop('disabled', false);
                            }
                        });
                    } else {
                        Form.error(name, '形式が正しくありません。');
                    }
                    break;
                case 'password':
                    Form.reset('password_check');
                    Password.first = value;
                    if (User.checkPassword(Password.first)) {
                        Form.success(name);
                    } else {
                        $("input[name='password']").addClass("is-danger");
                        $("#password .is-danger").text("形式が正しくありません");
                    }
                case 'password_check':
                    Password.second = $("input[name='password_check']").val();
                    if ($("input[name='password']").hasClass("is-success") && Password.second != 0) {
                        if (Password.first == Password.second) {
                            Form.success('password_check');
                            if ($("input[name='email']").hasClass("is-success")) $("#__two ._next").prop('disabled', false);
                        } else {
                            Form.error('password_check', 'パスワードが一致しません');
                        }
                    }
                    break;
            }
        }
    });
    $("#__three").change(function () {
        Form.reset('code');
        $("#__three ._next").prop('disabled', true);
        var code = $("input[name='code']").val();
        if (code.length > 0) {
            if (code == Code) {
                Form.success('code');
                $("#__three ._next").prop('disabled', false);
            } else {
                Form.error('code', '認証コードが正しくありません');
            }
        }
    });
});