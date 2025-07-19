<?php
// telegram.php
// Укажите свой токен и chat_id:
$botToken = "7550370689:AAGJ4vq0tftmjxuhG_puFSz6cj8IC1tQiOM";
$chatId = "7369569360";


// Получаем данные из JSON POST
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['fullName'], $data['phone'], $data['email'], $data['agreement'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid data']);
    exit;
}

$message = "Клиент с именем {$data['fullName']} просит связаться с ним:\nТелефон: {$data['phone']}\nEmail: {$data['email']}";

$url = "https://api.telegram.org/bot{$botToken}/sendMessage?chat_id={$chatId}&text=" . urlencode($message);

$response = file_get_contents($url);

echo json_encode(['status' => 'ok']);
?>
