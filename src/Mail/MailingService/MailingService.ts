import { SendGridProvider } from "./SendGridProvider";

interface Email {
  from: string;
  to: string;
  cc?: string;
  replyTo?: string;
  subject: string;
  text: string;
}

interface MailingProvider {
  send(email: Email): Promise<void>;
}

export class MailingService {
  private provider: MailingProvider;

  constructor(provider: MailingProvider = new SendGridProvider()) {
    this.provider = provider;
  }

  async send(email: Email) {
    return this.provider.send(email);
  }
}
