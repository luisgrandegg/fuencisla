import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export class SendGridProvider {
  async send(email: {
    from: string;
    to: string;
    cc?: string;
    replyTo?: string;
    subject: string;
    text: string;
  }) {
    const msg = {
      to: email.to,
      from: email.from,
      cc: email.cc,
      replyTo: email.replyTo,
      subject: email.subject,
      text: email.text,
    };

    await sgMail.send(msg);
  }
}
