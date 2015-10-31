<?php

session_start();

$startTime = microtime(true);

$con = mysql_connect('112.74.114.162', 'lsamui', 'Tglsamui8989');
mysql_select_db('test');

//header("Content-Type: text/html; charset=utf-8");

$result = mysql_query('SELECT * FROM wxh_post');

while($row = mysql_fetch_array($result)){

    echo $row['title'].'<br />';
}

$endTime = microtime(true);

$timeSpan = $endTime - $startTime;

echo $timeSpan;