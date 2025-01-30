"use client";

import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { run } from "../app/utils/chat";

const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (message.trim()) {
            setIsLoading(true);
            try {
                const response = await run(message);
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
        <div className="flex w-full flex-col sm:flex-row gap-2 sm:gap-0">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ketik pesan Anda..."
                className="text-sm sm:text-md flex-1 p-2 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-sm"
                disabled={isLoading}
            />
            <button
                onClick={handleSend}
                disabled={isLoading || !message.trim()}
                className={`flex items-center justify-center gap-2 sm:ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg sm:text-lg ${isLoading || !message.trim()
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-blue-600'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600`}
            >
                <IoIosSend className="text-xl sm:text-lg" />
                {isLoading ? 'Sending...' : 'Kirim'}
            </button>
        </div>
    );
};

export default MessageInput;