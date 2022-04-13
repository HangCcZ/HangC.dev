import Container from '../components/Container'
import { gql } from 'graphql-request'
import ContentfulApi from '../lib/ContentfulApi'
import TimeLineCard from '../components/TimeLineCard'
export default function Home({ timelineList }) {
  return (
    <Container>
      <div className="mx-auto flex max-w-2xl flex-col px-8 pt-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold underline decoration-wavy md:w-2/3 md:text-4xl">
            Hang Chen
          </h1>
          <h2 className="pt-1 text-gray-600 sm:pt-3">
            Developer,{' '}
            <a
              href="https://unsplash.com/@hangccz"
              target="_blank"
              className="text-blue-400"
            >
              Photographer
            </a>
          </h2>
          <p className="pt-3 text-gray-600">
            I'm constantly gazing at the stars, wondering what's out there.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="pt-2 text-2xl font-bold md:text-4xl">About Me</h3>
          <p className="pt-2 text-gray-600">
            Hey there, I'm Hang, used to be an IT Analyst for a bank located in
            New York City. I'm currently seeking a Full Stack Developer position
            in which I can contribute to impactful and meaningful work. I'm
            actively learning AWS, Jamstack, UI/UX and GraphQL.
          </p>

          <p className="pt-4 text-gray-600">
            When not trying to find a bug or bugs that crash my program, I enjoy
            learning about engineering, taking photos of landscapes/cityscapes
            and stars, brewing coffee (Aeropress, Pourover and Cold brew) and
            detailing my car (which made my family members think that I'm
            obsessed with my car).
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-4 text-2xl font-bold md:text-4xl">
            Experiences and Timeline
          </h3>
          <ol className="relative ml-1 border-l border-gray-400">
            {timelineList.map((item) => (
              <TimeLineCard item={item} key={item.title} />
            ))}
          </ol>
        </div>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const timelineListQuery = gql`
    {
      timelineCollection {
        items {
          time
          title
          description
          date
        }
      }
    }
  `
  const response = await ContentfulApi(timelineListQuery)
  return {
    props: {
      timelineList: response.timelineCollection.items.sort((a, b) => {
        return b.date > a.date ? 1 : -1
      }),
    },
    revalidate: 10,
  }
}
