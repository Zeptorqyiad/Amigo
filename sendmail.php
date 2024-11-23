<?php

session_start();

$ip = $_SERVER['REMOTE_ADDR'];
$hour = date('H');

if (!isset($_SESSION['last_request']) || $_SESSION['last_request_ip'] != $ip || $_SESSION['last_hour'] != $hour) {
	$_SESSION['last_request'] = time();
	$_SESSION['last_request_ip'] = $ip;
	$_SESSION['last_hour'] = $hour;
} else {
	exit('Можно отправлять только одну заявку в час');
}

ini_set('display_errors', value: 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST['name'];
	$telephone = $_POST['telephone'];
	$message = $_POST['message'];

	$to = "";
	$subject = "Запрос с формы на сайте";
	$body = "Имя: $name\nТелефон: $telephone\nСообщение: $message";

	$headers = "From: \r\n";
	$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

	if (mail($to, $subject, $body, $headers)) {
		echo "success";
	} else {
		echo "error";
	}
}
