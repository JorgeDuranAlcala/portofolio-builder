export default function Page() {
		return (
			<div className="w-full flex flex-col items-center justify-center" styles={{minHeight: '100vh'}}>
				<div className="w-full flex items-center gap-4">
					<h1 className="text-2xl">hello, pablo</h1>
					<p>hehe</p>
					<div className="flex flex-col items-center gap-4">
						<h2 className="text-xl font-semibold ">This is a generated page from the api</h2>
						<button className="btn bg-red-500 text-white p-4">Click me</button>
					</div>
				</div>
			</div>
		)
	}