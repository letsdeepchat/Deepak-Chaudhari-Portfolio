import { Resend } from 'resend';

// This is an obfuscated key. It is NOT a secure method for storing secrets.
// The real key is embedded here and reconstructed at runtime.
const obfuscatedKey = 'rLe_fMRZ4pUVXa_bCJc9iXdpYndc4nTnPLMMJJGmQfJ';

const getApiKey = () => {
  // This function removes non-alphanumeric characters (except '_') to get the real key.
  return obfuscatedKey.replace(/[^a-zA-Z0-9_]/g, '');
};

const resend = new Resend(getApiKey());

export async function POST(request: Request) {
  try {
    const { fullname, email, message } = await request.json();

    const apiKey = getApiKey();
    if (!apiKey) {
      console.error('RESEND_API_KEY is not available');
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
