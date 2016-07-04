<?php

$jawsDb = parse_url(getenv('JAWSDB_MARIA_URL'));
$hostname = $jawsDb['host'];
$username = $jawsDb['user'];
$password = $jawsDb['pass'];
$database = substr($jawsDb["path"], 1);

echo $hostname . "\n";
echo $username . "\n";
echo $password . "\n";
echo $database . "\n";

try {
    $conn = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}
