import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from '../example/example';

describe('useDeviceDetect hook', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
