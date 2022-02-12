<?php
    if (isset($_GET["name"]) || isset($_GET["contact"]) || isset($_GET["bussiness_type"]) || isset($_GET["phone_number"])) {
        echo "Name: " . $_GET["name"] . "<br>";
        echo "Contact: " . $_GET["contact"] . "<br>";
        echo "Bussiness Type: " . $_GET["bussiness_type"] . "<br>";
        echo "Phone Number: " . $_GET["phone_number"] . "<br>";
    } else {
        echo "<h1>No data</h1>";
    }
?>