import React from 'react'
import { useDispatch } from 'react-redux';
import { addToOrder } from '../features/cartSlice';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


export default function PreviewContent({ food, setOpen }) {

  // const [count, setCount] = useState(1)
  const dispatch = useDispatch()
  // const [addons, setAddons] = useState([]);
  // const [price, setPrice] = useState(food.price)

  const addToCart = () => {

    const order = {
      id: food.id,
      name: food.name,
      description: food.description,
      type: food.type,
      price: food.price,
      image: food.image,
      // addOns: addons
    }

    // if (count > 1) {
    //   let i = 1;
    //   while (i < count) {
    //     dispatch(addToOrder(order));
    //     i++;
    //   }
    //  }

    dispatch(addToOrder(order));
    setOpen(false);
  }

  // const increment =()=>{
  //   setCount(count + 1)
  // }
  // const decrement =()=>{
  //   setCount(count - 1)
  // }

  // const handleCheckBox = (e, addon) => {
  //   if (e.target.checked === true) {
  //     setAddons([...addons, addon]);
  //     setPrice(prev => prev + addon.price)
  //   } else {
  //     setAddons(addons.filter(i => i !== addon));
  //     setPrice(prev => prev - addon.price)
  //   }
  // }

  // const test = food.addOns.map((addons, index) => (
  //   <div key={index} className='m-4 flex justify-between items-center'>
  //     <div className=' flex flex-col'>{addons.name} <span className=' text-sm font-extralight'>${addons.price}</span></div>
  //     <input type="checkbox" onChange={(e) => handleCheckBox(e, addons)} />
  //   </div>
  // ))



  return (
    <div className=' pb-12 h-full' style={{ backgroundColor: "#FFF7ED" }}>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {
          food.images?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex justify-center p-4'>
                <img className="relative h-[40vh] bg-center" src={item} alt={`food-${index}`} />
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>


      <div className="mx-auto p-4 ">
        <h1 className=' text-xl'>{food.name}</h1>
        <p className=' mt-2'>{food.description}</p>
        <h3 className=' text-xl mt-6 '>$ {food.price}</h3>
      </div>

      {/* <div className=' w-full p-4 bg-orange-200 text-xl'>
        <h1>Add ons</h1>
      </div> */}

      {/* <div className='mb-20'>
        {test}
      </div> */}

      <div className='flex w-full px-4 justify-around ' >

        <button className=' bg-orange-300 py-4 px-8 w-full rounded-xl' onClick={addToCart}>Add {food.price}
          {/* <span>${(price * count).toFixed(2)}</span> */}
        </button>
      </div>

    </div>
  )
}
