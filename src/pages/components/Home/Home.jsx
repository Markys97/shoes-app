import Baniere_tpl from "../../../entities/products/components/Baniere_tpl/Baniere_tpl"
import SectionListProduct from "../../../widgets/components/SectionListProduct/SectionListProduct"

function Home() {
  return (
    <main className='home-page'>
      <div className="home-page__container wrapper">
        <div className="home-page__content">
          {/* component Banier (publicite) */}
              <Baniere_tpl/>
              <SectionListProduct/>
         
        </div>
      </div>
    </main>
  )
}

export default Home