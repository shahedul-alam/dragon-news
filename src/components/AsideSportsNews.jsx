import { useEffect, useState } from "react";

const SportsNewsCards = ({news}) => {
  return (
    <div className="flex flex-col gap-5 p-4 border rounded-md">
      <div>
        <img src={news.image_url} alt="news thumbnail" className="size-full" />
      </div>
      <h1 className="text-[#403F3F] text-xl font-semibold">{news.title}</h1>
      <div className="flex gap-3">
        <p className="text-sm text-white font-medium bg-orange-600 px-3 py-1 rounded-md">{news.others_info.is_todays_pick ? "Today's Pick" : "Not Today's Pick"}</p>
        <p className="text-sm text-white font-medium bg-red-600 px-3 py-1 rounded-md">{news.others_info.is_trending ? "Trending" : "Not Trending"}</p>
      </div>
    </div>
  )
};

const AsideSportsNews = () => {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/category/04')
    .then(res => res.json())
    .then(data => setSportsNews(data.data));
  }, []);

  return (
    <section className="space-y-5">
      {
        sportsNews.map(news => <SportsNewsCards key={news._id} news={news} />)
      }
    </section>
  );
};

export default AsideSportsNews;