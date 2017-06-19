<?php
session_start();
$username = $_POST["username"];
$password = $_POST["password"];
if($username == "hein" && $password == "1111"){
    $_SESSION['username'] = $username;
    header ("location: index.php");
}else{
    header ("location: loginError.php");
}  
?>