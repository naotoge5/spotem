<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/public/bulma.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css">
    <link rel="stylesheet" href="assets/public/index.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="assets/public/index.js" defer></script>
    <title>新規登録</title>
</head>

<body>
    <div class="container">
        <form id="signup" action="controller/auth.php" method="post">
            <div class="field userid">
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" name="userid" placeholder="ユーザーID">
                    <span class="icon is-small is-left">
                        <i class="fas fa-at"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas"></i>
                    </span>
                </div>
                <p class="help is-success">This username is available</p>
            </div>
            <div class="field">
                <label class="label">ユーザー名</label>
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" name="name" placeholder="Name">
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" name="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" name="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="password" name="password_check" placeholder="PasswordCheck">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <input class="input button" type="button" value="新規登録">
        </form>
    </div>
</body>

</html>