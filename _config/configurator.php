<?php

// DB

echo "\n\nPHP_ENV: " . getenv('PHP_ENV') . "\n\n";

define('CONFIG', array(
    'mysql' => array(
		'host' => (getenv('DB_HOST')) ? getenv('DB_HOST') : 'localhost',
		'name' => (getenv('DB_NAME')) ? getenv('DB_NAME') : 'hq2',
		'username' => (getenv('DB_USER')) ? getenv('DB_USER') : 'root',
		'password' => (getenv('DB_PASSWORD')) ? getenv('DB_PASSWORD') : 'dev'
	),
	'log_dir' => (getenv('LOG_DIR')) ? getenv('LOG_DIR') : '/Backup/logs'
));

// PERSONALITY

$string = file_get_contents(dirname(__FILE__) . '/../Config/personality.json');
define('PERSONALITY', json_decode($string, true));

?>