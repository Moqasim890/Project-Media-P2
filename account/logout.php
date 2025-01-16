<?php
session_start();
session_unset();
session_destroy();

// Redirect to login page or homepage
setcookie("user", "", time() - 3600);
header("Location: /account/login.php");
exit();

