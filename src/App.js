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
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
         .then( response => response.json())
         .then(user => this.setState({monsters: user}));
    }
    render() {
        const { monsters, searhField } = this.state;
        const filterMonster = monsters.filter( monster => monster.name.toLowerCase().includes(searhField.toLowerCase()));
        return (
            <div className="App">
            <SearchBox placeHolder="search monsters" handleChange={ (event) => this.setState({searhField: event.target.value}) } />
            <CardList monsters={filterMonster} />
            </div>
        );
    }
}
export  default  App
