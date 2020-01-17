import React, { Component } from "react";
import ImgDeco from "../assets/assets/Decoration.svg";
import HomeHelpPagination from "./HomeHelpPagination";

class HomeHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFundationsClicked: true,
      isOrganizationsClicked: false,
      isLocalsClicked: false
    };
  }

  handleButtonFundations = () => {
    this.setState(state => {
      console.log("klik!");
      return {
        isFundationsClicked: true,
        isOrganizationsClicked: false,
        isLocalsClicked: false
      };
    });
  };
  handleButtonOrganizations = () => {
    this.setState(state => {
      console.log("klik!");
      return {
        isFundationsClicked: false,
        isOrganizationsClicked: true,
        isLocalsClicked: false
      };
    });
  };
  handleButtonLocals = () => {
    this.setState(state => {
      console.log("klik!");
      return {
        isFundationsClicked: false,
        isOrganizationsClicked: false,
        isLocalsClicked: true
      };
    });
  };

  render() {
    const fundations = [
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
    ];
    const organizations = [
      {
        fundations: "Organizacja 'Niedziela'",
        descriptions: "Cel i misja: Chodzenie do kościoła.",
        needs: "różaniec, krzyż, sałata, woda święcona"
      },
      {
        fundations: "Organizacja 'Bezchmurne niebo'",
        descriptions: "Cel i misja: czyszczenie nieba z chmur.",
        needs: "czyściciel chmur, szczotka, zmiotka"
      },
      {
        fundations: "Organizacja 'Gwint'",
        descriptions:
          "Cel i misja: Zebranie całej talii kart do gwinta i ogranie Zoltana.",
        needs: "karty, piwo, gorzałka, stół"
      },
      {
        fundations: "Organizacja 'Bazyliszek'",
        descriptions:
          "Cel i misja: Ochrona zagrożonego bazyliszka srebrzystego.",
        needs: "odszkodowanie, znaki ostrzegawcze, Wilga"
      },
      {
        fundations: "Organizacja 'Czysty Gwint'",
        descriptions:
          "Cel i misja: Powstrzymanie hrabiego Monniera przed wprowadzeniem frakcji Skellige.",
        needs: "pałki, cierpliwość, mocne drzwi"
      },
      {
        fundations: "Organizacja 'Ochrona Olafa'",
        descriptions:
          "Cel i misja: Niedopuszczenie do śmierci Olafa - najlepszego zawodnika walk na pięści na Skellige.",
        needs: "krzepa, siła do powalenia niedźwiedzia"
      }
    ];
    const locals = [
      {
        fundations: "Zbiórka 'Usunąć tatuaż'",
        descriptions:
          "Cel i misja: Usunięcie tatuażu Geraltowi po pijackim wieczorze.",
        needs: "magia, pleśń, zdrowy rozsądek"
      },
      {
        fundations: "Zbiórka 'Budujemy pomnik'",
        descriptions:
          "Cel i misja: zebranie funduszów na budowę pomnika świętego Lebiody.",
        needs: "pieniądze, narzędzia, surowiec"
      },
      {
        fundations: "Zbiórka 'Odbudowa Kaer Morhen'",
        descriptions:
          "Cel i misja: Zebranie funduszy na odbudowę wiedźmińskiego siedliszcza.",
        needs: "kupa złota, kupa kamienia, kupa ludzi"
      }
    ];
    const {
      isFundationsClicked,
      isOrganizationsClicked,
      isLocalsClicked
    } = this.state;

    let pagination;

    if (isFundationsClicked) {
      pagination = (
        <HomeHelpPagination data={fundations} areClicked={this.state} />
      );
    } else if (isOrganizationsClicked) {
      pagination = (
        <HomeHelpPagination data={organizations} areClicked={this.state} />
      );
    } else {
      pagination = <HomeHelpPagination data={locals} areClicked={this.state} />;
    }

    return (
      <section className="home-help" id={this.props.name}>
        <h2 className="home-help-header">Komu pomagamy</h2>
        <img src={ImgDeco} alt="decoration" />
        <div className="help-btns-box">
          <button
            className="help-btn"
            onClick={this.handleButtonFundations}
            click={isFundationsClicked}
          >
            Fundacjom
          </button>
          <button
            className="help-btn"
            onClick={this.handleButtonOrganizations}
            click={isOrganizationsClicked}
          >
            Organizacjom pozarządowym
          </button>
          <button
            className="help-btn"
            onClick={this.handleButtonLocals}
            click={isLocalsClicked}
          >
            Lokalnym zbiórkom
          </button>
        </div>
        <p className="help-content">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        {pagination}
      </section>
    );
  }
}

export default HomeHelp;
