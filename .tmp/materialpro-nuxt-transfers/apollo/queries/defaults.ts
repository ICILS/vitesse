import { defineApolloClient } from '@nuxtjs/apollo'

export default defineApolloClient({
  // The GraphQL endpoint.
  // httpEndpoint: "https://api.spacex.land/graphql",
  httpEndpoint: 'http://localhost:1337/graphql',

  // Provide a GraphQL endpoint to be used client-side. Overrides `httpEndpoint`.
  browserHttpEndpoint: 'http://localhost:1337/graphql',

  // See https://www.apollographql.com/docs/link/links/http.html#options
  httpLinkOptions: {
    credentials: 'same-origin',
  },

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },

  // Specify a websocket endpoint to be used for subscriptions.
  // The `wss` protocol is recommended in production.
  // wsEndpoint: 'ws://localhost:4000',

  // LocalStorage token
  tokenName: 'strapi',

  // Specify if the client should solely use WebSocket.
  // requires `wsEndpoint`.
  websocketsOnly: false,
})
