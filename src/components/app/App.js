import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import { useState } from 'react';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

const App = () => {
  const [selectedChar, setChar] = useState(null);

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

  const onCharSelected = id => {
    setChar(id);
  };

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
            <CharList onCharSelected={onCharSelected} />
          </ErrorBoundary>

          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
};

export default App;
