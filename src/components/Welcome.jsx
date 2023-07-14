import { useEffect, useState } from 'react';
import { getApiData } from './data/getApiData';
//import galleryData from '../components/data/gallery_images.json'

export const Welcome = () => {
  const [ galleryData, setGalleryData] = useState([]); //(1)

  const loadData = async () => {
    const data = await getApiData( 'gallery_images')
    setGalleryData(data);
}

useEffect(() => { //(2) 
    // Load the menu links data from the API Gateway
    loadData();
}, []);

  return (
    <div className="scene" id="welcome">
        <article className="content">
        <div className="gallery">
        {
           galleryData.map( image => (
            <img  key={ image.alt } className={ image.className } src={ image.src } alt={ image.alt } />      
           ))
        }
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
        </article>
  </div>
  )
}


