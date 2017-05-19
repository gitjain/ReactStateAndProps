import React, { Component } from 'react';

export class Header extends Component {
   constructor(){
       super();
       this.state = {
          name: "Myname",
          address: "MyAddress"
        }
    }
    handleChange(e){
        this.props.changeTitle(e.target.value);
    }

  render() {
    setTimeout(()=>{
        this.setState({name: "New Name",
                       address:"New Address"
            });},5000);
    return (
      <div>       
        <h2>Header {this.props.title} </h2>
        <h2>Name: {this.state.name}</h2>
         <h2>Address: {this.state.address}</h2>
         <input onChange={this.handleChange.bind(this)}/>
    </div>
    );
  }
}
