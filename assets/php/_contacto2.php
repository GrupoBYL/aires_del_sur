<?php
require_once('classes/phpmailer/PHPMailerAutoload.php');

$telefono = $_POST['llamada'];



$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';
$mail->setFrom('noreply@loga.cl', 'Click To Call - Terra Calama');
$mail->addAddress('javieraguerra@loga.cl');
$mail->addAddress('dvilches@loga.cl');
//$mail->addAddress('saguayo@loga.cl');
//$mail->addAddress('dcaldera@grupobyl.cl');
// $mail->addReplyTo($email, $nombre);
$mail->isHTML(true);   // Set email format to HTML

$cuerpo = 'Nuevo Click to Call de Lanzamiento Terra Calama:<br>
	Teléfono: ' . $telefono . '<br>
	<small>Este mensaje fue enviado desde el formulario de Casa Terra Calama en www.loga.cl</small>';

$mail->Subject = '[Lanzamiento Terra Calama] Contacto Telefónico';
$mail->Body    = $cuerpo;

if (!$mail->send()) {
	echo 'nosent';
} else {
	echo 'success';
}
