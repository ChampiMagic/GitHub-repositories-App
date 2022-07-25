import React from 'react';
import Main from './src/components/Main.jsx';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient.js';

const apolloClient = createApolloClient();


export default function App() {
  return  <Main />
}

