<?php
require_once('classes/phpmailer/PHPMailerAutoload.php');

$telefono = $_POST['llamada'];



$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';
$mail->CharSet = 'UTF-8';
//$mail->SMTPDebug = 2; // Enable verbose debug output
$mail->isSMTP(); // Set mailer to use SMTP
$mail->Host = 'smtp-mail.outlook.com'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = "noreply@loga.cl";
$mail->Password = "C=3kb%Ca";
$mail->SMTPSecure = 'tls'; // Enable SSL encryption, TLS also accepted with port 465
$mail->Port = 587; // TCP port to connect to 
$mail->setFrom('noreply@loga.cl', 'Click To Call - Aires del Sur');
$mail->addAddress('javieraguerra@loga.cl');
$mail->addAddress('dvilches@loga.cl');
$mail->addAddress('saguayo@loga.cl');
$mail->addAddress('airesdelsur@loga-cl-logaservicios.odoo.com');
//$mail->addAddress('dcaldera@grupobyl.cl');
// $mail->addReplyTo($email, $nombre);
$mail->isHTML(true);   // Set email format to HTML dvilches@loga.cl

$cuerpo = 'Nuevo Click to Call de Lanzamiento Aires del Sur:<br>
	Teléfono: ' . $telefono . '<br>
	<small>Este mensaje fue enviado desde el formulario de Depto. Aires del Sur en www.loga.cl</small>';

$mail->Subject = '[Lanzamiento Aires del Sur] Contacto Telefónico';
$mail->Body    = $cuerpo;

if (!$mail->send()) {
	echo 'nosent';
} else {
	echo 'success';
}
