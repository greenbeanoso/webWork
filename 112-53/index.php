<?php
    $db = new PDO("mysql:host=localhost;dbname=abcd;charset=utf8","root","");

    $first_name=$_POST["first_name"];
    $last_name=$_POST["last_name"];
    $phone=$_POST["phone"];
    $password=$_POST["password"];

    $db->query("INSERT INTO `tickes`( `frist_name`, `last_name`, `phone`, `password`) VALUES ('$first_name','$last_name','$phone','$password')");

    header("location: home.html");
?>