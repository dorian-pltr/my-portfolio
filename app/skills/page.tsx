import useTranslation from 'next-translate/useTranslation'

function Page() {
  const { t } = useTranslation('common')

  return (
    <div>
      <p>{t('skills')}</p>
    </div>
  );
}

export default Page;