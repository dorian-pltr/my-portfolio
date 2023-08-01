import useTranslation from 'next-translate/useTranslation'

function Home() {
    const { t } = useTranslation('common')

    return (
        <div>
            <p>{t('welcome')}</p>
        </div>
    );
}

export default Home;