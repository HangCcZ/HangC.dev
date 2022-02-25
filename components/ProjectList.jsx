import ProjectCard from './ProjectCard'

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-y-6 ">
      {[1, 2, 3, 4].map((num) => (
        <ProjectCard key={num} />
      ))}
    </div>
  )
}
