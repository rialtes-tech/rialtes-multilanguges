import fetch from 'node-fetch';

export async function POST(req) {
    const { captcha } = await req.json();

    if (!captcha) {
        return new Response(
            JSON.stringify({ message: 'Captcha response is required.' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;

        // Send the captcha value to Google reCAPTCHA API for validation
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`,
            { method: 'POST' }
        );

        // If the Google reCAPTCHA API does not return a success status, handle it
        if (!response.ok) {
            const responseBody = await response.text();
            console.error(`Error: ${response.status} - ${responseBody}`);
            return new Response(
                JSON.stringify({ message: 'Something went wrong with CAPTCHA verification.' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const data = await response.json();

        if (data.success) {
            return new Response(
                JSON.stringify({ message: 'Captcha verified successfully.' }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        } else {
            return new Response(
                JSON.stringify({ message: 'Captcha verification failed.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }
    } catch (error) {
        console.error('Error during captcha verification:', error);
        return new Response(
            JSON.stringify({ message: 'Something went wrong during CAPTCHA verification.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
