import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "ssh2";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, serverIP, password, privateKey } = req.body;

  const conn = new Client();
  conn
    .on("ready", () => {
      res.status(200).json({ message: "SSH Connection Successful!" });
      conn.end();
    })
    .on("error", (err: Error) => {
      res.status(500).json({ error: err.message });
    })
    .connect({
      host: serverIP,
      port: 22,
      username: username,
      password: password,
      privateKey: privateKey ? Buffer.from(privateKey) : undefined,
    });
}
