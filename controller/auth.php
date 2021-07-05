<?php
require_once('autoload.php');

$request_url = $_SERVER['HTTP_REFERER'];

if (strpos($request_url, 'login')) {
    $unique = $_POST['unique'];
    $password = $_POST['password'];
    if (User::authSecure($unique, $password)) {
        $user = User::get($unique);
        $_SESSION['userid'] = $user->getUserId();
        header('Location: ../home.php');
    } else {
        header('Location: ../login.php?unique=' . $unique);
    }
} else {
    /*
    $unique = Config::getUnique($request_url);
    if (!$unique) {
        
    }
    $userid = $_POST['userid'];
    $name = 'naotoge5（表示名）';
    //uniqueからアドレスを引っ張り出してくる
    $email = '10naotoge5.ykputi@gmail.com';
    $password = $_POST['password'];
    $user = new User($userid, $name, $email);
    if ($user->register($password)) {
        $_SESSION['userid'] = $userid;
        echo 'ユーザー登録完了';
    } else {
        echo 'ユーザー失敗';
    }*/
}
