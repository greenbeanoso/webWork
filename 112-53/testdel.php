<?php
    $db = new PDO("mysql:host=localhost;dbname=efgh;charset=utf8","root","");
    $id=$_GET["id"];
    $db->query("DELETE FROM `test` WHERE `id`='$id'")
?>