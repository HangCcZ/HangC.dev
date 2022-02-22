import Link from 'next/link'
import Container from '../components/Container'

export default function NotFound() {
  return (
    <Container>
      <Link href="/">
        <a>Return Home</a>
      </Link>
    </Container>
  )
}
