import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <main>
      <nav>
        <ol>
          <li><Link to ="/home">Home</Link></li>
          <li><Link to ="/products">Products</Link></li>
          <li><Link to ="/checkout">Checkout</Link></li>
        </ol>
      </nav>
    </main>
  )
}

export default Home