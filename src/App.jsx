import Title from './assets/Title'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [product, setProduct] = useState([]);

  const [cartItem , setItem] = useEffect([]);
    
  useEffect(() => {
        fetch('product.json')
        .then((res) => res.json())
        .then((data) => data(data))
  }, []);
  return (
        
      <>
      <h1>shop</h1>
      </>
  )
}

export default App



