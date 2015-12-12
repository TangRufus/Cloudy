export default class AlertableError extends Error {
  constructor(message, buttonText = 'Got it', title = null) {
    super(message);
    this.message = message;
    this.title = title;
    this.buttonText = buttonText;
  }
}
