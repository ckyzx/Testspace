<?php

// 给当前日期添加 1天
$nowDate = new DateTime();
$interval = new DateInterval('P1D');
$tomorrow = $nowDate->add($interval);
var_dump($tomorrow);
echo '<br />--------------------------------------<br />';

// 给当前时间添加 10分钟
$nowDate = new DateTime();
$interval = new DateInterval('PT10M');
$tomorrow = new DateTime($nowDate->format('Y-m-d H:i:s'));
$tomorrow->add($interval);
var_dump($nowDate);echo '<br />';
var_dump($tomorrow->format('H:i'));echo '<br />';
var_dump($tomorrow);
?>