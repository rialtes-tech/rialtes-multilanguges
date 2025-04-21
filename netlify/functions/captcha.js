const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const captcha = body.captcha;

    if (!captcha) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Captcha response is required." }),
      };
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`,
      { method: "POST" }
    );

    const data = await response.json();

    if (data.success) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Captcha verified successfully." }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Captcha verification failed." }),
      };
    }
  } catch (error) {
    console.error("Error verifying captcha:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
