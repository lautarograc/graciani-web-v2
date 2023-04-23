import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';



const Typewriter = ({ text }: { text: string }) => {
    const [phrase, setPhrase] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            index < text.length && setPhrase((prev) => prev + text.charAt(index));
            setIndex((prev) => prev + 1);
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [index]);

    return <span>{phrase}</span>;
};

const WelcomePage = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const currentLanguage = i18n.language;

    const supportedLanguageText =
        (language: string) => {
            // if language is not en or es
            if (language !== 'en' && language !== 'es') {
                return t('welcome.languageNotSupported');
            }
            else {
                return t('welcome.languageSupported');
            }
        };
    return (
        // with tailwind
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center">
                <Typewriter text={t('welcome.title')} />
            </h1>
            <h2 className="text-2xl font-bold text-center">
                <Typewriter text={supportedLanguageText(currentLanguage)} />
            </h2>
        </div>
    );
};

export default WelcomePage;
