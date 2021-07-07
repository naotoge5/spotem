<?php session_start(); ?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/public/bulma.css">
    <link rel="stylesheet" href="assets/public/auth.css">
    <title>Document</title>
</head>

<body class="has-background-black">
    <?php echo $_SESSION['alert']; ?>
    <div class="_is-centered">
        <h1 class="is-size-4 has-text-weight-bold has-text-success mb-6">Spotemにログイン</h1>
        <form action="controller/auth.php" method="post">
            <div class="field mb-5">
                <div class="control has-icons-left">
                    <input class="input is-medium is-rounded" type="text" name="unique" placeholder="ユーザーIDまたはメール" value="<?php if (isset($_GET["unique"])) echo $_GET["unique"] ?>" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-at"></i>
                    </span>
                </div>
            </div>
            <div class="field mb-5">
                <div class="control has-icons-left">
                    <input class="input is-medium is-rounded" type="password" name="password" placeholder="パスワード（8文字以上の半角英数）" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </div>
            </div>
            <button class="input button is-rounded is-success" type="submit">ログイン</button>
        </form>
    </div>
</body>

</html>