import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
        <div className="sticky top-0 bg-gray-100 dark:bg-gray-800 py-4 md:py-6 flex justify-between mx-4 md:mx-12 items-center z-50">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">Simple AI Chat</h1>
            <ThemeToggle />
        </div>
    );
}