import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Website <onboarding@resend.dev>",
      to: "emailanda@gmail.com",
      subject: `Pesan Baru dari ${name}`,
      html: `
        <h2>Pesan Baru</h2>

        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error },
      { status: 500 }
    );
  }
}