import React,{Component}  from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends  Component{
    constructor() {
        super();
        this.state = {
            monsters: [],
            searhField: ''
        }
        
        // this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
         .then( response => response.json())
         .then(user => this.setState({monsters: user}));
    }

    handleChange = (event) => {
        this.setState({searhField: event.target.value});
    }

    render() {
        const { monsters, searhField } = this.state;
        const filterMonster = monsters.filter( monster => monster.name.toLowerCase().includes(searhField.toLowerCase()));
        return (
            <div className="App">
            <h1>Monters Rolodex</h1>
            <SearchBox placeHolder="search monsters" handleChange={this.handleChange } />
            <CardList monsters={filterMonster} />
            </div>
        );
    }
}
export  default  App
