import React, { Component } from "react";
import ImgDeco from "../assets/assets/Decoration.svg";
import HomeHelpPagination from "./HomeHelpPagination";

class HomeHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked1: true,
      isClicked2: false,
      isClicked3: false
    };
  }

  handleToggleBtn1 = () => {
    this.setState(state => {
      console.log("klik!");
      console.log(this.state.isClicked1);
      return {
        isClicked1: !state.isClicked1,
        isClicked2: false,
        isClicked3: false
      };
    });
  };
  handleToggleBtn2 = () => {
    this.setState(state => {
      console.log("klik!");
      console.log(this.state.isClicked2);
      return {
        isClicked1: false,
        isClicked2: !state.isClicked2,
        isClicked3: false
      };
    });
  };
  handleToggleBtn3 = () => {
    this.setState(state => {
      console.log("klik!");
      console.log(this.state.isClicked3);
      return {
        isClicked1: false,
        isClicked2: false,
        isClicked3: !state.isClicked3
      };
    });
  };

  render() {
    const { isClicked1, isClicked2, isClicked3 } = this.state;
    return (
      <section className="home-help">
        <h2 className="home-help-header">Komu pomagamy</h2>
        <img src={ImgDeco} alt="decoration" />
        <div className="help-btns-box">
          <button
            className="help-btn"
            onClick={this.handleToggleBtn1}
            click={isClicked1}
            // items={items1}
          >
            Fundacjom
          </button>
          <button
            className="help-btn"
            onClick={this.handleToggleBtn2}
            click={isClicked2}
            // items={items2}
          >
            Organizacjom pozarządowym
          </button>
          <button
            className="help-btn"
            onClick={this.handleToggleBtn3}
            click={isClicked3}
            // items={items3}
          >
            Lokalnym zbiórkom
          </button>
        </div>
        <p className="help-content">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        <HomeHelpPagination />
      </section>
    );
  }
}

export default HomeHelp;
