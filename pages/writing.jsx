import Container from '../components/Container'

export default function Blog() {
  return (
    <Container>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 pb-32 text-center">
          <h1 className=" text-2xl font-bold sm:text-3xl md:w-2/3 md:text-4xl lg:text-5xl">
            A place to keep my blog, notes and future tutorials
          </h1>
        </main>
      </div>
    </Container>
  )
}
