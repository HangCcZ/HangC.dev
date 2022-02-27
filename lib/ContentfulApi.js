import { GraphQLClient, gql } from 'graphql-request'

export default async function ContentfulApi(query) {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
  })

  try {
    const response = await graphQLClient.request(query, {})
    return response
  } catch (error) {
    throw new Error('Could not fetch data from Contentful!')
  }
}
