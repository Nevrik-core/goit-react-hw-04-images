import {GalleryItem, GalleryImg} from './ImageGalleryItem.styled'


export const ImageGalleryItem = ({imgUrl, alt}) => {


    return (
        <GalleryItem className="gallery-item">
             <GalleryImg src={imgUrl} alt={alt} />
        </GalleryItem>
    )
}