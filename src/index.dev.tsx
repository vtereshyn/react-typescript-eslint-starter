/* global module */

import { AppContainer } from 'react-hot-loader';
import React, { ComponentClass, FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

const renderComponent = (Component: ComponentClass | FunctionComponent) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderComponent(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    renderComponent(Root);
  });
}
