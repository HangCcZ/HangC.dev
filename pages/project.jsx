import Link from 'next/link'
import Container from '../components/Container'
import ProjectList from '../components/ProjectList'
export default function Project() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl">
        <ProjectList />
      </div>
    </Container>
  )
}
