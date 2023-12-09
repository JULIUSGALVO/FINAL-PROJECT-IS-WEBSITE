<?php
$servername = "localhost"; // Change this to your database server name if it's different
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$dbname = "datab"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";

// Sample SQL query to fetch data from the 'rating form' table
$sql = "SELECT id, name, email, rating FROM `rating form`";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]. " - Rating: " . $row["rating"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>