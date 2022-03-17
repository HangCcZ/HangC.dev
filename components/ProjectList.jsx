import ProjectCard from './ProjectCard'

export default function ProjectList({ projectList }) {
  return (
    <div className="grid grid-cols-1 gap-y-8 py-6 px-5 sm:px-0">
      {projectList.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}
