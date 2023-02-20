import { Controller } from 'egg';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '',
});

const openai = new OpenAIApi(configuration);
export default class OpenAiController extends Controller {
  public async index() {
    const { ctx } = this;
    // console.log('ctx.request.body', ctx.request.body);
    let text = ctx.request.body.text;
    let type = ctx.request.body.type;
    console.log(text, type);
    const getText = async () => {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: text,
        max_tokens: 2048,
      });
      console.log(completion.data);

      return completion.data.choices[0].text;
    };

    const getImg = async () => {
      const completion = await openai.createImage({
        prompt: text,
        n: 1,
        size: '1024x1024',
      });
      return completion.data[0].url;
    };

    // const completion = await openai.createImage({
    //   prompt: text,
    //   n: 1,
    //   size: "1024x1024",
    // })
    try {
      const response = type == 'text' ? await getText() : await getImg();
      // const imageUrl = response.data[0].url
      ctx.body = {
        code: 200,
        data: response,
      };
    } catch (error) {
      console.log(error);
      ctx.body = {
        code: 500,
        data: error,
      };
    }

    // console.log(completion.data);
    // console.log(completion);

    // ctx.body = await ctx.service.test.sayHi('egg');
  }
}
