import React from 'react';
import ReactDOM from 'react-dom/client';
import Article from './Article';
import Content from './components/Content';
import Firsat from './components/Firsat';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import './index.css';
import Kart from './Kart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <div id='bigBox'>
    <div className='container anaKutu'>
      <Header/>
    </div>
    <Navbar
      id='navMainbox'
      kadin="https://www.trendyol.com/butik/liste/1/kadin"
      erkek="https://www.trendyol.com/butik/liste/2/erkek"
      anneCocuk="https://www.trendyol.com/butik/liste/3/anne--cocuk"
      evMobilya="https://www.trendyol.com/butik/liste/12/ev--mobilya"
      süpermarket="https://www.trendyol.com/butik/liste/16/supermarket"
      kozmetik="https://www.trendyol.com/butik/liste/11/kozmetik"
      ayakkabiCanta="https://www.trendyol.com/butik/liste/9/ayakkabi--canta"
      saatAksesuar="https://www.trendyol.com/butik/liste/10/saat--aksesuar"
      elektronik="https://www.trendyol.com/butik/liste/5/elektronik"
      sporOutdoor="https://www.trendyol.com/butik/liste/22/spor--outdoor"
    />
    <hr id='hr'/>

    <Article />

    <div id='firsatMain' className='container'>
      <Firsat 
        firsat="https://www.trendyol.com/sr?fl=sepetteurunler"
        firsatImg="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/SepeteEnCOkEklenenler_202206291435.png"
      />
      <Firsat 
        firsat="https://www.trendyol.com/sr?fl=encokonecikanurunler"
        firsatImg="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/EnCOkONeCIkanlar_202206291435.png"
      />
      <Firsat 
        firsat="https://www.trendyol.com/flas-indirimler"
        firsatImg="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/FlasINdirimler_202206291435.png"
      />
    </div>
    
    <div className='container containerSection'>
    <Section
      cardLink="https://www.trendyol.com/sr?fl=ipekyol-kupon-firsatlari,twist-kupon-firsatlari"
      resimURL="https://cdn.dsmcdn.com/ty570/campaign/banners/original/614734/99ed26b330_0.jpg"
      divInfo= "Trendyol Collection - Yeni.."
    />
    <Section
      resimURL = "https://cdn.dsmcdn.com/ty571/pimWidgetApi/mobile_20221019140442_2282744TrendyolCollectionSuperIndirimler2282744mobile.jpg"
      divInfo = "Trendyol Collection - Yeni.."
    />
    <Section
      resimURL = "https://cdn.dsmcdn.com/ty570/campaign/banners/original/614735/9391da9049_0.jpg"
      divInfo = "Trendyol Collection - Yeni.."
    />
    <Section
      resimURL = "https://cdn.dsmcdn.com/ty554/pimWidgetApi/mobile_20221005083227_mobile202202271854571749822KadinMobile202201271801.jpg"
      divInfo = "Hotiç"
    />
    <Section
      resimURL = "https://cdn.dsmcdn.com/ty390/campaign/banners/original/603009/e85192fa32_0.jpg"
      divInfo = "Fenomenlerin Kozmetik S.."
    />
    <Section
      resimURL = "https://cdn.dsmcdn.com/ty558/pimWidgetApi/mobile_20221011152505_indir92.jpg"
      divInfo = "İpekyol ve Twist Sürpriz Fır.."
    />
  </div>
  
  <Kart />

  <div className='container containerSection'>
    <Section
      cardLink="https://www.trendyol.com/sr?fl=ipekyol-kupon-firsatlari,twist-kupon-firsatlari"
      resimURL="https://cdn.dsmcdn.com/ty570/campaign/banners/original/614734/99ed26b330_0.jpg"
      divInfo= "Trendyol Collection - Yeni.."
    />
    <Section
      resimURL = "https://cdn.dsmcdn.com/ty571/pimWidgetApi/mobile_20221019140442_2282744TrendyolCollectionSuperIndirimler2282744mobile.jpg"
      divInfo = "Trendyol Collection - Yeni.."
    />
    <Section
      resimURL = "https://cdn.dsmcdn.com/ty570/campaign/banners/original/614735/9391da9049_0.jpg"
      divInfo = "Trendyol Collection - Yeni.."
    />
    <Section
      resimURL = "https://cdn.dsmcdn.com/ty554/pimWidgetApi/mobile_20221005083227_mobile202202271854571749822KadinMobile202201271801.jpg"
      divInfo = "Hotiç"
    />
    <Section
      resimURL = "https://cdn.dsmcdn.com/ty390/campaign/banners/original/603009/e85192fa32_0.jpg"
      divInfo = "Fenomenlerin Kozmetik S.."
    />
    <Section
      resimURL = "https://cdn.dsmcdn.com/ty558/pimWidgetApi/mobile_20221011152505_indir92.jpg"
      divInfo = "İpekyol ve Twist Sürpriz Fır.."
    />
  </div>
  
  <div className='content'>
  <hr id='hr2'/>
    <Content />
  </div>
  <hr id='hr3'/>
  <div className='footer'>
    <Footer />
  </div>
    </div>
  </>
);
