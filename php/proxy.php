<?php
	ini_set('display_errors', false);
	set_exception_handler('ReturnError');

	$xmlResponse = '';
	$url = (isset($_GET['url']) ? $_GET['url'] : null);

	if ($url) {
		// Fetch XML
		$curlVar = curl_init();
		curl_setopt_array($curlVar, array(
			CURLOPT_URL => $url,
			CURLOPT_HEADER => false,
			CURLOPT_TIMEOUT => 10,
			CURLOPT_RETURNTRANSFER => true
		));
		$xmlResponse = curl_exec($curlVar);
	}

	if ($xmlResponse) {
		// XML to JSON
		echo json_encode(new SimpleXMLElement($xmlResponse));
	} else {
		ReturnError();
	}

	function ReturnError() {
		echo '{"error":true}';
	}
?>