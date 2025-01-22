<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #list {
            flex: content
        }

        #list div span {
            margin-left: 10px;
        }
    </style>
</head>

<body>
    <form action="test.php" method="post">
        <input name="first_name">
        <input name="last_name">
        <input name="phone">
        <input name="password">
        <input type="submit">
        <input type="reset">
    </form>
    <br>
    <h1>2</h1>
    <div>
        <input type="text" id="fristName">
        <input type="text" id="lastName">
        <input type="text" id="phone">
        <input type="text" id="password">
        <input type="button" value="submit" id="sub">
    </div>
    <h1>2</h1>
    <div id="list">
        <div><span>id</span><span>fristName</span><span>last_name</span><span>phone</span><span>password</span></div>
        <?php
            $db = new PDO("mysql:host=localhost;dbname=abcd;charset=utf8","root","");

            $row=$db->query("SELECT*FROM `tickes`")->fetchAll();

            for($i=0;$i<count($row);$i=$i+1){
                ?><div><span><?= $row[$i]["id"] ?></span><span><?= $row[$i]["frist_name"] ?></span><span>last_name</span><span>phone</span><span>password</span></div><?php
            }
        ?>
    </div>
    <script src="test.js"></script>
</body>

</html>