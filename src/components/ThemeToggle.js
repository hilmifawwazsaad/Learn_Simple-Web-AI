    "use client"

    import { useState, useEffect } from 'react';
    import { MdDarkMode } from "react-icons/md";
    import { MdLightMode } from "react-icons/md";

    const ThemeToggle = () => {
        const [isDarkMode, setIsDarkMode] = useState(false);

        useEffect(() => {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }, []);

        const toggleDarkMode = () => {
            setIsDarkMode((prev) => {
                const newMode = !prev;
                if (newMode) {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                }
                return newMode;
            });
        };

        return (
            <button
                onClick={toggleDarkMode}
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none"
            >
                {isDarkMode ? <MdDarkMode className="text-lg"/> : <MdLightMode className="text-lg text-black"/>}
            </button>
        );
    };

    export default ThemeToggle;