export function createPage(props: any) {

	return `export default function Page() {
		return (
      <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center py-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
                Welcome to ${props.userName}
              </h1>
              <p className="mt-5 text-xl text-gray-500">
               ${props.text} 
              </p>
							<p>${props.email}</p>
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
		)
	}`

}
