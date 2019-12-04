import React, { Component } from 'react';
import axios from 'axios'
import {category, token, setURL, levels} from './assets/config'

export default class App extends Component {
  state={
   categories: {},
   token: ''
  }

  // async getData (){
  //   try{
  //     const data = await fetch(this.state.url)
  //     const jsonData =  await data.json()
  //     this.setState({
  //       data : jsonData
  //     })

  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  async componentDidMount(){
    this.setState({
      categories: await category(),
      token: await token()
    })
  }

  render() {
    let results = this.state.token
    console.log(results)
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}
