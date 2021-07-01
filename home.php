<?php
if (isset($_GET['userid'])) {
    $userid = $_GET['userid'];
    echo $userid;
    echo $_SERVER['REQUEST_URI'];
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>home.php(timeline)</h1>
    <a href="index.html">index</a>
</body>

</html>