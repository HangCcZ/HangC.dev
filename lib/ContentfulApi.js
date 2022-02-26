import { GraphQLClient, gql } from 'graphql-request'

export default async function ContentfulApi() {
  const listingQuery = gql`
    {
      projectItemCollection {
        items {
          title
          description
          keypoints
          projectDate
          techList
        }
      }
    }
  `
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  })

  try {
    const response = await graphQLClient.request(listingQuery, {})
    return response.projectItemCollection.items
  } catch (error) {
    throw new Error('Could not fetch data from Contentful!')
  }
}
