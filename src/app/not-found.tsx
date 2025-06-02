export default function NotFound() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-gray-800 dark:text-gray-200'>
          404
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-400 mt-4'>
          Page not found
        </p>
        <a
          href='/'
          className='mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
