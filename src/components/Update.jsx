import React, { useState } from 'react'
import logo from "../images/coffee.png"
import axios from 'axios';
import { motion } from "framer-motion";


// export async function action({ request }) {
//     const formData = await request.formData()

//     const name = formData.get("name")
//     const description = formData.get("description")
//     const price = formData.get("price")
//     const images = formData.getAll("imageUpload")

//     console.log({images,name,description,price})

//     return null
// }

export default function Update() {

    const [imagePreviews, setImagePreviews] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [uploading, setUploading] = useState(false);
    const maxImages = 3;

    const handleImageChange = async (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (!selectedFiles) return
        // Check combined total does not exceed max
        if (imagePreviews.length + selectedFiles.length > maxImages) {
            alert(`You can only upload a maximum of ${maxImages} images.`);
            return;
        }

        
        const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
        setImagePreviews((prev) => [...prev, ...newPreviews]);
        const urls = await uploadToCloudinary(selectedFiles);
        setImageURLs(urls)
    };

    const uploadToCloudinary = async (files) => {
        const urls = [];
        setUploading(true);
        for (const file of files) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'image-uploader'); // Your unsigned preset

            try {
                const res = await fetch(
                    'https://api.cloudinary.com/v1_1/dwcha1sud/image/upload',
                    {
                        method: "post",
                        body: formData
                    }
                );
                const data = await res.json();

                if (!res.ok) {
                    console.error("Upload failed:", data);
                    continue;
                }
                urls.push(data.secure_url);
            } catch (err) {
                console.error('Upload error', err);
            }
        }
        setUploading(false);
        console.log(urls)
        return urls;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Upload first
        // const urls = await uploadToCloudinary(selectedImages);


        // Then send form data + URLs to your backend
        const form = e.target;
        const formData = {
            id: form.id.value,
            name: form.name.value,
            description: form.description.value,
            type: form.type.value,
            price: Number(form.price.value),
            images: imageURLs
        };
        console.log(formData)
        axios.post("https://menu-backend-2nhl.onrender.com/additem", formData).then((response) => {

            console.log(response.data)
        }).catch((Error) => {
            console.log(Error)
        });
        // Reset form fields
        form.reset();

        // Clear image states
        setImagePreviews([]);

        // Example: POST to your backend route or database

    };

    return (
        <div className='p-4'>
            <nav className=" flex justify-between p-4 mb-10 lg:px-40 font-medium text-xl bg-white z-[1]"  >
                <img src={logo} alt="" className='nav--logo' />
            </nav>

            <h1 className="text-[25px] text-black mt-8 mb-8">Add item</h1>
            <form onSubmit={handleSubmit}>

                <div className=''>
                    <div className=' mb-5'>
                        <label htmlFor="id" className="block mb-2 ">Merchant Id <span className="text-red-500">*</span></label>
                        <input type="text" name="id" id="id" className="w-full p-2 border border-black rounded-lg  " required />
                    </div>
                    <div className=' mb-5'>
                        <label htmlFor="type" className="block mb-2 ">Item Type <span className="text-red-500">*</span></label>
                        <input type="text" name="type" id="type" className="w-full p-2 border border-black rounded-lg  " required />
                    </div>
                    <div className=' mb-5'>
                        <label htmlFor="name" className="block mb-2 ">Name <span className="text-red-500">*</span></label>
                        <input type="text" name="name" id="name" className="w-full p-2 border border-black rounded-lg  " required />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="description" className="block mb-2 ">description <span className="text-red-500">*</span></label>
                        <input type="text" name="description" id="description" className="w-full p-2 border border-black rounded-lg  " required />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="price" className="block mb-2 ">price <span className="text-red-500">*</span></label>
                        <input type="text" name="price" id="price" className="w-full p-2 border border-black rounded-lg  " required />
                    </div>



                    {
                        imagePreviews.length > 0 ?
                            (
                                <div id="imageContainer" className='p-4  cursor-pointer border-black flex-col items-center justify-center ' onClick={() => document.querySelector("#imageUpload").click()}>
                                    <div className="mt-4 flex justify-center">
                                        {imagePreviews.map((src, index) => (
                                            <img
                                                key={index}
                                                src={src}
                                                alt={`preview-${index}`}
                                                className="w-24 h-24 object-cover rounded border border-gray-300"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ) :
                            (
                                <div id="imageContainer" className='p-4  cursor-pointer border-black flex-col items-center justify-center  max-w-[300px] ' onClick={() => document.querySelector("#imageUpload").click()}>
                                    <span className="block mb-2 text-black text-[20px]">Click To Upload Logo</span>
                                    <span className="block mb-2 text-gray-900 text-[12px]">File should not exceed 1MB</span>
                                    <input type="file" id="imageUpload" name="imageUpload" accept="image/*" multiple className='hidden' onChange={handleImageChange} />
                                </div>
                            )
                    }



                </div>
                <div className="flex justify-center mb-5 p-4 w-full">
                    <button type="submit" disabled={uploading} className='p-5 rounded-lg bg-yellow-500 text-white w-full flex justify-center items-center' >
                        {
                            uploading ? <BarLoader /> : "submit"
                        }
                        </button>
                </div>
            </form>
        </div>
    )
}


const variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  };
  
  const BarLoader = () => {
    return (
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="flex gap-1"
      >
        <motion.div variants={variants} className="h-8 w-2 bg-white" />
        <motion.div variants={variants} className="h-8 w-2 bg-white" />
        <motion.div variants={variants} className="h-8 w-2 bg-white" />
        <motion.div variants={variants} className="h-8 w-2 bg-white" />
        <motion.div variants={variants} className="h-8 w-2 bg-white" />
      </motion.div>
    );
  };
