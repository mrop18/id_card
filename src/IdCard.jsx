import React, { useState , useRef } from 'react'
import './IdCard.css'

const IdCard = () => {
    const inputRef = useRef(null)
    const [image, setImage] = useState("")

    const handleImageClick = () =>{
        inputRef.current.click();
    }

    const handleImageChange = (e) =>{
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setImage(file);
        } else {
            alert('Invalid file type or no file selected.');
        }
    }

  return (
    <>
    <div className='mn-container'>
        <div className='box-container' >
            <span></span>
            <div className='company-name'>Company Name</div>
            
            <div className='image-input' onClick={handleImageClick}>
                {image ? <img  src={URL.createObjectURL(image)} alt="" /> : <img src="https://repository-images.githubusercontent.com/229240000/2b1bba00-eae1-11ea-8b31-ea57fe8a3f95" alt="" />}
            </div> 
            <div className='employee-name'>Your Name</div>
            <div className='employee-post'>Your Post</div>
            <div className='employee-num'>Your Mobile Number</div>
            <div className='company-add'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nulla.</div>

            <input type="file" ref={inputRef} style={{display: 'none'}} onChange={handleImageChange}/>
        </div>
    </div>
    
    </>
    
  )
}

export default IdCard