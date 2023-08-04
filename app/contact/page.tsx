import useTranslation from 'next-translate/useTranslation'

function Page() {
  const { t } = useTranslation('common')

  return (
    <div>
      <p>{t('contact')}</p>
    </div>
  );
}

export default Page;