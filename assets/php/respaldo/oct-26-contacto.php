
<?php
// Conexion a la base de datos
require('classes/MysqliDb.php');
include('classes/phpmailer/PHPMailerAutoload.php');


//production

$db = new MysqliDb(
	array(
		'host' => 'mysql.betaloga.bylcomunicaciones.com',
		'username' => 'pv_adm',
		'password' => 'loga2018post',
		'db' => 'pvloga',
		'charset' => 'utf8'
	)
);

/*
//develop
$db = new MysqliDb(
	array(
		'host' => 'localhost',
		'username' => 'root',
		'password' => 'root',
		'db' => 'terra-calama',
		'charset' => 'utf8'
	)
);
*/
if (!$db) {
	echo 'Error Conection';
}

$data = array(
	"nombre" => $_POST['nombre'],
	"email" => $_POST['email'],
	"rut" => $_POST['rut'],
	"telefono" => $_POST['telefono'],
	"tipo_depto" => $_POST['tipo_depto'],
	"tipo_local" => $_POST['tipo_local'],
	"como_llegaste" => $_POST['sector'],
	"contactabilidad" => $_POST['canal'],
	"fecha" => date('d/n/Y') . " - " . $_POST['reloj'],
	//"fecha" => date('d/n/Y H:i')
);

if ($_POST['nombre']) {
	$id = $db->insert('airesdelsur', $data);
}

if ($id) {
	echo $response = array(
		"res" => true,
		"data" => $data,
	);
} else {
	echo $response = array(
		"res" => false,
		"data" => $data,
		"error" =>  $db->getLastError()
	);
}

if ($id) {

	// cuerpo correo
	$mail = new PHPMailer();
	$mail->CharSet = 'UTF-8';
	$mail->setFrom('noreply@loga.cl', 'Inscripcion Aires del Sur');
	$mail->addAddress('dcaldera@grupobyl.cl');
	$mail->addAddress('opezoa@grupobyl.cl');
	/*$mail->addAddress('televentas@loga.cl');
	$mail->addAddress('dvilches@loga.cl');
	$mail->addAddress('saguayo@loga.cl');*/

	/* 	$mail->addAddress('javieraguerra@loga.cl');
	$mail->addAddress('dvilches@loga.cl');
	$mail->addAddress('saguayo@loga.cl'); */

	$mail->isHTML(true);   // Set email format to HTML

	$cuerpo = 'Inscripcion Depto. Aires del Sur:<br>
		<b>Nombre: </b>' . $_POST['nombre'] . ',<br>
		<b>Rut: </b>' . $_POST['rut'] . ',<br>
		<b>Telefono: </b>' . $_POST['telefono'] . ',<br>
		<b>Email: </b>' . $_POST['email'] . ',<br>
		<b>Tipo de depto: </b>' . $_POST['tipo_depto'] . ',<br>
		<b>Tipo de local: </b>' . $_POST['tipo_local'] . ',<br>
		<b>Como llegaste: </b>' . $_POST['sector'] . ',<br>
		<b>Por donde quiere ser Contactado: </b>' . $_POST['canal'] . ',<br>
		<b>Fecha: </b>' . date('d/n/Y') . " - " . $_POST['reloj'] . '<br>
		<br><small> Este mensaje fue enviado desde el formulario de Depto Aires del Sur en www.loga.cl</small>';


	$mail->Subject = '[Lanzamiento Aires del Sur] Contacto Telefónico';
	$mail->Body   =  $cuerpo;

	if (!$mail->send()) {
		echo 'nosent';
	} else {
		echo 'success';
	}
	// cuerpo correo

} else {
	echo 'nosaved' . $db->getLastError() . ' ' . var_dump($data);
}
?>