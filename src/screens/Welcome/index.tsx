import React, { FunctionComponent, Fragment } from 'react';

import Header from '../../components/Header';

import s from './styles.scss';

const Welcome: FunctionComponent<{}> = () => (
  <Fragment>
    <Header />
    <section className={s.welcome}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <figure className={s.logo}>
            <img src="assets/img/welcome-page/tsx-logo.svg" alt="Logo" />
          </figure>

          <section className={s.logos}>
            <figure className={s.eslint}>
              <img src="assets/img/welcome-page/eslint.svg" alt="Logo" />
            </figure>
            <figure className={s.babel}>
              <img src="assets/img/welcome-page/babel.svg" alt="Logo" />
            </figure>
            <figure className={s.typescript}>
              <img src="assets/img/welcome-page/ts.svg" alt="Logo" />
            </figure>
          </section>

          <h3 className={s.instructionsTitle}>To start:</h3>
          <code>
            <p>npm install</p>
            <p>npm run dev</p>
          </code>

          <h3 className={s.instructionsTitle}>To build:</h3>
          <code>
            <p>npm run build</p>
          </code>

          <h3 className={s.instructionsTitle}>To lint:</h3>
          <code>
            <p>npm run lint</p>
            <p>npm run lint-fix</p>
          </code>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Welcome;
