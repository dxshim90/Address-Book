import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";

class App extends React.Component {
  state = {
    robots: [],
    searchfield: ""
  };

  async componentDidMount() {
    try {
      const request = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await request.json();
      this.setState({
        robots: response
      });
    } catch (err) {
      console.log(err);
    }
  }

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
    if (this.state.robots.length === 0) {
      return <h1>LOADING!</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Address Book!</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filter} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
