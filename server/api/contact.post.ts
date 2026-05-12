interface ContactPayload {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  privacy?: boolean;
  // honeypot
  website?: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event);

  // Honeypot — bots fill hidden fields, real users don't
  if (body.website) {
    return { ok: true };
  }

  // Validation
  const name = body.name?.trim();
  const email = body.email?.trim();
  const service = body.service?.trim();
  const message = body.message?.trim() ?? '';
  const privacy = body.privacy === true;

  if (!name || !email || !service || !privacy) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bitte füllen Sie alle Pflichtfelder aus.',
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Ungültige E-Mail-Adresse.',
    });
  }

  // Log lead server-side so it's never lost
  console.log('[contact] new lead', {
    at: new Date().toISOString(),
    name,
    email,
    service,
    message: message || '(keine Nachricht)',
  });

  // TODO: deliver the lead via email.
  // Recommended: install `nodemailer` and configure SMTP env vars,
  // or use Resend (https://resend.com) and set RESEND_API_KEY.
  //
  // Example with Resend (uncomment after `npm i resend` + setting RESEND_API_KEY):
  //
  // const { Resend } = await import('resend');
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'EvolaTec <noreply@evolatec.de>',
  //   to: 'team@evolatec.de',
  //   replyTo: email,
  //   subject: `Neue Anfrage: ${service} – ${name}`,
  //   text: `Name: ${name}\nE-Mail: ${email}\nLeistung: ${service}\n\nNachricht:\n${message || '(keine Nachricht)'}`,
  // });

  return { ok: true };
});
