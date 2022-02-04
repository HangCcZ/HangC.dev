import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Hang Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className=" text-2xl font-bold sm:text-3xl md:w-2/3 md:text-4xl lg:text-5xl">
          Welcome! I'm rebuiding this site. Visit my{' '}
          <a className="text-blue-600" href="https://github.com/HangCcZ">
            Github
          </a>{' '}
          to see what I'm up to
        </h1>
      </main>
    </div>
  )
}
