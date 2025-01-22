<?php
    $db = new PDO("mysql:host=localhost;dbname=efgh;charset=utf8","root","");
    $id=$_GET["id"];
    $frist_name = $_GET["frist_name"];
    $last_name = $_GET["last_name"];
    $phone = $_GET["phone"];
    $password = $_GET["password"];
    $db->query("UPDATE `test` SET `frist_name`='$frist_name',`last_name`='$last_name',`phone`='$phone',`password`='$password' WHERE `id`='$id'")
    
?>