<?php

declare(strict_types=1);

class RegisterValidator {

    private $username;
    private $password;
    private $pdo;

    function __construct(string $username, string $password, object $pdo){
        $this->username = $username;
        $this->password = $password;
        $this->pdo = $pdo;
    }

    function validate_data(){

        $errors = [];

        if (empty($this->username) || empty($this->password)) {
            $errors["incomplete_form"] = "Please fill all the fields";
        }

        if (strlen($this->password) < 5) {
            $errors["password_too_short"] =  "Password must be greater than or equal to 5 characters";
        }

        if(!empty(get_user_username($this->pdo, $this->username))) {
            $errors["username_exists"] = "Username already exists";
        }

        if (!empty($errors)) {
            $_SESSION["signup_errors"] = $errors;
            header("Location: ../account/register.php");
            die();
        }

    }

};

class LoginValidator {

    private $username;
    private $password;
    private $pdo;

    function __construct(string $username, string $password, object $pdo) {
        $this->username = $username;
        $this->password = $password;
        $this->pdo = $pdo;
    }

    function get_user_data(){
        return get_user_username($this->pdo, $this->username);
    }

    function validate_data() {

        $errors = [];

        if (empty($this->username) || empty($this->password)) {
            $errors["incomplete_form"] = "Please fill all the fields";
        }

        $user = $this->get_user_data();

        if (!$user) {
            $errors["invalid_username"] = "Invalid username entered";
        }

        if ($user && !password_verify($this->password, $user["pwd"])) {
            $errors["invalid_password"] = "Invalid password entered";
        }

        if (!empty($errors)) {
            $_SESSION["login_errors"] = $errors;
            header("Location: ../account/login.php");
            die();
        }
        
    }

};
