<?php 

ini_set('session.use_only_cookies', 1) ;
ini_set('session.use_strict_mode', 1) ;

session_start();

$host = 'localhost';
$dbname = 'login';
$dbusername = 'root';
$dbpassword = '';

try {

    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    die("Connection failed with error: " . $e->getMessage());
}