exports.handler = async (event) => {
  console.log("VerifyAuthChallengeResponse event:", JSON.stringify(event));

  const expectedAnswer = event.request.privateChallengeParameters.answer;
  const userAnswer = event.request.challengeAnswer;

  event.response.answerCorrect = expectedAnswer === userAnswer;

  return event;
};
