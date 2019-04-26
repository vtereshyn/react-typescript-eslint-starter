import React, { FunctionComponent } from 'react';

import s from './assets/scss/app.scss';

interface Props {
  children: JSX.Element;
}

const App: FunctionComponent<Props> = ({ children }) => (
  <main className={s.root}>
    <div className={s.content}>{children}</div>
  </main>
);

export default App;
