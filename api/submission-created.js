require("dotenv").config();
const fetch = require("node-fetch");
const { BUTTONDOWN_API_KEY } = process.env;
exports.handler = async (event) => {
  const { email } = JSON.parse(event.body).payload;
  console.log(`Recieved a submission: ${email}`);
  return fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Submitted to Buttondown:\n ${data}`);
    })
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
