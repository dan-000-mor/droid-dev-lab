<?php
// Настройка кодировки для скрипта
mb_internal_encoding("UTF-8");

$to = "hello@droid-dev-lab.com"; // Ваш Email
$subject = "New Lead from DroidDevLab Site";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Получаем данные
    // html_entity_decode нужен, чтобы &lt; превратилось обратно в <
    $name = trim($_POST["name"]);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $budget = html_entity_decode(trim($_POST["budget"])); 
    $message = trim($_POST["message"]);

    // Формируем тело письма
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Budget: $budget\n\n";
    $email_content .= "Project Details:\n$message\n";

    // ВАЖНО: Заголовки для правильной кодировки (UTF-8)
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";
    
    $headers .= "From: no-reply@droid-dev-lab.com" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Кодируем тему письма, чтобы кириллица в заголовке тоже читалась (на будущее)
    $subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";

    // Отправка
    if (mail($to, $subject, $email_content, $headers)) {
        echo '<script>alert("Thank you! Your request has been sent."); window.location.href = "/";</script>';
    } else {
        echo "Error sending email.";
    }

} else {
    header("Location: /");
}
?>