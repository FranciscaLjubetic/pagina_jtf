<?php
if(isset($_POST['email'])) {
  $email_to = "jumptofuture@gmail.com";
  $email_subject = "Contacto JTF";

  if(!isset($_POST['nombre']) ||
  !isset($_POST['correo']) ||
  !isset($_POST['telefono']) ||
  !isset($_POST['mensaje'])) {
    echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
    echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
    die();
  }

  $email_message = "Detalles del formulario de contacto:\n\n";
  $email_message .= "Nombre: " . $_POST['nombre'] . "\n";
  $email_message .= "Correo: " . $_POST['correo'] . "\n";
  $email_message .= "Teléfono: " . $_POST['telefono'] . "\n";
  $email_message .= "Mensaje: " . $_POST['mensaje'] . "\n\n";

  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);

  echo "¡El formulario se ha enviado con éxito!";
}
?>