import React, { Component } from 'react';

export default class App extends Component {
  state={
    url: 'https://opentdb.com/api.php?amount=50&type=boolean',
    data: ''
  }

  async getData (){
    try{
      const data = await fetch(this.state.url)
      const jsonData =  await data.json()
      this.setState({
        data : jsonData
      })

    }catch(error){
      console.log(error)
    }
  }
  componentDidMount=()=>{
    this.getData()
  }
  render() {
    console.log(this.state.data.results[0])
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}
