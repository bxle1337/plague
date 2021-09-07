<?php
header("Access-Control-Allow-Origin: *");
date_default_timezone_set('Europe/Moscow');
if(isset($_GET['key'])){
	$key = base64_decode($_GET['key']);
	$url = "https://{$_SERVER['HTTP_HOST']}$key";
    $client_secret = '8uG9OD3RMYK9tRnVeHa9'; //Защищённый ключ из настроек вашего приложения

    $query_params = [];
    parse_str(parse_url($url, PHP_URL_QUERY), $query_params); // Получаем query-параметры из URL

    $sign_params = [];
    foreach ($query_params as $name => $value) {
        if (strpos($name, 'vk_') !== 0) { // Получаем только vk параметры из query
          continue;
        }
        $sign_params[$name] = $value;
    }

    ksort($sign_params); // Сортируем массив по ключам
    $sign_params_query = http_build_query($sign_params); // Формируем строку вида "param_name1=value&param_name2=value"
    $sign = rtrim(strtr(base64_encode(hash_hmac('sha256', $sign_params_query, $client_secret, true)), '+/', '-_'), '='); // Получаем хеш-код от строки, используя защищеный ключ приложения. Генерация на основе метода HMAC.

    $status = $sign === $query_params['sign']; // Сравниваем полученную подпись со значением параметра 'sign'

    if($status != 1){
    	$id = $query_params['vk_user_id'];
			echo "Bad Key";
    	exit();
    }else{
    	$id = $query_params['vk_user_id'];
	    $groupid = $query_params['vk_group_id'];

    }
}else{
	echo "Bad Key";
	exit();
}
