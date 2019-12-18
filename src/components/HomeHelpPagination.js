import React, { Component } from "react";

class HomeHelpPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true,
      paginationElements: [
        {
          fundations: "Fundacja 'Dbam o Zdrowie'",
          descriptions:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji finansowej.",
          needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
          fundations: "Fundacja 'Dla dzieci'",
          descriptions: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
          needs: "ubrania, meble, zabawki"
        },
        {
          fundations: "Fundacja 'Bez domu'",
          descriptions:
            "Cel i misja: Pomoc osobom nieposiadającym miejsca zamieszkania.",
          needs: "ubrania, jedzenie, ciepłe koce"
        },
        {
          fundations: "Fundacja 'Bez kota'",
          descriptions:
            "Cel i misja: Zwiększenie adopcji kotów przez silne, niezależne kobiety.",
          needs: "kotki, kotki, kotki"
        },
        {
          fundations: "Fundacja 'Dla mnie'",
          descriptions:
            "Cel i misja: Zbieranie pieniędzy i dóbr osobistych dla królowej zycia - mnie.",
          needs: "wszystko"
        },
        {
          fundations: "Fundacja 'Dla sadełka'",
          descriptions:
            "Cel i misja: wspomożenie wzrostu tkanki tłuszczowej u osób z sylwetką skinny-fat.",
          needs: "piwo, pizza, burgerki"
        },
        {
          fundations: "Fundacja 'Bez niczego'",
          descriptions:
            "Cel i misja: Wsparcie osób mających za dużo dóbr osobistych w pozbywaniu się ich.",
          needs: "nic"
        },
        {
          fundations: "Fundacja 'Ogól głowę'",
          descriptions:
            "Cel i misja: Golenie głów na łysą glace w celu pozbycia się włosów w odpływie prysznica.",
          needs: "włosy, prysznic, nożyczki, krata"
        },
        {
          fundations: "Fundacja 'Daj pizze'",
          descriptions:
            "Cel i misja: zwiększenie świadomości wśród nie-imprezowiczów o ważności karmienia osób na kacu pizzą.",
          needs: "pizza, papryka, cebula, ser, ser, ser"
        }
      ],
      currentPage: 1,
      itemsPerPage: 3
    };
  }

  handleClick = (event, i) => {
    this.setState({
      currentPage: i
    });
  };

  render() {
    const { paginationElements, currentPage, itemsPerPage } = this.state;

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentNames = paginationElements.slice(indexOfFirst, indexOfLast);

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
    for (
      let i = 1;
      i <= Math.ceil(paginationElements.length / itemsPerPage);
      i++
    ) {
      const element = (
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

    return (
      <div className="home-help-pagination">
        <div className="pagination-container">{elements}</div>
        <div className="pagination-pages">{pageNumbers}</div>
      </div>
    );
  }
}

export default HomeHelpPagination;
