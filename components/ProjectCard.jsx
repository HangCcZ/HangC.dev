export default function ProjectCard({ project }) {
  return (
    <div
      className={`mx-auto flex w-11/12 flex-col border-2 border-dashed border-gray-300 py-2`}
    >
      <h1 className="p-2 text-center text-2xl font-bold tracking-wide text-gray-800 sm:text-2xl md:w-full md:text-3xl">
        {project.title}
      </h1>

      <div className="justify-space mx-auto flex w-4/6 items-center justify-between pt-2">
        {project.techList.map((tech, index) => (
          <img
            src={`./logos/${tech}.svg`}
            alt={`${tech} logo`}
            title={tech}
            key={index}
            className="h-8 w-8 md:h-10 md:w-10"
          />
        ))}
      </div>

      <div className="px-5 pt-5 text-left text-gray-600">
        <ul className="list-disc space-y-3 px-3 ">
          {project.keypoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div
        className={`mx-auto flex w-2/3 items-center ${
          project.projectLive ? `justify-between` : `justify-center`
        } px-2 py-4 `}
      >
        <a
          target="_blank"
          href={project.projectCode}
          className="rounded-3xl border-2 border-blue-400 px-5 py-2 font-semibold uppercase tracking-wide text-blue-400 transition ease-in-out hover:bg-blue-400 hover:text-gray-50 hover:ring-2 hover:ring-blue-200"
        >
          Code
        </a>

        {project.projectLive && (
          <a
            target="_blank"
            href={project.projectLive}
            className="rounded-3xl border-2 border-blue-400 px-5 py-2 font-semibold uppercase tracking-wide text-blue-400 transition ease-in-out hover:bg-blue-400 hover:text-gray-50 hover:ring-2 hover:ring-blue-200"
          >
            Live
          </a>
        )}
      </div>
    </div>
  )
}
