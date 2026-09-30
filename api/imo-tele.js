export default async function handler(req, res) {
  const BOT_TOKEN = "8602174291:AAHDdyx9JbEemJbNESFaBR1m49WdxahAzXU";
  const CHAT_ID = "6765366255";
  const { payout = "0", geo = "?", offer = "Smartlink", subid = "-" } = req.query;
  const message = `*💰 LEAD BARU IMONETIZEIT!*\n----------------------\n🌍 Negara: ${geo}\n💵 Payout: $${payout}\n📦 Offer: ${offer}\n🆔 SubID: ${subid}`;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: "Markdown" })
    });
    return res.status(200).send("OK");
  } catch (e) {
    return res.status(500).send("Error");
  }
}
