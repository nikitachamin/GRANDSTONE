export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { fullName, phone, email, agreement } = req.body;

    // Минимальная проверка, что человек согласен на обработку данных
    if (!agreement)
      return res.status(400).json({ error: 'Не принято соглашение' });

    // Получите токен и chat_id из переменных окружения
    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const text = `📝 Клиент с именем ${fullName} просит связаться с ним по:\n📞 ${phone ?? '-'}\n📧 ${email ?? '-'}`;

    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const telegramRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    const data = await telegramRes.json();

    if (!data.ok) {
      return res.status(500).json({
        error: 'Ошибка при отправке сообщения в Telegram',
        detail: data,
      });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Серверная ошибка', detail: String(err) });
  }
};
