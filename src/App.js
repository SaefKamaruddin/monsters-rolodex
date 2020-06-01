import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.components";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      //initial monster state is an empty array, will fetch data from an api
      monsters: [],
      searchField: "",
    };
  }

  // lifecycle method: methods that get called at diffeerent stateges of when a compenet gets rendered
  // componentDidMount occurs when react renders component renders onto DOm for the first time
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch a response and returns data in json format
      .then((response) => response.json())

      //returns to the body
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
