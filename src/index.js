import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-fenix-fenixsoft-github.vercel.app/graphql',
  cache: new InMemoryCache()
})

const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
