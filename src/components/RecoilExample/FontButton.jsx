import React from 'react';
import { useRecoilState } from 'recoil';
import { fontSizeState } from './store';
const FontButton = () => {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    return (
        <button
            onClick={() => setFontSize((size) => size + 1)}
        >
            Click to Enlarge
        </button>
    )
};

export default FontButton;