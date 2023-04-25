import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TypewriterEffect from '../shared/typeWriter';
import languages from '../../../public/locales/languages.json';

const WelcomePage = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const [showGreeting, setShowGreeting] = useState(false);


    const currentLanguage = i18n.language;

    const languageName = languages["languages"][currentLanguage as keyof typeof languages["languages"]]["nativeName"];

    var SUPPORTED_LANGUAGES = ['en', 'es'];

    useEffect(() => {
        // wait for typewriter animation to complete
        setTimeout(() => {
            setShowGreeting(true);
        }, (t('welcome.title').length + 1) * 500); // add 1 to length to account for space at the end of the title
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center">
                {showGreeting ? (
                    <p> {t('welcome.detectedLanguage', { language: languageName })} <br />
                        {SUPPORTED_LANGUAGES.includes(currentLanguage) ? t('welcome.languageSupported') : t('welcome.languageNotSupported', { language: languageName })}
                    </p>
                ) : (
                    <TypewriterEffect text={t('welcome.title')} />
                )}
            </h1>
        </div>
    );
};

export default WelcomePage;
