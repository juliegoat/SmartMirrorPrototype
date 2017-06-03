<?php
require("apikeys.php");

$weather_url = "http://api.openweathermap.org/data/2.5/weather?zip=06248,us&APPID=".$weather_apikey;
echo $weather_url;
$curl = curl_init($weather_url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$curl_response = curl_exec($curl);
if ($curl_response === false) {
    $info = curl_getinfo($curl);
    curl_close($curl);
    die('error occured during curl exec. Additional info: ' . var_export($info));
}
curl_close($curl);
echo $curl_response;
$decoded = json_decode($curl_response);
if (isset($decoded->response->status) && $decoded->response->status == 'ERROR') {
    die('error occured: ' . $decoded->response->errormessage);
}
var_export($decoded->response);

?>