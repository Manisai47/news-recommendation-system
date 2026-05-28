function Dashboard() {
  return (
    <div className="p-8">

      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            Articles Read
          </h2>

          <p className="text-5xl mt-6 font-bold text-red-500">
            124
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            Favorite Category
          </h2>

          <p className="text-3xl mt-6 font-bold text-red-500">
            Technology
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            Recommendation Accuracy
          </h2>

          <p className="text-5xl mt-6 font-bold text-red-500">
            91%
          </p>
        </div>

      </div>

    </div>
  )
}

export default Dashboard