<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Log file path
$logFile = __DIR__ . '/email_log.txt';

function logError($message) {
    global $logFile;
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (!$data) {
            throw new Exception('Invalid JSON data received');
        }

        // Validate required fields
        $required = ['name', 'email', 'phone', 'subject', 'message'];
        foreach ($required as $field) {
            if (empty($data[$field])) {
                throw new Exception("Missing required field: $field");
            }
        }
        
        $to = "team@staffchahiye.com"; // Updated email address
        $subject = "New Contact Form Submission: " . $data['subject'];
        
        $message = "
        <html>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {$data['name']}</p>
            <p><strong>Email:</strong> {$data['email']}</p>
            <p><strong>Phone:</strong> {$data['phone']}</p>
            <p><strong>Subject:</strong> {$data['subject']}</p>
            <p><strong>Message:</strong></p>
            <p>{$data['message']}</p>
        </body>
        </html>
        ";
        
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: {$data['email']}" . "\r\n";
        
        $mail_sent = mail($to, $subject, $message, $headers);
        
        if ($mail_sent) {
            logError("Email sent successfully to $to");
            echo json_encode(['success' => true]);
        } else {
            throw new Exception('Failed to send email');
        }
    } catch (Exception $e) {
        logError("Error: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?> 