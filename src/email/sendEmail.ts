import { SendMailOptions } from 'nodemailer';

export default async function sendEmail(message: SendMailOptions): Promise<unknown> {
  let result;
  if (!this.email) {
    this.logger.info('Would have sent mail, but it has been turned off');
    this.logger.info(`To ${message.to}, subject ${message.subject}`);
    return result;
  }
  try {
    const email = await this.email;
    result = email.transport.sendMail(message);
  } catch (err) {
    this.logger.error(
      `Failed to send mail to ${message.to}, subject: ${message.subject}`,
      err,
    );
    return err;
  }
  return result;
}
