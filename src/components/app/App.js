import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import { Component } from 'react';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

class App extends Component {
  //   state = {
  //     showRandomChar: true,
  //   };

  //   toggleRandomChar = () => {
  //     this.setState(state => {
  //       return {
  //         showRandomChar: !state.showRandomChar,
  //       };
  //     });
  //   };
  state = {
    selectedChar: null,
  };

  onCharSelected = id => {
    this.setState({
      selectedChar: id,
    });
  };
  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          {/* {this.state.showRandomChar ? <RandomChar /> : null} */}
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>

          <div className="char__content">
            <ErrorBoundary>
              <CharList onCharSelected={this.onCharSelected} />
            </ErrorBoundary>

            <ErrorBoundary>
              <CharInfo charId={this.state.selectedChar} />
            </ErrorBoundary>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;
