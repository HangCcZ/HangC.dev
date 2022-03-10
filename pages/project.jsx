import ContentfulApi from '../lib/ContentfulApi'
import Container from '../components/Container'
import ProjectList from '../components/ProjectList'
import { gql } from 'graphql-request'
export default function Project({ projectList }) {
  return (
    <Container>
      <main className="mx-auto max-w-2xl">
        <ProjectList projectList={projectList} />
      </main>
    </Container>
  )
}

export async function getStaticProps() {
  const projectListingQuery = gql`
    {
      projectItemCollection {
        items {
          title
          description
          keypoints
          projectDate
          techList
          priority
          projectCode
          projectLive
        }
      }
    }
  `
  const response = await ContentfulApi(projectListingQuery)

  return {
    props: { projectList: response.projectItemCollection.items },
    revalidate: 10,
  }
}
