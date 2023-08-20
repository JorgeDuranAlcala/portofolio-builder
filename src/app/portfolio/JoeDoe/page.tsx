export default function Page() {
		return (
			<div className="w-full h-screen flex flex-col items-center justify-center p-8">
				<div className="w-full flex items-center gap-4">
					<h1 className="text-2xl">hello, Joe Doe</h1>
					<div className="flex flex-col items-center gap-4">
						<h2 className="text-xl font-semibold ">This is a generated page from the api</h2>
						 <button className="text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-6 py-3 mr-4">
								Click me     
             </button>
					</div>
				</div>
			</div>
		)
	}