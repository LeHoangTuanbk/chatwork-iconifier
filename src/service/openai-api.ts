"use server";
function addLabel(text: string): string {
  //Call openai API here
  console.log("User input:", text);
  const fakeResultFromOpenAI = `ありがとうございました。(bow)(bow)`;
  return fakeResultFromOpenAI;
}

export default addLabel;
