import fetch from "isomorphic-unfetch";

exports.handler = async (event, context, callback) => {
  const { email } = JSON.parse(event.body);

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Email is required",
      }),
    };
  }

  try {
    const API_KEY = process.env.BUTTONDOWN_API_KEY;
    const response = await fetch(`https://api.buttondown.email/v1/subscribers`, {
      body: JSON.stringify({ email }),
      headers: {
        Authorization: `Token ${API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (response.status >= 400) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: `There was an error subscribing to the newsletter.`,
        }),
      };
    }

    return {
      statusCode: 201,
      body: JSON.stringify({ error: "" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || error.toString() }),
    };
  }
};
