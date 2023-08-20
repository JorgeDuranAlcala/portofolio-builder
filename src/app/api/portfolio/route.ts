/*
export async function GET(request: Request) {
  return new Response('Hello, portfolio!')
}
*/

const fs = require("fs/promises")
const path = require('path')

export async function	GET(request: Request) {
	const { searchParams } = new URL(request.url);
  const nombreUsuario = searchParams.get('nombreUsuario') ?? "You";
	const templateName = searchParams.get('template') ?? "Simple.tsx";
	const text = searchParams.get('text') ?? 'hehe';
	const bp = path.join(process.cwd(), "src", "app", "portfolio", nombreUsuario)
	const { createPage } = require("../../templates/"+templateName);
	const content = createPage({nombreUsuario, text});
	await fs.mkdir(bp, {recursive: true});
	await fs.writeFile(path.join(bp, "page.tsx"), content)

	return new Response(content)
}

export async function POST(request: Request) {
	const body = await request.json();
	console.log(body);
const { userName, template } = body;
 const nu = userName.split(' ')[0] + userName.split(' ').slice(1).map((x: string) => {x = x?.at(0)?.toUpperCase() + x.slice(1); return x}).join(' ');
	const bp = path.join(process.cwd(), "src", "app", "portfolio", nu)
	const { createPage } = require("../../templates/"+template);
	const content = createPage(body);
	await fs.mkdir(bp, {recursive: true});
	await fs.writeFile(path.join(bp, "page.tsx"), content)
	return new Response('success')
}
