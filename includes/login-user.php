<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    ini_set('session.use_only_cookies', 1);
    ini_set('session.use_strict_mode', 1);

    $username = $_POST["username"];
    $password = $_POST["password"];

    try {
        require_once 'db.php';
        require_once 'user-models.php';
        require_once 'validator.php';

        // Gebruik de LoginValidator in plaats van de RegisterValidator
        $validate_user = new LoginValidator($username, $password, $pdo);
        $validate_user->validate_data();

        // Sla gebruikersgegevens op in de sessie
        $user = $validate_user->get_user_data();
         $_SESSION["user"] = $user;
        setcookie("user", $user['username'], time() + (86400 * 30), "/");

        // Redirect naar index.html
        header("Location: /home.html");
        exit();
        
    } catch (PDOException $e) {
        die("SQL query failed: " . $e->getMessage());
    }

} else {
    header("Location: /index.php");
    die();
}
