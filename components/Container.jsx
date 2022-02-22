import NavBar from './NavBar'
import Head from 'next/head'
export default function Container(props) {
  return (
    <div className="bg-gray-50 pt-4">
      <Head>
        <title>Hang Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {props.children}
    </div>
  )
}
