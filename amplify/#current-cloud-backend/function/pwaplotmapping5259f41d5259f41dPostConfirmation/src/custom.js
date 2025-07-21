exports.handler = async (event) => {
  console.log("PostConfirmation event:", JSON.stringify(event));

  const userAttributes = event.request.userAttributes;
  console.log("User signed up with phone:", userAttributes.phone_number);

  // Any async code here (e.g., await saveToDynamoDB())

  return event;
};
