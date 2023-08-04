import useTranslation from 'next-translate/useTranslation'

function Page() {
  const { t } = useTranslation('common')

  return (
    <div>
      <p>{t('about')}</p>
    </div>
  );
}

export default Page;