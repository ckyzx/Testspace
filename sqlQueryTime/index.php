<?php

session_start();

$startTime = microtime(true);

$con = mysql_connect('119.146.130.247', 'mzwb', 'kgdnkuyq');
mysql_select_db('pms');

header("Content-Type: text/html; charset=utf-8");

//$result = mysql_query('SELECT * FROM hotel');

/*while($row = mysql_fetch_array($result)){

    echo $row['NAME'].'<br />';
}*/

$memberNumOrMobile = '15219701806';
$sqlGetMember = <<<STR
            SELECT UID, UNAME, TEL
            FROM `user`
            WHERE
                (UID = '$memberNumOrMobile'
                OR TEL = '$memberNumOrMobile' )
                AND uid NOT LIKE 'H%'
            LIMIT 0,1
STR;
$result = mysql_query($sqlGetMember);

while($row = mysql_fetch_array($result)){

    var_dump($row);
    echo '<br />';
}


$endTime = microtime(true);

$timeSpan = $endTime - $startTime;

echo 'TimeSpan:'.$timeSpan.'s';

?>