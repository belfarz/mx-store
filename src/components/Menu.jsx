import React,{useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import FoodCard from './FoodCard';
import Header from './Header';
import axios from 'axios';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sampledata, setSampleData] = useState([])

  useEffect(()=>{
    axios.get("https://menu-backend-2nhl.onrender.com/api/store").then((response)=>{
      setSampleData(response.data)
      console.log(response.data)
    }).catch((Error)=>{
      console.log(Error)
    })

  },[])
  
  const sampleData = [
    // 📱 iPhone
    {
      id: "200",
      name: "iPhone 13 (128GB, (PRODUCT)RED)",
      description: "6.1-inch Super Retina XDR display, A15 Bionic chip, 5G capable, and dual-camera system.",
      type: "iphone",
      price: 799.00,
      image: "https://res.cloudinary.com/dwcha1sud/image/upload/v1746714085/njlmecnwvly8wfeqwuyn.png",
      addOns: [
        { id: "1", name: "AppleCare+", price: 149.00 },
        { id: "2", name: "MagSafe Charger", price: 39.00 },
        { id: "3", name: "Silicone Case", price: 49.00 }
      ]
    },
    {
      id: "201",
      name: "iPhone 13 Pro Max (256GB, Sierra Blue)",
      description: "6.7-inch Super Retina XDR display with ProMotion, A15 Bionic chip, and advanced camera system.",
      type: "iphone",
      price: 1099.00,
      image: "https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_SX679_.jpg",
      addOns: [
        { id: "1", name: "Leather Wallet with MagSafe", price: 59.00 },
        { id: "2", name: "Screen Protector", price: 29.00 },
        { id: "3", name: "Lightning to USB-C Cable", price: 19.00 }
      ]
    },
    {
      id: "202",
      name: "iPhone 12 Pro Max (256GB, Graphite)",
      description: "6.7-inch Super Retina XDR display, A14 Bionic chip, and LiDAR scanner for Night mode portraits.",
      type: "iphone",
      price: 999.00,
      image: "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_SX679_.jpg",
      addOns: [
        { id: "1", name: "MagSafe Duo Charger", price: 129.00 },
        { id: "2", name: "Clear Case with MagSafe", price: 49.00 },
        { id: "3", name: "USB-C Power Adapter", price: 19.00 }
      ]
    },
  
    // 📱 Samsung
    {
      id: "203",
      name: "Samsung Galaxy S21 5G (128GB, Phantom Gray)",
      description: "6.2-inch Dynamic AMOLED 2X display, Exynos 2100 processor, and pro-grade camera system.",
      type: "samsung",
      price: 699.99,
      image: "https://m.media-amazon.com/images/I/81kfA-GtWwL._AC_SX679_.jpg",
      addOns: [
        { id: "1", name: "Samsung Care+", price: 129.00 },
        { id: "2", name: "Wireless Charger", price: 59.99 },
        { id: "3", name: "Protective Standing Cover", price: 39.99 }
      ]
    },
    {
      id: "204",
      name: "Samsung Galaxy S21 Ultra 5G (256GB, Phantom Black)",
      description: "6.8-inch Dynamic AMOLED 2X display, 108MP camera, and S Pen support.",
      type: "samsung",
      price: 1199.99,
      image: "https://m.media-amazon.com/images/I/91dLTREdG1L._AC_SX679_.jpg",
      addOns: [
        { id: "1", name: "S Pen", price: 49.99 },
        { id: "2", name: "Silicone Cover", price: 29.99 },
        { id: "3", name: "45W Power Adapter", price: 49.99 }
      ]
    },
    {
      id: "205",
      name: "Samsung Galaxy S21 FE 5G (128GB, Olive)",
      description: "6.4-inch AMOLED display, Snapdragon 888 processor, and triple-lens camera system.",
      type: "samsung",
      price: 599.99,
      image: "https://m.media-amazon.com/images/I/81cHpJNr07L._AC_SX679_.jpg",
      addOns: [
        { id: "1", name: "Clear View Cover", price: 49.99 },
        { id: "2", name: "Wireless Charger Duo", price: 89.99 },
        { id: "3", name: "Galaxy Buds Pro", price: 199.99 }
      ]
    },
  
    // 👕 Clothes
    {
      id: "206",
      name: "Levi's Men's 501 Original Fit Jeans",
      description: "Iconic straight fit jeans with button fly and classic five-pocket styling.",
      type: "clothes",
      price: 59.99,
      image: "https://m.media-amazon.com/images/I/81eA+2e7UOL._AC_SX679_.jpg",
      addOns: [
        { id: "1", name: "Leather Belt", price: 25.00 },
        { id: "2", name: "Graphic T-Shirt", price: 19.99 },
        { id: "3", name: "Denim Jacket", price: 89.99 }
      ]
    },
    {
      id: "207",
      name: "Levi's Men's 501 '90s Jeans",
      description: "Slouchy, looser fit reflective of the '90s era's carefree aesthetic.",
      type: "clothes",
      price: 98.00,
      image: "https://m.media-amazon.com/images/I/71K+0+5R7PL._AC_SX679_.jpg",
      addOns: [
        { id: "1", name: "Vintage T-Shirt", price: 29.99 },
        { id: "2", name: "Canvas Belt", price: 19.99 },
        { id: "3", name: "Plaid Shirt", price: 39.99 }
      ]
    },
    {
      id: "208",
      name: "Levi's Men's 501 Shrink-to-Fit Jeans",
      description: "Original shrink-to-fit jeans that mold to your body over time.",
      type: "clothes",
      price: 69.50,
      image: "https://m.media-amazon.com/images/I/71xA6Zz6G9L._AC_SX679_.jpg",
      addOns: [
        { id: "1", name: "Denim Shirt", price: 49.99 },
        { id: "2", name: "Leather Wallet", price: 39.99 },
        { id: "3", name: "Beanie Hat", price: 19.99 }
      ]
    },
  
    // 👟 Shoes
    {
      id: "209",
      name: "Nike Air Max 90 Men's Shoes - White/Team Red",
      description: "Classic design with visible Air cushioning for all-day comfort.",
      type: "shoes",
      price: 130.00,
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7e5d9a3f-1b2e-4f4e-9d6c-7e5d9a3f1b2e/air-max-90-mens-shoes-KkLcGR.png",
      addOns: [
        { id: "1", name: "No-Show Socks (3-Pack)", price: 12.00 },
        { id: "2", name: "Shoe Cleaner Kit", price: 15.00 },
        { id: "3", name: "Extra Laces", price: 5.00 }
      ]
    },
    {
      id: "210",
      name: "Nike Air Max 90 Men's Shoes - White/Light Smoke Grey",
      description: "Produced at the intersection of art, music and culture, this champion running shoe helped define the '90s.",
      type: "shoes",
      price: 130.00,
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7e5d9a3f-1b2e-4f4e-9d6c-7e5d9a3f1b2e/air-max-90-mens-shoes-KkLcGR.png",
      addOns: [
        { id: "1", name: "Ankle Socks (3-Pack)", price: 12.00 },
        { id: "2", name: "Shoe Deodorizer", price: 10.00 },
        { id: "3", name: "Shoe Horn", price: 7.00 }
      ]
    },
    {
      id: "211",
      name: "Nike Air Max 90 Premium - Phantom/Burgundy Crush",
      description: "Premium materials and classic design for a timeless look.",
      type: "shoes",
      price: 140.00,
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7e5d9a3f-1b2e-4f4e-9d6c-7e5d9a3f1b2e/air-max-90-mens-shoes-KkLcGR.png",
      addOns: [
        { id: "1", name: "Sneaker Protector Spray", price: 15.00 },
        { id: "2", name: "Shoe Trees", price: 20.00 },
        { id: "3", name: "Lace Locks", price: 5.00 }
      ]
    }
  ];
  
  


  const typeFilter = searchParams.get("type")
  const filteredData = typeFilter ?
    sampledata.filter(char => char.type.toLowerCase() === typeFilter) :
    sampledata

  function setTypeFilter(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }


  const fullMenu = filteredData.map((food, index) => (
    <FoodCard key={index} food={food} />
  ));


  return (
    <>
    <Header />
    <div className='mt-20'>
      <div className='flex overflow-x-hidden mt-3 px-2 lg:px-[10%]'>
        <button
          className='selection px-6 py-2'
          onClick={() => setTypeFilter("type", null)}
        >clothes</button>
        <button
          className='selection px-4 py-2'
          onClick={() => setTypeFilter("type", "drinks")}
        >iphones</button>
        <button
          className='selection px-4 py-2'
          onClick={() => setTypeFilter("type", "brunch")}
        >samsungs</button>
        <button
          className='selection px-4 py-2'
          onClick={() => setTypeFilter("type", "pastries")}
        >shoes</button>
      </div>

      <div className='flex flex-wrap justify-center items-center mt-4'>
        {fullMenu}
      </div>
    </div>
    </>
  )
}
