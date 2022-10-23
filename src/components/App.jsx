import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";


export class App extends Component {

 state = {
    input: '',
  };

  formSubmit = input => {
    this.setState({ input });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmit}/>
        <div>
          <ImageGallery searchQuery={this.state.input}/>
      </div>
      </div>
      
    
    
          
  
  );
 }
};
