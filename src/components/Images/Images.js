import React, { useState,useEffect } from 'react';

const Image = () => {
    const [image, setImage] = useState([])
    useEffect(() =>{
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data =>{
            data = data.results[0].picture.large
            setImage(data)
        })      
    }, [])
    return (
        <div>
            <img style={{borderRadius:"50%"}} src={image} alt="Profile not found"/>
        </div>
    );
};

export default Image;