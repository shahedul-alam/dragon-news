import { Link, useLoaderData } from "react-router-dom";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar, FaRegStar, FaEye } from "react-icons/fa";
import Rating from "react-rating";
import NoNewsFound from "../../components/NoNewsFound";

const NewsCards = ({ news }) => {
  return (
    <div className="border rounded-md">
      <div className="flex justify-between py-4 px-5 bg-[#F3F3F3] rounded-t-md">
        <div className="flex items-center gap-4">
          <img
            src={news.author.img}
            alt="author image"
            className="size-10 object-cover rounded-full"
          />
          <div>
            <h2 className="text-[#403F3F] font-semibold">
              {news.author.name || "Not Available"}
            </h2>
            <p className="text-[#706F6F] text-sm ">
              {news.author.published_date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CiBookmark className="text-[#706F6F] text-xl" />
          <CiShare2 className="text-[#706F6F] text-xl" />
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-xl font-bold text-[#403F3F] mb-5">{news.title}</h1>
        <div className="mb-8">
          <img
            src={news.image_url}
            alt="news thumbnail"
            className="size-full"
          />
        </div>
        <div className="mb-5">
          <p className="line-clamp-3 text-[#706F6F]">{news.details}</p>
          <Link to={`/news/${news._id}`}>
            <span className="text-red-600 font-semibold">Read More</span>
          </Link>
        </div>
        <div className="flex justify-between items-center pt-5 border-t border-[#E7E7E7]">
          <div className="flex items-center gap-2">
            <Rating
              initialRating={news.rating.number}
              fullSymbol={<FaStar className="text-xl text-[#FF8C47]" />}
              emptySymbol={<FaRegStar className="text-xl text-[#FF8C47]" />}
              readonly
            />
            <p className="font-medium text-[#706F6F]">{news.rating.number}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEye className="text-xl text-[#706F6F]" />
            <p className="font-medium text-[#706F6F]">{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeMain = () => {
  const newsData = useLoaderData().data;

  return (
    <section className="col-span-6">
      <h2 className="text-[#403F3F] text-xl font-semibold  mb-5">
        Dragon News Home
      </h2>
      {newsData.length !== 0 ? (
        <div className="space-y-6">
          {newsData.map((news) => (
            <NewsCards key={news._id} news={news} />
          ))}
        </div>
      ) : (
        <NoNewsFound />
      )}
    </section>
  );
};

export default HomeMain;
