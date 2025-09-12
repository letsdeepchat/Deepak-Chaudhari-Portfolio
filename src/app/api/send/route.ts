import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { fullname, email, message } = await request.json();

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return new Response(JSON.stringify({ error: 'Server configuration error.' }), {
        status: 500,
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['deepakchaudhari705@gmail.com'],
      subject: `New message from ${fullname} on your portfolio`,
      html: `<p>You received a new message from your portfolio contact form.</p>
             <p><strong>Name:</strong> ${fullname}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
     if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ error: 'An unknown error occurred.' }), { status: 500 });
  }
}
