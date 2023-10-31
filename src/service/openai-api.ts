"use server";
import OpenAI from "openai";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const getCompletion = async (
  prompt: string,
  model = "gpt-4",
  temperature = 0.2
) => {
  let messages: Message[] = [
    {
      role: "system",
      content:
        "You are a helpful assistant. You help to add labels to the user's text.",
    },
    { role: "user", content: prompt },
  ];
  try {
    let response = await openai.chat.completions.create({
      model: model,
      messages: messages,
      temperature: temperature,
    });
    console.log(response);
    return response.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
};

async function addLabel(userText: string): Promise<string | null | undefined> {
  let prompt = `You will help me in a project that receives user Japanese text input and the app will return to the user their original text with icons. My icons are customized gif images. This project targets Japanese users, and supports them when they use the Chatwork app. This problem is similar to text classification. There are 10 labels: (roger), (muscle), (dance), (whew), (think), (please), (cracker), (beer), (bow). Here are their meanings. 

1. (roger): Indicates understanding or agreement, e.g., 了解です、了解いたしました、承知しました, etc.
2. (flex): Expresses determination or effort, e.g., 頑張ります、諦めるな！、やってみせます, etc.
3. (dance): Celebrates success, e.g., やった！、成功しました、成功しました, etc.
4. (whew): Expresses difficulties or issues, e.g., 全然わからないです、失敗しました、問題があります, etc.
5. (think): Indicates asking a question, e.g., お時間よろしいでしょうか、明日空いてる？、決められますか？ etc.
6. (please): Expresses a strong request, e.g., お願いできますか、助けてもらえますか, etc.
7. (cracker): Offers congratulations, e.g., おめでとう、お誕生日おめでとうございます、ハッピーバースデー, etc.
8. (beer): Invites to a party or celebration, e.g., ビールを飲みましょう、飲み会に行きましょう、アルコール準備しています, etc.
9. (bow): Expresses deep thanks or apologies (similar to (please)), e.g., よろしくお願いします、宜しくお願いいたします、ありがとうございます、本当にありがとうございました、ごちそうさまでした、助かりました、お時間をいただきありがとうございます、ご協力ありがとうございました, 申し訳ございませんでした、ご迷惑をおかけしました、ごめんなさい、勉強になりました、etc.
10. If the sentences don't fall into the mentioned cases, leave them without labels.　In this case, the tone of the sentences is neutral. E.g., 9月 22日 (木曜日)⋅午前11:00～午後12:00、四半期会議資料です、愛媛県松山市久米窪田町487-2テクノプラザ愛媛別館２F、おつかれさまです、etc.

For example, when users provide this text: 
お疲れ様です。
これからのことを真剣に考えてくれてありがとうございます。

今からでも大丈夫です。
D室も、会議室も使用中なので、廊下のテーブルでよろしいでしょうか？

You will output for me like this:
お疲れ様です。
これからのことを真剣に考えてくれてありがとうございます。(bow)

今からでも大丈夫です。
D室も、会議室も使用中なので、廊下のテーブルでよろしいでしょうか？(think)

Limit the icons to a maximum of two, and only include labels with a sentence probability exceeding 0.999 (Really sure about the sentence and label).

Based on the provided description, add labels to the following text without altering the original content. Only give me the necessary output, nothing else. 

User text: ${userText}
Your output:
`;

  try {
    let resultFromOpenAi = await getCompletion(prompt);
    return resultFromOpenAi;
  } catch (error) {
    console.log(error);
    return "Error";
  }
}

export default addLabel;
