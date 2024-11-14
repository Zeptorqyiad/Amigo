<?php

session_start();

$ip = $_SERVER['REMOTE_ADDR'];
$hour = date('H');

if (!isset($_SESSION['last_request']) || $_SESSION['last_request_ip'] != $ip || $_SESSION['last_hour'] != $hour) {
	// Разрешаем отправку заявки
	$_SESSION['last_request'] = time();
	$_SESSION['last_request_ip'] = $ip;
	$_SESSION['last_hour'] = $hour;
} else {
	// Заявка была уже отправлена в этот час
	exit('Можно отправлять только одну заявку в час');
}

ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Получаем данные из формы
	$name = $_POST['name'];
	$telephone = $_POST['telephone'];
	$message = $_POST['message'];

	// Настраиваем получателя письма
	$to = "";  // Укажите ваш реальный email
	$subject = "Запрос с формы на сайте";
	$body = "Имя: $name\nТелефон: $telephone\nСообщение: $message";

	// Указываем заголовки письма
	$headers = "From: \r\n";
	$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

	// Отправляем письмо
	if (mail($to, $subject, $body, $headers)) {
		echo "success";  // Возвращаем 'success' в случае успешной отправки
	} else {
		echo "error";  // Возвращаем 'error' в случае ошибки
	}
}
