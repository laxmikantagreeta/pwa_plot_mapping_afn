exports.handler = async (event) => {
  console.log("DefineAuthChallenge event:", JSON.stringify(event));

  const session = event.request.session || [];

  if (session.length === 0) {
    // First challenge attempt: ask for OTP
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = 'CUSTOM_CHALLENGE';
  } else if (session[session.length - 1].challengeResult === true) {
    // User answered correctly: authenticate
    event.response.issueTokens = true;
    event.response.failAuthentication = false;
  } else if (session.length >= 3) {
    // Too many failed attempts
    event.response.issueTokens = false;
    event.response.failAuthentication = true;
  } else {
    // Retry challenge
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = 'CUSTOM_CHALLENGE';
  }

  return event;
};
