import NewsCard from "../components/NewsCard"

function Home() {

  const newsData = [
    {
      id: 1,
      title: "AI Revolution in Modern Technology",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      description: "Artificial Intelligence is transforming industries with intelligent automation and advanced machine learning systems."
    },

    {
      id: 2,
      title: "Global Markets See Massive Growth",
      category: "Business",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      description: "International financial markets continue to rise amid strong economic recovery and investor confidence."
    },

    {
      id: 3,
      title: "Championship Finals Break Records",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      description: "Historic performances and record-breaking moments dominate the championship finals this season."
    }
  ]

  return (
    <div>

      <section className="px-8 py-20 max-w-7xl mx-auto">

        <div className="max-w-4xl">

          <h1 className="text-6xl font-bold leading-tight">
            Personalized AI Powered News Recommendation System
          </h1>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            Discover intelligent real-time news recommendations powered by machine learning and behavioral analytics.
          </p>

          <button className="mt-10 bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition">
            Explore News
          </button>

        </div>

      </section>

      <section className="px-8 pb-20 max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-bold">
            Trending News
          </h2>

          <button className="text-red-500">
            View All
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {newsData.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              category={news.category}
              image={news.image}
              description={news.description}
            />
          ))}

        </div>

      </section>

    </div>
  )
}

export default Home