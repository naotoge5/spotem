<?php
require_once('autoload.php');
/*
$userid = $_POST['userid'];
$password = $_POST['password'];

$user = User::auth($userid, $password);
if ($user) {
    $_SESSION['userid'] = $user['userid'];
    ;
} else {
    echo 0;
}*/

$user = new User('sakura','桜ももこ');
echo $user->register('saku02');
echo $user->getPassword();
$yoshi = User::get('st081960');
echo $yoshi->getPassword();
echo $yoshi->getName();
