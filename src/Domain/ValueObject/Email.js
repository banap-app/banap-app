export default class Email {
  constructor(email) {
    if (email.lenght == 0 || email == "") {
      throw new Error("Email is required");
    }
    if (email.length < 5){
        throw new Error("Email is not valid");
    }
    if(email[email.lastIndexOf(".")+1] == undefined){
        throw new Error("Email is not valid");
    }
    if (!email.includes("@")) {
      throw new Error("Email is not valid");
    }
    if (!email.includes(".")) {
      throw new Error("Email is not valid");
    }
    this.email = email;
  }

  toString() {
    return this.email;
  }
}