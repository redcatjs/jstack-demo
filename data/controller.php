<?php
$file = __DIR__.'/data.json';
header('Content-type:application/json;charset=utf-8');
switch($_REQUEST['method'] ?? null){
	case 'load':
		$result = json_decode( file_get_contents($file) );
	break;
	case 'store':
		$data = $_REQUEST['data'];
		$result = file_put_contents($file, json_encode($data, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT) );
	break;
	default:
		$result = false;
	break;
}
echo json_encode($result, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
