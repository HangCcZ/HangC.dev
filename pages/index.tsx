import Container from '../components/Container'
export default function Home() {
  return (
    <Container>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 pb-32 text-center">
          <h1 className="text-2xl font-bold sm:text-3xl md:w-2/3 md:text-4xl lg:text-5xl">
            Welcome! I'm rebuilding this site. Visit my{' '}
            <a className="text-blue-600" href="https://github.com/HangCcZ">
              Github
            </a>{' '}
            to see what I'm up to
          </h1>
        </main>
      </div>
    </Container>
  )
}
