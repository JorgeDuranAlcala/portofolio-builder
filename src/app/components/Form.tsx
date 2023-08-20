"use client"
import { useState } from 'react'

export function Form({...props}: any) {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [template, setTemplate] = useState('');
const [showTemplates, setShowTemplates] = useState(false);
	const [text, setText] = useState('');


	async function onSubmit(e:any) {
		e.preventDefault()
		const res = await fetch('/api/portfolio', {method: 'post', headers: {'Content-type': 'application/json'} , body: JSON.stringify({userName: name, text, template: template || 'Cool.tsx', email})});
		console.log(template);
		setName('');
		setEmail('')
		setText('')
	}

	return (
				<>
<form className="w-full max-w-lg mx-auto py-8 px-4" onSubmit={onSubmit}>
  <h2 className="text-2xl text-gray-800 font-bold mb-4">Create your own portfolio page</h2>
		<div className="mb-4">
		<button className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  onClick={e => setShowTemplates(prev => !prev)}>show templates</button>
		{showTemplates && (
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<img src="/simple.png"/>
							<div className="flex justify-center items-center">
							<button  className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"   onClick={() => setTemplate('Cool.tsx')}>Choose</button>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<img src="/Cool.png" />
							<div className="flex justify-center items-center">
							<button  className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"   onClick={() => setTemplate('Cool.tsx')}>Choose</button>
							</div>
						</div>
					</div>
			)}
	</div>
{ template && ( 
		<>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
      Name:
    </label>
    <input value={name}  onChange={e => setName(e.target.value)}  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your username" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
      Email:
    </label>
    <input value={email} onChange={e => setEmail(e.target.value)}  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
      Message:
    </label>
    <textarea value={text} onChange={e => setText(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your text here"></textarea>
  </div>
	<div className="mb-4">
	  <label className="block text-gray-700 font-bold mb-2" htmlFor="template">
      Templates:
    </label>
		<select onChange={e => setTemplate(e.target.value)} id="template">
			<option value="Cool.tsx">Cool Template</option>
			<option value="Simple.tsx">Simple template</option>
		</select>
	</div>
	</>
	)
	}

  <div className="flex items-center justify-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Submit
    </button>
  </div>
</form>	
				</>
			)	
}
