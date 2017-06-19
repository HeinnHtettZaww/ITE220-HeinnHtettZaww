<?php
session_start();
?>


<link rel="stylesheet" type="text/css" href="css/bootstrap.css">


<div class="container">
    <div class="row">
        <div class="col-md-12">
        <h1 class="text-center">Stamford Network</h1></div></div>
   
<div class="row">
    <div class="col-md-9">
        <input type="text" placeholder="What's on your mind?" class="form-control">
         <button class="btn btn-block">Post</button>
    </div>
    
    <div class="col-md-3">
        <h3>Hello, <?php echo $_SESSION['username']; ?></h3>
        <form action = "login.php">
        <button class="btn btn-info btn-block">Logout</button></form></div></div>
    </div>
