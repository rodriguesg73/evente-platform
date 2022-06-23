import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pjv8t4236x01xl18gqerjn/master',
  cache: new InMemoryCache()
});