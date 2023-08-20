export default async function Page() {
	
	async function onCreateDir(e: any) {
			await getProps()
	}

	return (
				<div>
					<button className="bg-green-400 py-4">Create dir</button>
				</div>
			)
}

const fs = require('fs/promises')
const path = require('path')

export async function getProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`

  // Props returned will be passed to the page component
	
	const dir_path = path.join("../../", "users")
		
	const res = await fs.mkdir(dir_path, { recursive: true  })
	console.log(res)
	return { props: { posts: [] } }
}
