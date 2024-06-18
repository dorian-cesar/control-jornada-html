<?php
// Establece los encabezados CORS para permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

// Verifica si la solicitud es OPTIONS (solicitud de pre-vuelo)
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    // El navegador está realizando una solicitud de pre-vuelo OPTIONS, se establecen los encabezados permitidos
    header('Access-Control-Allow-Headers: Content-Type, Authorize');
    header('Access-Control-Max-Age: 86400'); // Cache preflight request for 1 day
    header("HTTP/1.1 200 OK");
    exit;
}


// Importa las clases de PHPMailer necesarias
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include("./conf.php");

// Incluye el archivo autoload.php que contiene las clases de PHPMailer
require_once('../vendor/autoload.php');

// Verifica si la solicitud es POST
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Obtiene los datos JSON del cuerpo de la solicitud
    $json_data = file_get_contents("php://input");

    // Si se reciben datos JSON
    if($json_data){

        try{
            // Decodifica los datos JSON
            $data = json_decode($json_data, true);
            // Extrae los valores del array JSON
            $mail= $data['mail'];

            // Crea una instancia de PHPMailer
            $phpmailer = new PHPMailer();
            // Configura el envío SMTP
            $phpmailer->isSMTP();
            $phpmailer->Host = 'mail.ringring.cl';
            $phpmailer->SMTPAuth = true;
            $phpmailer->Port = 465;
            $phpmailer->Username = 'dgonzalez@ringring.cl';
            $phpmailer->Password = $mailpass;
            $phpmailer->CharSet = "UTF-8";
            $phpmailer->Encoding = 'base64';
            $phpmailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    
            // Establece la dirección de correo remitente
            $phpmailer->setFrom('dgonzalez@ringring.cl');

            // Agrega la dirección de correo destinatario
            $phpmailer->addAddress('carolinaherrera.esc@gmail.com');

            // Configura el correo en formato HTML
            $phpmailer->isHTML(true);
            // Establece el asunto del correo
            $phpmailer->Subject = "recuperar contraseña";
            // Establece el cuerpo del correo
            $phpmailer->Body    = "
            mail = $mail <BR>

            $formText            
            ";
            // Establece un cuerpo alternativo en texto plano
            $phpmailer->AltBody = "mail: $mail\n---------------\n";

            // Envía el correo
            $phpmailer->send();
            // Muestra un mensaje de éxito
            echo "Enviado correctamente";
        } catch(Exception $e){
            // En caso de error, muestra el mensaje de error
            echo $phpmailer->ErrorInfo;
        }
        
    }
}

?>
