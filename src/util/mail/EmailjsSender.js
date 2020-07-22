import emailjs from "emailjs-com";
const secrets = require("util/secrets.json");

export function send(senderEmail, senderName, receiverEmail, subject, message) {
  const template_params = {
    "receiverMail": receiverEmail,
    "senderName": senderName,
    "subject": subject,
    "senderMail": senderEmail,
    "message": message
  }
  const service_id = "gmail";
  const template_id = "cosmo";

  return emailjs.send(service_id, template_id, template_params, secrets.emailjs);
}