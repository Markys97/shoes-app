
import SearchProductInput from "../../../features/products/SearchProductInput/SearchProductInput"
import ListProduct from "../../../widgets/components/ListProduct/ListProduct"
import Baniere from "../../../widgets/components/Baniere/Baniere"
import './style/style.css'
import { useSelector } from "react-redux"

function Home() {
  const listProduct = useSelector(state => state.product.listProduct)

  return (
    <main className='home-page'>
      <div className="home-page__container wrapper">
        <div className="home-page__content">
          {/* component Banier (publicite) */}
              <Baniere/>
              <section className="home-main">
                  <div className="home-main__header">
                      <h2 className="home-main__title">Все кроссовки</h2>
                      {/* component InputSearch */}
                      <form className="form">
                          <div className="form__item">
                                  <SearchProductInput/>
                          </div>
                      </form>
                  </div>

                  {/* component ListProduct */}
                  <ListProduct hasFilter={true} products={listProduct}/>
              </section>
         
        </div>
      </div>
    </main>
  )
}
                                            
export default Home