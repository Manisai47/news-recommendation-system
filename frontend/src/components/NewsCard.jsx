function NewsCard({ title, category, image, description }) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <p className="text-red-500 font-semibold">
          {category}
        </p>

        <h2 className="text-2xl font-bold mt-3">
          {title}
        </h2>

        <p className="text-gray-400 mt-4">
          {description}
        </p>

        <button className="mt-6 bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold">
          Read More
        </button>

      </div>

    </div>
  )
}

export default NewsCard