<?php
    $db = new PDO("mysql:host=localhost;dbname=efgh;charset=utf8","admin","1234");
    $frist_name = $_GET["frist_name"];
    $last_name = $_GET["last_name"];
    $phone = $_GET["phone"];
    $password = $_GET["password"];
    $db->query("INSERT INTO `tickes`(`frist_name`, `last_name`, `phone`, `password`) VALUES ('$frist_name','$last_name','$phone','$password')");

?>  