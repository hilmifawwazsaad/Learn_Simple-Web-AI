"use client";

import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GiArtificialIntelligence } from "react-icons/gi";
import { run as modelOne } from "../app/utils/model-1";
import { run as modelTwo } from "../app/utils/model-2";

const MessageInput = ({ onSendMessage, selectedModel, onModelChange }) => {
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (message.trim()) {
            setIsLoading(true);
            try {
                const modelFunction = selectedModel === 'model1' ? modelOne : modelTwo;
                const response = await modelFunction(message);

                if (response) {
                    onSendMessage(message, response);
                    setMessage("");
                } else {
                    throw new Error("No response from AI");
                }
            } catch (error) {
                console.error("Error sending message:", error);
                onSendMessage(
                    message,
                    "Sorry, I couldn't process your message. Please try again."
                );
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex w-full flex-row gap-2 items-center">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ketik pesan Anda..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base placeholder:text-sm"
                disabled={isLoading}
            />

            <button
                onClick={() => onModelChange(selectedModel === 'model1' ? 'model2' : 'model1')}
                className="flex items-center justify-center h-10 px-3 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
                title={`Switch to ${selectedModel === 'model1' ? 'Deepseek' : 'Gemini'}`}
            >
                <div className="hidden sm:flex items-center gap-2">
                    <GiArtificialIntelligence className="text-lg" />
                    <span className="text-sm">
                        {selectedModel === 'model1' ? 'Gemini' : 'Deepseek'}
                    </span>
                </div>
                <div className="sm:hidden">
                    <GiArtificialIntelligence className="text-lg" />
                </div>
            </button>

            <button
                onClick={handleSend}
                disabled={isLoading || !message.trim()}
                className={`flex items-center justify-center h-10 px-4 bg-blue-500 text-white rounded-lg ${isLoading || !message.trim()
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-blue-600'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition-colors duration-200`}
            >
                <div className="hidden sm:flex items-center gap-2">
                    <IoIosSend className="text-lg" />
                    <span className="text-sm">{isLoading ? 'Sending...' : 'Kirim'}</span>
                </div>
                <div className="sm:hidden">
                    <IoIosSend className="text-lg" />
                </div>
            </button>
        </div>
    );
};

export default MessageInput;