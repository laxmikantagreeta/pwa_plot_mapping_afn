exports.handler = async (event, context) => {
  console.log("PreSignUp event:", JSON.stringify(event));

  // Auto-confirm the user
  event.response.autoConfirmUser = true;

  // Auto-verify phone number
  if (event.request.userAttributes.phone_number) {
    event.response.autoVerifyPhone = true;
  }

  // Optional: Auto-verify email
  if (event.request.userAttributes.email) {
    event.response.autoVerifyEmail = true;
  }

  return event;
};
