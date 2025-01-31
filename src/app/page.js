import Header from '../components/Header';
import MessageList from '../components/MessageList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <Header />
      <div className="mt-4">
        <MessageList />
      </div>
    </div>
  );
}