<?php 

$servername = "localhost"; // dont change
$username = "root"; //dont change
$password = ""; // dont change
$databasename ="inforia"; // you can change to any name, no hyphens, no capitals, no spaces

// ------------ Create connection
$conn = new mysqli($servername, $username, $password);
// --------------- Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


// -------------- Create database
$sql = "CREATE DATABASE $databasename";
if ($conn->query($sql) === TRUE) {
  echo "Database created successfully <br/>";
} else {
  echo "Error creating database: " . $conn->error;
}

$conn->close();
// ----------------------------------------- Now Create The Table ------------------


$tablename ="information"; // no hyphens, no capitals, no space

// Create connection
$conn = new mysqli($servername, $username, $password, $databasename);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "CREATE TABLE $tablename (
email VARCHAR(30) NOT NULL,
msg VARCHAR(255) NOT NULL,
)";

if ($conn->query($sql) === TRUE) {
  echo "Table created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}

$conn->close();