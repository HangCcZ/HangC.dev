import ProjectCard from './ProjectCard'

export default function ProjectList({ projectList }) {
  return (
    <div className="grid grid-cols-1 gap-y-8">
      {projectList
        .sort((a, b) => {
          return a.priority - b.priority
        })
        .map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
    </div>
  )
}
