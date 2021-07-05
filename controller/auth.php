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
    
}
