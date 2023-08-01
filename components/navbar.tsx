import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const Navbar = () => {
  const { t } = useTranslation('common')
  return (
    <nav className='bg-gray-800 p-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link href='/' className='text-white font-semibold text-xl'>Logo</Link>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center space-x-4'>
              <Link href='/' className='text-white hover:bg-blue-700 px-3 py-2 rounded-md'>{t('home')}</Link>
              <Link href='/' className='text-white hover:bg-blue-700 px-3 py-2 rounded-md'>{t('about')}</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar