import Link from 'next/link'
import ContentfulApi from '../lib/ContentfulApi'
import Container from '../components/Container'
import ProjectList from '../components/ProjectList'
export default function Project({ projectList }) {
  return (
    <Container>
      <div className="mx-auto max-w-3xl">
        <ProjectList projectList={projectList} />
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const projectList = await ContentfulApi()
  return {
    props: { projectList },
    revalidate: 10,
  }
}
