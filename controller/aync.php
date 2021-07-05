<?php
require_once('autoload.php');

$func = $_GET['func'];
$unique = $_GET['unique'];
echo $func($unique);//可変関数

