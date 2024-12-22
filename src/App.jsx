import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import BgImage from './assets/bg.png'
import Equipments from './components/Equipments/Equipments';
import Banner from './components/Banner/Banner';
import TabComp from './components/Tab/TabComp';
import Testimonials from './components/Testimonials/Testimonials';
import Banner2 from './components/Banner/Banner2';

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

import img1 from './assets/2.png';
import img2 from './assets/3.png';

const BannerData = {
  image: img1,
  title: "The Importants To Take Care Of Yourself",
  subtitle: "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus."
};

const Banner2Data = {
  image: img2,
  title: "The Importants To Take Care Of Yourself",
  subtitle: "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus."
};



const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div style={bgStyle}>
        <Navbar/>
        <Hero/>
      </div>
        <Equipments/>
        <Banner {...BannerData}/>
        <TabComp/>
        <Banner {...Banner2Data}/>
        <Testimonials/>
        <Banner2/>
    </div>
  )
}

export default App