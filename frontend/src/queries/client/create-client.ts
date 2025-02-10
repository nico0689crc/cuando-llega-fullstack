import { HttpLink } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/experimental-nextjs-app-support'

export const createClient = () => {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: process.env.NEXT_PUBLIC_GRAPHQL_PATH,
    // you can disable result caching here if you want to
    fetchOptions: { cache: 'no-store' }
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink
  })
}
