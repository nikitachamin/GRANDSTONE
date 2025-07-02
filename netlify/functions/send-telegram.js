exports.handler = async function(event, context) {
  const { fullName, phone, email } = JSON.parse(event.body || '{}');

  const message = `Клиент с именем ${fullName} просит связаться с ним по телефону: ${phone} или email: ${email}`;

  // !!! ВАЖНО: замените 'ВАШ_ТОКЕН' и 'ВАШ_CHAT_ID'
  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  const data = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if(result.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ status: 'ok' })
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ status: 'error', error: result.description })
      };
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', error: e.message })
    }
  }
}