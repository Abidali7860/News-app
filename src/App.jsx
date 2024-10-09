import { useState } from 'react';
import NewsApp from './component/NewsApp';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NewsApp/>
    </>
  )
}

export default App
