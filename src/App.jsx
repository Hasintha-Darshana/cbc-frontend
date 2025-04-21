
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
      <Header />
      <ProductCard name ="Gaming Laptop" price="1000" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." pic={"https://picsum.photos/id/1/200/300"}/>
    </>
  )
}

export default App
