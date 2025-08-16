import client from './config/open-ai.js';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
    console.log(colors.bold.green('Welcome to the Chatbot Program!'));
    console.log(colors.bold.green('You can start chatting with the bot.'));

    const chatHistory: ChatCompletionMessageParam[] = []; // Store conversartion history

    while(true) {
        const userInput = readlineSync.question(colors.yellow('You: '));
        try{
            // Start with existing chat history
            const messages: ChatCompletionMessageParam[] = [...chatHistory];

            // Add latest user input
            messages.push({role:'user'as const, content: userInput})

            // Call the API with user input
            const completion = await client.chat.completions.create({
                model: "gpt-5-nano",
                messages: messages,
            });

            // Get completion text/content
            const completionText = completion.choices[0].message.content;

            if(userInput.toLocaleLowerCase() === 'exit') {
                console.log(colors.green('Bot: ') + completionText);
                return;
            }

            if(completionText){
                console.log(colors.green('Bot: ') + completionText);

                // Update history with user input and assisstant response
                chatHistory.push({role: 'user', content: userInput});
                chatHistory.push({role: 'assistant', content: completionText})
            }

        } catch(error){
            console.error(colors.red((error as Error).message));
        }
    }
}

main();


