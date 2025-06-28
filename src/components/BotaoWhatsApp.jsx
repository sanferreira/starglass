import React from 'react';

const BotaoWhatsApp = () => {
    return (
        <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
        >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white flex items-center justify-center shadow-lg transition">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-7 h-7 md:w-8 md:h-8 fill-current"
                >
                    <path d="M16 .6C7.5.6.6 7.5.6 16c0 2.9.8 5.7 2.4 8.2L.6 31.4l7.4-2.4c2.4 1.4 5.1 2.1 7.9 2.1 8.5 0 15.4-6.9 15.4-15.4S24.5.6 16 .6zm0 28.2c-2.5 0-4.9-.7-7.1-2.1l-.5-.3-4.4 1.4 1.5-4.3-.3-.5C4.7 21 4 18.6 4 16 4 8.7 9.7 3 16 3s12 5.7 12 13-5.7 12.8-12 12.8zm7.1-9c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.4-.8 1.2-1 1.4-.2.2-.4.3-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.9-1.7-2.2-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.1-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.7-1.7-1-2.4-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5 0 1.5 1.1 3 1.3 3.2.2.3 2.2 3.3 5.4 4.6 3.2 1.3 3.2.9 3.8.8.6-.1 1.9-.8 2.1-1.6.3-.8.3-1.4.2-1.5 0-.1-.3-.2-.6-.3z" />
                </svg>
            </div>
        </a>
    );
};

export default BotaoWhatsApp;
