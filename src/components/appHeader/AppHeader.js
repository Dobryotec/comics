import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <button>
          <span>Marvel</span> information portal
        </button>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <button>Characters</button>
          </li>
          /
          <li>
            <button>Comics</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
