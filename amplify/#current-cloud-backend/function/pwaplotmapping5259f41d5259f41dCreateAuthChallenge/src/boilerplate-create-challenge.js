const AWS = require('aws-sdk');
const sns = new AWS.SNS();
console.log("🔐 CreateAuthChallenge triggered!");

exports.handler = async (event) => {
  console.log("CreateAuthChallenge event:", JSON.stringify(event));

  // Check if this is the first challenge (i.e., OTP not yet sent)
  if (!event.request.session || event.request.session.length === 0) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const phoneNumber = event.request.userAttributes.phone_number;

    // Send OTP via SNS
    await sns.publish({
      Message: `Your verification code is: ${otp}`,
      PhoneNumber: phoneNumber,
    }).promise();

    console.log(`OTP sent to ${phoneNumber}: ${otp}`);

    // Store the OTP in the privateChallengeParameters so Cognito can verify later
    event.response.publicChallengeParameters = { message: 'Enter the code sent to your phone.' };
    event.response.privateChallengeParameters = { answer: otp };
    event.response.challengeMetadata = 'SMS_OTP';
  } else {
    // If this is a retry or continuation, resend the same OTP
    const previousAnswer = event.request.session.slice(-1)[0].challengeMetadata;

    event.response.publicChallengeParameters = { message: 'Re-enter the code sent to your phone.' };
    event.response.privateChallengeParameters = { answer: previousAnswer };
    event.response.challengeMetadata = previousAnswer;
  }

  return event;
};
