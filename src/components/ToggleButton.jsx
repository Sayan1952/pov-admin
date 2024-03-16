import React, { useState } from 'react';

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);
    };

    return (
        <button
            onClick={toggleButton}
            className={`relative inline-block w-12 h-6 shadow rounded-full border border-gray-400 transition-colors duration-300 ${isActive ? 'bg-[#2BA98B]' : 'bg-[#d5f2eb]'
                }`}
        >

            <span
                className={`absolute inset-y-0 left-0 shadow flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${isActive ? 'translate-x-6' : 'translate-x-0'
                    }`}
            >
            </span>
        </button>
    );
};

export default ToggleButton;
