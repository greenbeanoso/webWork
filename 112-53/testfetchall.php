<?php
    $db = new PDO("mysql:host=localhost;dbname=efgh;charset=utf8","root","");

    $row=$db->query("SELECT*FROM `test`")->fetchAll();

    echo(json_encode($row));
?>
