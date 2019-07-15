import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends React.Component {
  state = {
    robots: robots,
    searchfield: ""
  };

  onSearchChange = e => {
    this.setState({
      searchfield: e.target.value
    });
  };

  render() {
    const filter = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Address Book!</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filter} />
      </div>
    );
  }
}

export default App;
