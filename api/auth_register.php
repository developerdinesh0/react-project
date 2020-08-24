<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
include('include/config.php');

$all_users = mysqli_query($conn, " SELECT * FROM `users` ");
$all_users = key_to_array_id(fetch_rows($all_users), 'email');


$input = file_get_contents("php://input");
$response = json_decode($input, true);


if(isset($response['full_name']) && isset($response['email']) && $response['password']){
	if(isset($all_users[$response['email']])){
		echo json_encode(array(
			'status' => 'error',
			'message' => 'User already register. Please try with another email.'
		)); die();
	}else{	
		$name = $response['full_name'];
		$email = $response['email'];
		$password = $response['password'];
		$sql = " INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES (NULL, '$name', '$email', '$password', '', '".date('Y-m-d H:i:s')."',CURRENT_TIMESTAMP);";
		mysqli_query($conn, $sql);
		
		echo json_encode(array(
			'status' => 'success',
			'message' => 'User register successfully'
		)); die();
	}
}
