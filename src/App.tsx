import React, { FunctionComponent, ReactNode } from 'react';

import s from './assets/scss/app.scss';

interface Props {
  children: ReactNode;
}

const App: FunctionComponent<Props> = ({ children }) => (
  <main className={s.root}>
    <div className={s.content}>{children}</div>
  </main>
);

export default App;
