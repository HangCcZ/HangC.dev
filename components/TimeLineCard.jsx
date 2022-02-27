export default function TimeLineCard({ item }) {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-400"></div>
      <time className="py-1 text-sm text-gray-600">{item.time}</time>
      <h3 className="mb-1 text-lg font-semibold text-gray-900">{item.title}</h3>
      <p className="text-gray-700">{item.description}</p>
    </li>
  )
}
