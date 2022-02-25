export default function ProjectCard() {
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center justify-center border-2 border-dashed border-blue-300">
      <h1 className="p-2 text-center text-2xl font-semibold tracking-wide text-gray-700 sm:text-2xl md:w-full md:text-3xl">
        Full Stack Employee Directory
      </h1>

      <div className="justify-space flex w-4/6 items-center justify-between pt-2">
        <img
          src="./logos/react.svg"
          alt="react.js logo"
          className="h-8 w-8 md:h-10 md:w-10"
        />
        <img
          src="./logos/nextjs.svg"
          alt="next.js logo"
          className="h-8 w-8 md:h-10 md:w-10"
        />
        <img
          src="./logos/nodejs.svg"
          alt="node.js logo"
          className="h-8 w-8 md:h-10 md:w-10"
        />
        <img
          src="./logos/mongodb.svg"
          alt="mongodb logo"
          className="h-8 w-8 md:h-10 md:w-10"
        />
        <img
          src="./logos/tailwindcss.svg"
          alt="tailwindcss logo"
          className="h-8 w-8"
        />
      </div>

      <div className="px-5 pt-5 text-left text-gray-600">
        <ol className="list-decimal space-y-3 px-3">
          <li key="1">
            Designed and developed an employee directory website based on
            suggested features and time constraints
          </li>
          <li key="2">
            Written functional and responsive CSS using Tailwind CSS with mobile
            first approach
          </li>
          <li key="3">
            Utilized Vercel server-less functions for backend APIs and MongoDB
            Atlas to perform CRUD operations
          </li>
          <li key="4">
            Used client-side router in Next.js and SWR for fast navigation and
            caching to provide excellent user experience
          </li>
          <li key="5">
            Implemented server-side pagination and server-side searching for
            high scalability
          </li>
          <li key="6">
            Integrated Cloudinary to handle image upload and image storage
          </li>
        </ol>
      </div>
      <div className="flex w-2/3 items-center justify-between px-2 py-4">
        <a
          target="_blank"
          href="https://github.com/HangCcZ/Full-Stack-Employee-Directory"
          className="rounded-xl bg-blue-500 px-5 py-2 font-semibold uppercase tracking-wide text-gray-50 hover:bg-blue-600 hover:ring-2 hover:ring-blue-200"
        >
          Code
        </a>
        <a
          target="_blank"
          href="https://code-challenge-for-postlight.vercel.app/"
          className="rounded-xl bg-blue-600  px-5 py-2 font-semibold uppercase tracking-wide text-gray-50 hover:bg-blue-700 hover:ring-2 hover:ring-blue-200"
        >
          Live
        </a>
      </div>
    </div>
  )
}
