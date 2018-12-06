// Copyright 2017-2018 @polkadot/light-apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcRxInterface } from '@polkadot/rpc-rx/types';
import { BareProps } from './types';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { injectGlobal, ThemeProvider, theme } from './theme';

type Props = BareProps & {
  api?: RpcRxInterface,
  provider?: ProviderInterface,
  url?: string
};

injectGlobal`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
  }

  #root {
    color: #4e4e4e;
    font-family: sans-serif;
    height: 100%;
  }

  h1, h2, h3, h4, h5 {
    color: rgba(0, 0, 0, .6);
    font-weight: 100;
  }

  h1 {
    text-transform: lowercase;
  }

  h3, h4, h5 {
    margin-bottom: 0.25rem;
  }

  /*
  a:hover {
    color: #D75EA1;
  }
  */

  main {
    padding: 1em 2em;
    min-height: 100vh;
  }

  main > section {
    margin-bottom: 2em;
  }

  article {
    background: white;
    border: 1px solid #f2f2f2;
    border-left-width: 0.25rem;
    border-radius: 0.25rem;
    /* border-top-width: 1px; */
    margin: 0.5rem;
    padding: 1rem 1.5rem;

    &.error {
      background: #fff6f6;
      border-color: #e0b4b4;
      color: #9f3a38;
    }

    &.warning {
      background: #ffffe0;
      border-color: #eeeeae;
    }
  }

  header,
  summary {
    margin-bottom: 2em;
    text-align: center;
  }

  /* header {
    background: #f5f5f5;
    margin: -1em -2em 2em;
    padding: 1em 2em 0;
  } */

  header+header,
  header+summary,
  summary+header {
    margin-top: -1em;
  }

  summary {
    align-items: stretch;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  summary article {
    color: rgba(0, 0, 0, 0.6);
    flex: 0 1 auto;
    text-align: left;
  }

  summary > section {
    display: flex;
    flex: 0 1 auto;
    text-align: left;
  }
`;

export function createApp (App: React.ComponentType<BareProps>, { api, className, provider, style, url }: Props = {}, rootId: string = 'root'): void {
  const rootElement = document.getElementById(rootId);

  if (!rootElement) {
    throw new Error(`Unable to find element with id '${rootId}'`);
  }

  ReactDOM.render(
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App
          className={className}
          style={style}
        />
      </ThemeProvider>
    </HashRouter>,
    rootElement
  );
}

export * from './settings';
export * from './types';

import Icon from './Icon';
import Menu from './Menu';

export {
  Icon,
  Menu,
  injectGlobal
};
