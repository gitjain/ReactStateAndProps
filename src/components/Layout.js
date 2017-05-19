import React, { Component } from 'react';
import {Header} from './Header';
import {Footer} from './Footer';

export class Layout extends Component {
 constructor(){
       super();
       this.state = {
          title: "My title",
        }
    }
    changeTitle(title){
        this.setState({title})
    }
  render() {
      return (
      <div>
       <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Footer/>
       </div>
    );
  }
}
