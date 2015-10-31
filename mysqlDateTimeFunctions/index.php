<?php
/**
 * Created by PhpStorm.
 * User: Cheng
 * Date: 15-8-24
 * Time: 上午9:03
 */

$connect = mysql_connect('localhost', 'root', 'root');
//var_dump($connect);exit;

$result = mysql_query('SELECT DATE(NOW());');
$row = mysql_fetch_array($result);
echo '<div style="float:left;width:180px;">DATE(date):</div><div>'.$row[0].'</div>';

$result = mysql_query('SELECT TIME(NOW());');
$row = mysql_fetch_array($result);
echo '<div style="float:left;width:180px;">TIME(date):</div><div>'.$row[0].'</div>';