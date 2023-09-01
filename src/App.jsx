import React from 'react';
import Card from './component/Card';

function App(){
  return(
    <body className="bg-white">
      <h1 className="text-2xl font-bold p-2 text-center text-[#222222]">BEST FOOD RECOMMENDATIONS IN JOGJA</h1>

      <section className='parent-section'>

      
        <Card
                imageSrc="../asset/img/apem.jpg"
                imageAlt="Apem"
                title="Javanese Apem Cake"
                description="Apem (also known as appam in its native India) is a food made from rice flour that is left overnight by mixing eggs, coconut milk, sugar and tape and a little salt then burned or steamed. The Ngapem tradition was started by the Kanoman Palace in Cirebon, since the time of Sunan Gunung Jati as a form of spreading Islam in Java."
              />
              <br></br>
        <Card
                imageSrc="../asset/img/bakmijawa.jpg"
                imageAlt="Bakmi"
                title="Javanese Noodles"
                description="Javanese noodles or Javanese noodles are boiled noodles cooked with Javanese spices from Java, Indonesia. Most Javanese noodles are boiled noodles, so abroad (Malaysia and Singapore) Javanese noodles are known as me rebus, but there are actually variations of fried noodles from Javanese noodles."
              />
              <br></br>
        <Card
                imageSrc="../asset/img/geplak.jpg"
                imageAlt="Geplak"
                title="Geplak Bantul Cake"
                description="Jogja Geplak is one of the traditional snacks originating from Jogja. This snack is famous for its chewy texture and delicious sweetness. Made from natural ingredients such as shredded coconut, coconut sugar, and water, Geplak is a popular dish that is often found in various events or as souvenirs typical of Jogja."
              />
              <br></br>
        <Card
                imageSrc="../asset/img/Gudeg.jpg"
                imageAlt="Gudeg"
                title="Gudeg"
                description="Gudeg has been known by the people of Indonesia, especially as a typical food from Yogyakarta City. This popularity is also what makes Yogyakarta known as Gudeg City. Gudeg is a traditional food made from young jackfruit (jackfruit) boiled for several hours with coconut sugar and coconut milk. Equipped with various additional spices."
              />
              <br></br>
        <Card
                imageSrc="../asset/img/sateklathak.jpg"
                imageAlt="sateklathak"
                title="Sate Kltahak"
                description="Sate Klatak is a type of typical food originating from Bantul Regency made from mutton. With the specification of skewers made of iron bicycle bars. How to cook by burning and only seasoned with salt. How to cook each portion or menu generally consists of 2 skewers to 4 skewers."
              />
              <br></br>
        <Card
                imageSrc="../asset/img/sotokadipiro.jpg"
                imageAlt="sotokadipiro"
                title="Soto Kadipiro"
                description="Soto Kadipiro was originally sold under Karto Wijoyo. Around 1928 he settled in the Kadipiro area. Until now, it has been the third generation, namely Sri Sundari's mother (59). Named Soto Kadipiro because it takes the name of the place, namely Kadipiro. Soto Kadipiro became legendary because it maintained the deliciousness of soto for more than 90Â years."
              />
      </section>
    </body>
  )
}

export default App;
