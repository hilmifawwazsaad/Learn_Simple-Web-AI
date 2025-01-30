"use client";

import { useState, useRef, useEffect } from "react";
import MessageInput from "./MessageInput";
import Footer from "../components/Footer";

const MessageList = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Halo! Ada yang bisa saya bantu?", sender: "AI" },
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (message, response) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { id: prevMessages.length + 1, text: message, sender: "You" },
            { id: prevMessages.length + 2, text: response, sender: "AI" },
        ]);
    };

    return (
        <div className="flex flex-col h-full mx-2 sm:mx-4 md:mx-8 lg:mx-12">
            <div className="flex-1 p-2 sm:p-4 pb-32 sm:pb-36 overflow-y-auto bg-gray-100 dark:bg-gray-800">
                {messages.map((message) => (
                    <div key={message.id} className="flex flex-col my-1 sm:my-2">
                        {message.sender === "AI" && (
                            <div className="p-2 sm:p-3 rounded-lg bg-blue-100 dark:bg-blue-900 self-start max-w-[85%] sm:max-w-[75%] md:max-w-[70%] inline-block">
                                <p className="text-sm sm:text-m font-bold text-gray-900 dark:text-gray-100">{message.sender}</p>
                                <p className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">{message.text}</p>
                            </div>
                        )}

                        {message.sender === "You" && (
                            <div className="p-2 sm:p-3 rounded-lg bg-purple-100 dark:bg-purple-900 self-end ml-auto max-w-[85%] sm:max-w-[75%] md:max-w-[70%] inline-block">
                                <p className="text-sm sm:text-m font-bold text-gray-900 dark:text-gray-100">{message.sender}</p>
                                <p className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">{message.text}</p>
                            </div>
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="fixed bottom-0 left-0 right-0 w-full px-2 sm:px-4 md:px-8 lg:px-12">
                <div className="p-2 sm:p-4 bg-gray-100 dark:bg-gray-800">
                    <MessageInput onSendMessage={handleSendMessage} />
                </div>
                <div className="bg-gray-100 dark:bg-gray-800">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MessageList;