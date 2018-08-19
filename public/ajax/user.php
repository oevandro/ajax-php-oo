<?php 

require "../../config.php";

use app\models\User;

sleep(3);

$user = new User;

//echo json_encode($user->all()); 

$id = $_GET['id'];

echo json_encode($user->find('id',$id)); 