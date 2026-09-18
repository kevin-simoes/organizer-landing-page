import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3001;
const SECRET_KEY = 'sua_chave_super_secreta';

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log("Login recebido:", username);

    if (username === 'organizer' && password === 'organizer') {
        const token = jwt.sign(
            { username },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        return res.json({ token });
    }

    return res.status(401).json({
        message: 'Credenciais estão inválidas!'
    });
});

app.listen(PORT, () => {
    console.log(`Backend rodando em http://localhost:${PORT}`);
});