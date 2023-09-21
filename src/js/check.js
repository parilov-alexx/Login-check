export default class Validator {
  validateUsername(name) {
    this.login = name;
    return /^[a-z](?!.*\d{4})([-_]|[a-z]|(\d{1,3}))+[a-z]$/g.test(name);
  }
}