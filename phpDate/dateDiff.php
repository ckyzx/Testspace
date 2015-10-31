<?php

// 给当前日期添加 1天 1小时后，获取时间差。
$nowDate = new DateTime();
$tomorrow = new DateTime($nowDate->format('Y-m-d H:i:s'));
$interval = new DateInterval('P1DPT1H');
$tomorrow->add($interval);
$interval = $nowDate->diff($tomorrow);
var_dump($nowDate);echo '<br />';
var_dump($tomorrow);echo '<br />';
echo $interval->format('%R%a days');
echo '<br />';

// 对比两个固定日期的时间差
$datetime1 = new DateTime('2009-10-11');
$datetime2 = new DateTime('2009-10-13');
$interval = $datetime1->diff($datetime2);
echo $interval->format('%R%a days');
?>