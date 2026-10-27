import jwt from "jsonwebtoken";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { username, password } = req.body;

  if (username === "organizer" && password === "organizer") {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Credenciais estão inválidas!" });
}