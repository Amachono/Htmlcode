export default function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log(data); // Для проверки данных в консоли

        // Здесь вы можете добавить логику для сохранения сообщений или обработки данных

        return res.status(200).json({ message: 'Data received' });
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
