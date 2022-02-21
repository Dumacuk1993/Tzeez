<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';                      
$mail->setLanguage('ru', 'phpmailer/language/');        
$mail->IsHTML(true);     
$mail->setFrom('dimakuryndin49@gmail.com', 'Tzeez');
$mail->addAddress('dimakuryndin49@gmail.com'); 
$mail->Subject = 'Here is the subject';
   

$body = '<h1>Форма обратной связи</h1>';

if(trim(!empty($_POST['name']))) {
    $body.='<p>Имя: '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))) {
    $body.='<p>Phone: '.$_POST['phone'].'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Форма отправлена!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>