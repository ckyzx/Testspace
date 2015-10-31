<?php

$str = '{"appid":"123456"}';

$json = json_decode($str, true);

var_dump($json);

echo '<br />';

$str1 = '{\'appid\':\'123456\'}';

echo $str1 . '<br />';

$json1 = json_decode($str1, true);

var_dump($json1);

?>