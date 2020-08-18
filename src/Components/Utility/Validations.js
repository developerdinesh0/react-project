const Validation = (value, rule) => {
  // When field is optional
  if (!rule.required) {
    return {
      valid: true,
      error_msg: ""
    };
  }
  value = typeof value === "object" ? JSON.stringify(value) : value;
  // If filed is required
  if (rule.required) {
    if (value == null || value.trim() === "") {
      return {
        valid: false,
        error_msg: "This field is required!"
      };
    }
  }
  // If filed is email
  if (rule.email) {
    const is_email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!is_email) {
      return {
        valid: false,
        error_msg: "Field should be an email!"
      };
    }
  }

  // Validate min length
  if (rule.min_length) {
    if (value.length < rule.min_length) {
      return {
        valid: false,
        error_msg: "Field length minimum " + rule.min_length + "!"
      };
    }
  }

  return {
    valid: true,
    error_msg: ""
  };
};

export default Validation;
