<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/public/bulma.css">
    <title>Document</title>
</head>

<body>
    <form action="controller/auth.php" method="post">
        <div class="control my-4">
            <label class="label">ユーザーIDまたはメールアドレス</label>
            <input class="input is-focused" type="text" name="unique" placeholder="ユーザーIDまたはメールアドレス" value=<?php if (isset($_GET["unique"])) echo $_GET["unique"] ?>>
        </div>
        <div class="control my-4">
            <label class="label">パスワード</label>
            <input class="input is-focused" type="password" name="password" placeholder="パスワード">
        </div>
        <input class="input button is-rounded is-primary" type="submit" value="ログイン">
    </form>
</body>

</html>