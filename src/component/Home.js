
import { CartState } from '../Context/Context'
import Filters from './Filters'
import SingleProduct from './SingleProduct'
import './styles.css'


const Home = () => {

  const { state: { product }, stateFilter: { byFastDelivery, byStock, byRating, sort, searchQuery } } = CartState()
  // console.log(product)

  const transformProduct = () => {
    let sortedProducts = product

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === 'lowtohigh' ? a.price - b.price : b.price - a.price
      )
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating)
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery.toLowerCase()))   
      console.log(sortedProducts)   
    }

    return sortedProducts;
  }

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {
          transformProduct().map((prod) => {
            return <SingleProduct prod={prod} key={prod.id} />
          })
        }
      </div>

    </div>
  )
}

export default Home