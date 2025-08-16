# AI ChatBot

## Decription

This is a simple AI ChatBot application that uses the OpenAI API to generate responses based on user input. The application is built using nodejs and typescript, and it provides a terminal interface for users to interact with the chatbot.

## Model

The application uses the `gpt-5-nano` model from OpenAI for generating responses.

## Features

- Simple terminal interface
- Uses OpenAI API for generating responses
- Supports multiple conversation turns
- Handles user input and displays responses

## Installation

1. Clone the repository:
   ```bash
   git clone 

2. Navigate to the project directory:
   ```bash
   cd ai-chatbot
   ```

3. Install dependencies:
   ```bash
   npm install
    ``` 

4. Get your OpenAI API key from [OpenAI](https://platform.openai.com/signup).(Recommended)   

5. Get a free OpenAI API key from [chatanywhere](https://github.com/chatanywhere/GPT_API_free/blob/main/README.md).   
   > ⚠️ **Disclaimer:** This API key provider has not been thoroughly vetted for security. If you're handling sensitive data or deploying to production, consider using a trusted and verified provider. Proceed at your own discretion.

6. Create a `.env` file in the root directory and add your OpenAI API key:
   ```plaintext
   OPENAI_API_KEY=your_openai_api_key_here
   ```

7. Run the application:     
    `npm run start`

8. Start chatting with the AI ChatBot in the terminal.
