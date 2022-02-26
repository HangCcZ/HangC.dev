export default function ProjectCard({ project }) {
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center justify-center border-2 border-dashed border-blue-300">
      <h1 className="p-2 text-center text-2xl font-semibold tracking-wide text-gray-700 sm:text-2xl md:w-full md:text-3xl">
        {project.title}
      </h1>

      <div className="justify-space flex w-4/6 items-center justify-between pt-2">
        {project.techList.map((tech, index) => (
          <img
            src={`./logos/${tech}.svg`}
            alt={`${tech} logo`}
            key={index}
            className="h-8 w-8 md:h-10 md:w-10"
          />
        ))}
      </div>

      <div className="px-5 pt-5 text-left text-gray-600">
        <ol className="list-decimal space-y-3 px-3">
          {project.keypoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
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
