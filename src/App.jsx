import  {useState} from "react";
import './App.css'
import {requestToGroqAI} from "./utils/groq";
import {Light as SyntaxHighLight} from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {FaSpinner} from "react-icons/fa";
function App() {
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(false);

  const handleSubmit = async() => {
    setLoading(true);
    const ai = await requestToGroqAI(content.value);
    setData(ai);
    setLoading(false);
  };

  return (
    <main className='flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto'>
      <h1 className='text-4xl text-indigo-500'>REACT|GROQ AI</h1>
      <form className='flex flex-col gap-4 py-4 w-full'>
        <input 
        placeholder='Ketik Permintaan Disini....'
        className='py-2 px-4 text-md rounded-md'
        id='content'
        type='text'
        />
        <button
        onClick={handleSubmit} 
        type='button'
        className={`flex items-center justify-center gap-2 ${loading ? 'bg-gray-400' : 'bg-indigo-500'} py-2 px-4 font-bold text-white rounded-md ${loading ? 'cursor-not-allowed' : ''}`}
        disabled={loading}>
          {loading ? <FaSpinner className="animate-spin" /> : 'Kirim'}
        </button>
      </form>
      <div className="max-w-xl w-full mx-auto">
        {data ? (
      <SyntaxHighLight language="swift" style={darcula} wrapLongLines="true">{data}</SyntaxHighLight>
        ) : null}
      </div>
    </main>
  )
}

export default App
