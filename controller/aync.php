<?php
require_once('autoload.php');

$func = $_GET['func'];
$userid = $_GET['userid'];
echo $func($userid);//可変関数

function sample($userid) {
    return $userid;
}
