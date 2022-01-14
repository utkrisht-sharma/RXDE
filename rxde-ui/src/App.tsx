import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RexerContainer } from './components/rexer-container/rexer-container';
import { BaseDataFetcherService } from './services/interfaces/BaseDataFetcherService';
import { SimpleDataFetcherService } from './services/impl/SimpleContentService';
import { BasicAuthCredentials } from './types/BasicAuthCredentialsType';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { Icon, ThemeProvider } from '@fluentui/react';

initializeIcons();

function App() {
  const authCredentials: BasicAuthCredentials = {
    username: 'admin',
    password: 'admin'
  };
  const fetcherRepository: BaseDataFetcherService = new SimpleDataFetcherService(authCredentials, true);

  return (
    <ThemeProvider>
      <Icon iconName="Home" />
      <RexerContainer dataFetcherService={fetcherRepository} />
    </ThemeProvider>
  );
}

export default App;
