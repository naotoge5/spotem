<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/public/bulma.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css">
    <link rel="stylesheet" href="assets/public/signup.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="assets/public/signup.js" defer></script>
    <title>新規登録</title>
</head>

<body>
    <div class="_is-centered">
        <h1 class="is-size-4 has-text-weight-bold has-text-success mb-6">アカウントを作成</h1>
        <form action="controller/auth.php" method="post">
            <div id="first">
                <div id="userid" class="field mb-5">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-medium is-rounded" type="text" name="userid" placeholder="ユーザーID">
                        <span class="icon is-small is-left">
                            <i class="fas fa-at"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas"></i>
                        </span>
                    </div>
                    <p class="help is-danger"></p>
                </div>
                <div id="name" class="field mb-5">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-medium is-rounded" type="text" name="name" placeholder="名前">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas"></i>
                        </span>
                    </div>
                </div>
                <input id="toSecond" class="input button is-rounded is-success next" type="button" value="次へ" disabled>
            </div>
            <div id="second" class="is-hidden">
                <div id="email" class="field mb-5">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-medium is-rounded" type="email" name="email" placeholder="メールアドレス">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas"></i>
                        </span>
                    </div>
                    <p class="help is-danger"></p>
                </div>
                <div id="password" class="field mb-5">
                    <div class="control has-icons-left">
                        <input class="input is-medium is-rounded" type="password" name="password" oncopy="return false" placeholder="パスワード（8文字以上の半角英数）">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </div>
                    <p class="help is-danger"></p>
                </div>
                <div id="password_check" class="field mb-5">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-medium is-rounded" type="password" name="password_check" oncopy="return false" placeholder="確認">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas"></i>
                        </span>
                    </div>
                    <p class="help is-danger"></p>
                </div>
                <input id="toThird" class="input button is-rounded is-success next" type="button" value="次へ" disabled>
            </div>
            <div id="third" class="is-hidden">
                <p class="help is-warning has-text-centered mb-5">メールアドレスに認証コードを送信しました<br>コードを入力してください</p>
                <div id="code" class="field mb-5">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-medium is-rounded" type="num" name="code" placeholder="認証コード">
                        <span class="icon is-small is-left">
                            <i class="fas fa-key"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas"></i>
                        </span>
                    </div>
                    <p class="help is-danger"></p>
                </div>
                <input id="last" class="input button is-rounded is-success" type="button" value="登録する" disabled>
            </div>
        </form>
    </div>
</body>

</html>