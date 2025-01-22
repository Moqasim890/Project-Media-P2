<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    ini_set('session.use_only_cookies', 1);
    ini_set('session.use_strict_mode', 1);

    $username = $_POST["username"];
    $password = $_POST["password"];

    try {
        require_once 'db.php';
        require_once 'user-models.php';
        require_once 'validator.php';

        // Valideer gebruikersnaam en wachtwoord
        $validate_user_data = new RegisterValidator($username, $password, $pdo);
        $validate_user_data->validate_data();

        // Maak de gebruiker aan in de database
        create_user($pdo, $username, $password);

        $_SESSION["signup_success"] = "Signup successful. Proceed to login";

        header("Location: /index.php");
        die();
    } catch (PDOException $e) {
        die("SQL query failed: " . $e->getMessage());
    }

} else {
        header("Location: ../account/register.php");
    die();
}
