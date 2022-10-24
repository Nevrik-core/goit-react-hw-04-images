// import { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
// import { fetchImg } from '../../services/fetch';
import {Gallery, Wrapper} from './ImageGallery.styled'
// import { LoadMoreButton } from "components/LoadMoreButton/LoadMoreButton";


export const ImageGallery = ({ galleryItems }) => {
  console.log(galleryItems);
  return (
      <Wrapper>
        <Gallery >
        {galleryItems.map(pic => (
            
              <ImageGalleryItem
                  key={pic.id}
                  imgUrl={pic.webformatURL}
                  alt={pic.tags} />
        ))}
            
          </Gallery>
          {/* {pics.length > 0 && <LoadMoreButton nextPage={this.nextPage} />} */}
      </Wrapper>
    )

}

      
  
  
