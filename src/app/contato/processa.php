<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
		$nome = $_POST['nome'];
        $email = $_POST['email'];
        $assunto = $_POST['assunto'];
		$mensagem = $_POST['mensagem'];
		
        require 'vendor/autoload.php';

        $from = new SendGrid\Email(null, "leo@gmail.com");
        $subject = "Mensagem de contato";
        $to = new SendGrid\Email(null, "leonardofs2@gmail.com");
        $content = new SendGrid\Content("text/html", "Olá Admin, <br><br>Nova mensagem de contato<br><br>Nome: $nome<br>Email: $email <br>Assunto: $assunto <br>Mensagem: $mensagem");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);
        
        //Necessário inserir a chave
        $apiKey = 'SENDGRID_API_KEY';
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($mail);
        echo "Mensagem enviada com sucesso";
		
        ?>
    </body>
</html>
