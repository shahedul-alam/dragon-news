import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HomeHeaderMarquee = () => {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data => setBreakingNews(data.data));
  }, []);

  return (
    <section className="bg-gray-100 flex mb-5">
      <div className="bg-red-600 flex items-center rounded-l-md">
        <p className="text-white text-xl font-medium px-4">Latest</p>
      </div>
      <Marquee pauseOnHover={true} className="text-lg font-semibold py-2">
        <div>
          {
            breakingNews.map(news => <Link to={`/news/${news._id}`}> {news.title} |</Link>)
          }
        </div>
      </Marquee>
    </section>
  );
};

export default HomeHeaderMarquee;
