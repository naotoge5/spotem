<?php
spl_autoload_register("classLoad");
function classLoad($class)
{
    require "../model/" . $class . ".php";
}