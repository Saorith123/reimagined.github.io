<?php


$captchaSecretKey = "6LcSesMZAAAAAGabvjqZhGlTxKTFMV0sxdn1Eu5mXxK";
//reCAPTCHA validation
if (isset($_POST['g-recaptcha-response'])) {

	$postData = array(
		'secret' => $captchaSecretKey,
		'response' => $_POST['g-recaptcha-response']
    );
    $url = "https://www.google.com/recaptcha/api/siteverify";

	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_POST, true);
	curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($postData));
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	$serverResponse = curl_exec($curl);

	if(json_decode($serverResponse,true)['success'] == 1)
	{
		if (isset($_POST['name'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $email = $_POST['email'];
    $to = "rizkan.office@gmail.com";
    $from = $name;
    $s = 'Contact form Riz Creation';
    $m = '<strong>Name: </strong>'.$name.'<br /><strong>Subject:</strong>'.$subject.'<br/> <strong>E-mail:</strong>'.$email.'<br/> <strong>message:</strong>'.$message.'<br/>';
    $h .= 'Content-type: text/html; charset=UTF-8' . PHP_EOL;
    $h .= "from: $from\n";
    $h .= "MIME-Version: 1.1\n";
    $h .= "X-Mailer: PHP/". phpversion() . PHP_EOL;

    if ( mail($to, $s, $m, $h)){
        echo "success";
    }else{
        echo"there is a problem";
    }

}
	
	}
	else
	{
		echo '<b>Captcha</b> Validation Required!';
	
	}	
}


?>