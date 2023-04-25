import { useState, useEffect } from 'react';
import classNames from 'classnames';

const TypewriterEffect = ({ text }: { text: string }) => {
    const [visibleCount, setVisibleCount] = useState(0);
    const [letterColors, setLetterColors] = useState(Array(text.length).fill('text-transparent'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisibleCount((count) => count + 1);
        }, 100);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (visibleCount <= text.length) {
            const newColors = [...letterColors];
            newColors[visibleCount - 1] = 'text-black';
            setLetterColors(newColors);
        }
    }, [visibleCount]);

    return (
        <span>
            {text.split('').map((letter, index) => (
                <span
                    key={index}
                    className={classNames('inline-block', letterColors[index])}
                    style={{ animationDelay: `${index * 50}ms` }}
                >
                    {letter}
                </span>
            ))}
        </span>
    );
};
export default TypewriterEffect;
