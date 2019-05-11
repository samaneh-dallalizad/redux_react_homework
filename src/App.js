import React,{Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import store  from './store'
import {Provider} from 'react-redux'
import { connect } from 'react-redux';
import addModel from './actions/addModel'
import ModelDetails from './components/modelDetails'
import './components/models.css'

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}
class App extends Component{

  state = {
    value:""
  }

  updateSelection = (event) =>{  
    this.setState({value: event.target.value});
  }

  onAddModel = () => {
    if(this.state.value!=="")
      this.props.addModel({
        ...data[this.state.value],
        name: this.state.value
      });
  }
 
 
  render(){

    return (

          <div className="App">

            {this.props.models.map((model,index) => {
                return <ModelDetails model={model} key={index}/>
            })}
          
            <select onChange={this.updateSelection} value={this.state.value} >

            <option key={-1} value="">-- pick a model --</option>

            {Object.entries(data).map(([key,val]) => <option key={key} value={key} >{key} ({val.year})</option>)}              
              
            </select>
            <button onClick={this.onAddModel} disabled={this.state.value===""}>add</button>
          </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    models: state
  }
}

const ConnectedApp =  connect(mapStateToProps,{addModel})(App)

const container = () =>{
  return (
    <Provider store={store}>
      <ConnectedApp/>
    </Provider>
  )
}

export default container;