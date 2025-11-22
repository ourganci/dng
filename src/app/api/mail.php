<?php
// mail.php — HTML-Mail-Version für Angular
// CORS Headers - MUSS ganz am Anfang stehen!
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// Preflight Request (OPTIONS) behandeln
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Max-Age: 86400'); // 24 Stunden Cache
    http_response_code(204);
    exit(0);
}

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// CORS Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Nur POST zulassen
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Nur POST erlaubt']);
    exit;
}

// Formulardaten sicher auslesen
$firstname  = trim($_POST['firstname'] ?? '');
$name       = trim($_POST['name'] ?? '');
$street     = trim($_POST['street'] ?? '');
$postalcode = trim($_POST['postalcode'] ?? '');
$city       = trim($_POST['city'] ?? '');
$email      = trim($_POST['email'] ?? '');
$phone      = trim($_POST['phone'] ?? '');
$service    = trim($_POST['service'] ?? '');
$message    = trim($_POST['message'] ?? '');

// Validierung
if (!$firstname || !$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Bitte alle Pflichtfelder ausfüllen.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige E-Mail-Adresse.']);
    exit;
}

// Empfängeradresse für Test
$to = 'info@dng-nahe-glan.de';

// Betreff erweitern: Name + Service
$subject = "Neue Nachricht von $firstname $name über Service: $service";

// HTML-Mailtext
$body = <<<EOT
<html>
<head>
  <meta charset="UTF-8">
  <title>Neue Kontaktanfrage</title>
</head>
<body style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
  <h2 style="color:#0072C6;">Neue Kontaktanfrage über das Kontaktformular</h2>
  <table cellpadding="5" cellspacing="0" border="0">
    <tr><td><strong>Vorname:</strong></td><td>$firstname</td></tr>
    <tr><td><strong>Nachname:</strong></td><td>$name</td></tr>
    <tr><td><strong>Straße:</strong></td><td>$street</td></tr>
    <tr><td><strong>PLZ / Ort:</strong></td><td>$postalcode $city</td></tr>
    <tr><td><strong>E-Mail:</strong></td><td>$email</td></tr>
    <tr><td><strong>Telefon:</strong></td><td>$phone</td></tr>
    <tr><td><strong>Service:</strong></td><td>$service</td></tr>
  </table>
  <h3>Nachricht:</h3>
  <p style="background:#f4f4f4; padding:10px; border-radius:5px;">$message</p>
</body>
</html>
EOT;

// Header für HTML-Mail und Reply-To
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Website <no-reply@ang.dng-nahe-glan.de>\r\n";
$headers .= "Reply-To: $email\r\n";

// Mail senden
$success = mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $body, $headers);

// Ergebnis zurückgeben
echo json_encode(['success' => $success]);
