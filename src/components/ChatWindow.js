import MessageList from './MessageList';

const ChatWindow = () => {
    return (
        <div className="mx-12 h-[calc(100vh-2rem)] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
            <MessageList />
        </div>
    );
};

export default ChatWindow;