export const handleValidate = (type, value) => {
  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
  if (type === "email") {
    if (!value) {
      return { isValid: false, message: "Please enter your email." };
    }
    if (!emailRegex.test(value)) {
      return { isValid: false, message: "Invalid email address." };
    }
  } else if (type === "password") {
    if (!value) {
      return { isValid: false, message: "Please enter your email." };
    }
    if (!(value === "123123123")) {
      return { isValid: false, message: "Incorrect password" };
    }
  }
  return { isValid: true, message: "" };
};
