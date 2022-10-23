import { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { fetchImg } from '../../services/fetch';
import {Gallery} from './ImageGallery.styled'


export class ImageGallery extends Component {

    state = {
        pics: [],
    }

  
    
  // async componentDidMount() {
  
  //   try {
  //     const pics = await fetchImg('ukraine');
  //   this.setState({pics})
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  async componentDidUpdate(prevProps) {
    const { searchQuery } = this.props;

    
      try {
        const pics = await fetchImg(searchQuery);
        if (searchQuery !== '' && prevProps.searchQuery !== searchQuery) {
          this.setState({ pics })
       }
      } catch (error) {
        console.log(error)
      }
    
    
    
  
 }
 
    render() {
 const {pics} = this.state

        return (
        <Gallery className="gallery">
                {pics.map(pic => (
                    <ImageGalleryItem
                        key={pic.id}
                        imgUrl={pic.webformatURL}
                        alt={pic.tags} />
        ))}
            
        </Gallery>
    )
  }
  
}