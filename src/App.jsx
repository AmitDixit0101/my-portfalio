import React from 'react'
import About from './component/about/About'
import Header from './component/header/Header'
//import Nav from './component/nav/Nav'
import Footer from './component/footer/Footer'
import Contact from './component/contact/Contact'
import Experiance from './component/experiance/Experiance'
import Portfalio from './component/portfalio/Portfalio'
import Services from './component/services/Services'
import Testimonial from './testimonial/Testimonial'
//import Testimonaial from './component/testimonaial/Testimonaial'//

const App = () => {
  return (
    <div>
<About/>
<Header/>
{/* <Nav/> */}
<Footer/>
<Contact/>
<Experiance/>
<Portfalio/>
<Services/>
<Testimonial/>
{/* <Testimonaial/> */}
    </div>
  )
}

export default App