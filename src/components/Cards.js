import React from 'react'
import Card from './Card'

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'




const cards = [
  {
    id: 1,
    title: 'Shukaku',
    image: image1,
    url: 'https://naruto.fandom.com/es/wiki/Shukaku',
    text: 'Shukaku (守鶴, Shukaku) también conocido como el Una Cola (一尾, Ichibi)'
  },
  {
    id: 2,
    title: 'Matatabi',
    image: image2,
    url: 'https://naruto.fandom.com/es/wiki/Matatabi',
    text: 'Matatabi (又旅, Matatabi) conocido como el Dos Colas (ニ尾, Nibi)'
  },
  {
    id: 3,
    title: 'Isobu',
    image: image3,
    url: 'https://naruto.fandom.com/es/wiki/Isobu',
    text:'Isobu (磯撫, Isobu) también conocido como el Tres Colas (三尾, Sanbi)'
  },
  {
    id: 4,
    title: 'Son Gokū',
    image: image4,
    url: 'https://naruto.fandom.com/es/wiki/Son_Gok%C5%AB',
    text:'Son Gokū (孫悟空, Son Gokū) también conocido como el Cuatro Colas (四尾, Yonbi)'
  },
  {
    id: 5,
    title: 'Kokuō',
    image: image5,
    url: 'https://naruto.fandom.com/es/wiki/Koku%C5%8D',
    text:'Kokuō (穆王, Kokuō), conocido como el Cinco Colas (五尾, Gobi)'
  },
  {
    id: 6,
    title: 'Saiken',
    image: image6,
    url: 'https://naruto.fandom.com/es/wiki/Saiken',
    text:'Saiken (犀犬, Saiken) también conocido como el Seis Colas (六尾, Rokubi)'
  },
  {
    id: 7,
    title: 'Chōmei',
    image: image7,
    url: 'https://naruto.fandom.com/es/wiki/Ch%C5%8Dmei',
    text:'Chōmei (重明, Chōmei) también conocido como el Siete Colas (七尾, Nanabi, Shichibi)'
  },
  {
    id: 8,
    title: 'Gyūki',
    image: image8,
    url: 'https://naruto.fandom.com/es/wiki/Gy%C5%ABki',
    text:'Gyūki (牛鬼, Gyūki) también conocido como el Ocho Colas (八尾, Hachibi)'
  },
  {
    id: 9,
    title: 'Kurama',
    image: image9,
    url: 'https://naruto.fandom.com/es/wiki/Kurama',
    text:'Kurama (九喇嘛, Kurama), también conocido como el Nueve Colas (九尾, Kyūbi)'
  },
  {
    id: 10,
    title: 'El Diez Colas',
    image: image10,
    url: 'https://naruto.fandom.com/es/wiki/Diez_Colas_(Kaguya_%C5%8Ctsutsuki)',
    text:'El Diez Colas (十尾 Jūbi) es la fusión de Kaguya Ōtsutsuki y el Dios Árbol de la Tierra'
  },
  
]


function Cards() {
  return (
    <div className="container d-flex justify-evenly-space-between align-items-center">
        <div className="row">
            {
              cards.map(cards => (
                <div className="col-md-4" key= {cards.id}>
               <Card title={cards.title} imageSource={cards.image} url={cards.url} text={cards.text} />  
            </div>
              ))
            }
        </div>
    </div>
  )
}

export default Cards