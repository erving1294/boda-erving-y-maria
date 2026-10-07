export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxaCNWBZQubtPPPu30C058lg8wJfc0x6x3XSbcPbWbIXj29u7cQVo_z2CS1m6zKO7gi/exec";

  try {
    const googleResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: typeof req.body === "string" ? req.body : JSON.stringify(req.body),
    });

    const statusCode = googleResponse.status;

    // Si el servidor de Google responde 200 o 302 (éxito con redirección)
    if (statusCode === 200 || statusCode === 302 || googleResponse.ok) {
      return res.status(200).json({ status: 200, success: true });
    } else {
      return res
        .status(statusCode)
        .json({ status: statusCode, error: "Google Sheet error" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, error: error.message });
  }
}
