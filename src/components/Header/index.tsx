import React, { FunctionComponent } from 'react';

import s from './styles.scss';

const Header: FunctionComponent = () => (
  <header className={s.header}>
    <div className={s.container}>
      <h1 className={s.title}>React Typescript Starter</h1>
      <a
        className={s.githubLogo}
        href="https://github.com/vtereshyn/react-typescript-eslint-starter"
      >
        <img src="assets/img/welcome-page/github.svg" alt="Github" />
      </a>
    </div>
  </header>
);

export default Header;
