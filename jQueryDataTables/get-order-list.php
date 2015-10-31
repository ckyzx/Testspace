<?php

$draw=intval($_GET['draw']);
$start = isset($_GET['start'])?$_GET['start']:0;
$length = isset($_GET['length'])?$_GET['length']:-1;
$searchValue = $_GET['search']['value'];

$recordsTotal = 0;
$recordsFiltered = 0;

$data = array();

$connect = mysql_connect('112.74.114.162', 'lsamui', 'Tglsamui8989');
mysql_select_db('test');

// 获取查询条件
$whereSql = '';
$i = 0;
while($columnName = $_GET['columns'][$i]['name']){

    if(false === strpos($columnName, ';')){

        $whereSql .= $columnName." LIKE '%$searchValue%' OR ";
    }else{

        $tmpColumnNames = explode(';', $columnName);
        $i1 = 0;
        while($i1 < count($tmpColumnNames)){

            $tmpColumnName = $tmpColumnNames[$i1];
            $whereSql .= $tmpColumnName." LIKE '%$searchValue%' OR ";
            $i1 += 1;
        }

    }
    $i += 1;
}
if($whereSql != ''){

    $whereSql = substr($whereSql, 0, strlen($whereSql) - 3);
    $whereSql = "WHERE $whereSql";
}

// 获取排序条件
// 当 DataTables 的 ordering选项为 false 时，请求中将不存在 order 参数。
$orderSql = '';
if(isset($_GET['order'])){

    $order_column = $_GET['order'][0]['column'];
    $order_dir = $_GET['order'][0]['dir'];
    $orderFieldName = $_GET['columns'][$order_column]['name'];
    if(strpos($orderFieldName, ';')){

        $tmpColumnNames = explode(';', $orderFieldName);
        $orderFieldName = $tmpColumnNames[0];
    }
    $orderSql = "ORDER BY $orderFieldName $order_dir";
}

// 获取查询区间
$limitSql = $length == -1 ? '' : "LIMIT $start, $length";

$sql = "SELECT COUNT(id) FROM wxh_order $whereSql";
$result = mysql_query($sql);
$row = mysql_fetch_array($result);
$recordsTotal = $row[0];
$recordsFiltered = $recordsTotal;

$sql = "SELECT * FROM wxh_order $whereSql $orderSql $limitSql";
//var_dump($sql);exit;
$result = mysql_query($sql);

while($row = mysql_fetch_array($result)){

    // 获取表格需要的数据
    $tmpDataRow = array();
    $i = 0;
    while($columnName = $_GET['columns'][$i]['name']){

        if(false === strpos($columnName, ';')){

            array_push($tmpDataRow, $row[$columnName]);
        }else{

            $tmpDataRowText = '';
            $tmpColumnNames = explode(';', $columnName);
            $i1 = 0;
            while($i1 < count($tmpColumnNames)){

                $tmpColumnName = $tmpColumnNames[$i1];
                $tmpDataRowText .= $row[$tmpColumnName].'<br />';
                $i1 += 1;
            }

            array_push($tmpDataRow, $tmpDataRowText);
        }

        $i += 1;
    }
    array_push($data, $tmpDataRow);
}

$json = array(
    'draw'=>$draw,
    'recordsTotal'=>$recordsTotal,
    'recordsFiltered'=>$recordsFiltered,
    'data'=>$data
);

header("Content-Type: text/html; charset=gb2312");

echo json_encode1($json);

function json_encode1($ary) {

    return urldecode(json_encode(url_encode($ary)));
}

function url_encode($ary) {

    if(is_array($ary))
    {
        foreach($ary as $key=>$value) {

            $ary[urlencode($key)] = url_encode($value);
        }
    } else {

        $ary = urlencode($ary);
    }

    return $ary;
}
?>