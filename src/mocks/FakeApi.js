import jerseyNegra from '../images/items/jerseyNegra.jpg'
import camperaRetroSkt from '../images/items/CamperaRetroSkt.png'
import purpleCargo from '../images/items/purpleCargo.png'
import NY_PurpleCap from '../images/items/NY_PurpleCap.jpg'
import nike1Purple from '../images/items/nike-air-jordan-1-court-purple-release-date-price-04.jpg'
import nike3pinegreen from '../images/items/nike-air-jordan-3-pine-green-release-date-price-01.jpg'
import nike1green from '../images/items/air-jordan-1-zoom-cmft-stadium-green.jpg'
import NYleagueEssential from '../images/items/NewEraNYLeagueEssential.jpg'
import JordanStormGloves from '../images/items/jordanHyperstormFleece.jpg'
import NewEraPrint9Cap from '../images/items/NewEraNYPrint9FortySnapbackCap.jpg'
import nikeGripGloves from '../images/items/NikeGripGloves.jpg'
import starterVioletBackPack from '../images/items/StarterBackPackBagRealViolet.jpg'

const productList = [
    {
        id:'01',
        title:'Rocawear Foresthills Jerséis negro',
        price:5000,
        pictureurl:jerseyNegra,
        category:'buzos',
        stock:20
    },
    {
        id:'02',
        title:'Campera Retro Skt',
        price:4900,
        pictureurl:camperaRetroSkt,
        category:'camperas',
        stock:16
    },
    {
        id:'03',
        title:'Easybird Purple Cargo Pants',
        price:5000,
        pictureurl:purpleCargo,
        category:'pantalones',
        stock:19
    },
    {
        id:'04',
        title:'47 MLB New York Snapback Cap Black',
        price:2400,
        pictureurl:NY_PurpleCap,
        category:'accesorios',
        stock:11
    },
    {
        id:'05',
        title:'Nike Air Jordan 1 Court Purple',
        price:29400,
        pictureurl:nike1Purple,
        category:'calzados',
        stock:10
    },
    {
        id:'06',
        title:'Nike Air Jordan 3 Pine Green',
        price:27500,
        pictureurl:nike3pinegreen,
        category:'calzados',
        stock:13
    },
    {
        id:'07',
        title:'New Era NY League Essential',
        price:3500,
        pictureurl:NYleagueEssential,
        category:'accesorios',
        stock:9
    },
    {
        id:'08',
        title:'Nike Air Jordan 1 Green',
        price:27900,
        pictureurl:nike1green,
        category:'calzados',
        stock:9
    },
    {
        id:'09',
        title:'Jordan Hyper Storm Fleece Gloves',
        price:3100,
        pictureurl:JordanStormGloves,
        category:'accesorios',
        stock:22
    },
    {
        id:'10',
        title:'New Era NY Print9 Forty Snapback Cap',
        price:3500,
        pictureurl:NewEraPrint9Cap,
        category:'accesorios',
        stock:22
    },
    {
        id:'11',
        title:'Nike Grip Gloves',
        price:3800,
        pictureurl:nikeGripGloves,
        category:'accesorios',
        stock:20
    },
    {
        id:'12',
        title:'Starter BackPack Bag Real Violet',
        price:6800,
        pictureurl:starterVioletBackPack,
        category:'accesorios',
        stock:10
    }
];

 export const getProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productList);
    },2000);
});