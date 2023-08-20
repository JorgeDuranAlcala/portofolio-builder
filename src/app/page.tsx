import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center py-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
                Welcome to My Awesome Landing Page
              </h1>
              <p className="mt-5 text-xl text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi lorem, posuere a nunc
                a, porttitor aliquet quam.
              </p>
              <div className="mt-8">
                <Link href="/signup" className="text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-6 py-3 mr-4">
                    Sign Up
                </Link>
                <Link  href="/login" className="text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-6 py-3 mr-4" >
                    Login
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://via.placeholder.com/600x400.png?text=Placeholder+Image"
                alt="Placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
