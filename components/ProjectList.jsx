import ProjectCard from './ProjectCard'

export default function ProjectList({ projectList }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-y-6 ">
      {projectList.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}
