import React, { Component } from "react";

class HomeHelpPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 3
    };
  }

  handleClick = (event, i) => {
    this.setState({
      currentPage: i
    });
    if (
      this.props.areClicked.isFundationsClicked === true ||
      this.props.areClicked.isOrganizationsClicked === true ||
      this.props.areClicked.isLocalsClicked === true
    ) {
      this.setState({
        currentPage: i
      });
    } else {
      this.setState({
        currentPage: 1
      });
    }
  };

  render() {
    const { currentPage, itemsPerPage } = this.state;
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentNames = this.props.data.slice(indexOfFirst, indexOfLast);
    const elements = currentNames.map((fundation, i) => {
      return (
        <div key={i} className="pagination-element">
          <div className="clearfix">
            <span className="pagination-header">{fundation.fundations}</span>
            <span className="pagination-content">{fundation.needs}</span>
          </div>
          <p className="pagination-header-small">{fundation.descriptions}</p>
        </div>
      );
    });
    const pageNumbers = [];
    let element;
    for (
      let i = 1;
      i <= Math.ceil(this.props.data.length / itemsPerPage);
      i++
    ) {
      if (this.props.data.length === 3) {
        element = "";
      } else {
        element = (
          <span
            className="pagination-page"
            key={i}
            onClick={e => this.handleClick(e, i)}
          >
            {i}
          </span>
        );
        pageNumbers.push(element);
      }
    }

    return (
      <div className="home-help-pagination">
        <div className="pagination-container">{elements}</div>
        <div className="pagination-pages">{pageNumbers}</div>
      </div>
    );
  }
}

export default HomeHelpPagination;
