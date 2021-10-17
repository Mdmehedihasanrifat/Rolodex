import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import CardList from "./components/cardlist/CardList";
import './components/cardlist/card-list.css';
import Search from "./components/search/Search";
class App extends Component{

    constructor() {
        super();

        this.state={
            monsters:[],
            search:[]
        };
    }



    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>{this.setState({monsters:data})

            }
            )
    }

    render() {
     const {monsters,search}=this.state;
     const monster=monsters.filter(monster=>monster.name.toString().toLowerCase().includes(search.toString().toLowerCase()));

    return (
        <div className="App">

                 <Search placeholder="Search monster"  handleChange={(e)=>{
                     this.setState({search:e.target.value})}}></Search>
                <div className="card-list">
                    {monster.map(monsters=>
                    <CardList className="card-list" key={monsters.id}props={monsters}/>)
                 }

                </div>

        </div>
    );
  }
}

export default App;
