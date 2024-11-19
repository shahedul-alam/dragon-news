import { Link, useLoaderData } from "react-router-dom";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar, FaRegStar, FaEye } from "react-icons/fa";
import Rating from "react-rating";

// {
//   "_id": "be44c843d61859cc0b87cae85c55f9db",
//   "others_info": {
//       "is_todays_pick": false,
//       "is_trending": true
//   },
//   "category_id": "01",
//   "rating": {
//       "number": 4.5,
//       "badge": "Excellent"
//   },
//   "total_view": 231,
//   "title": "US to name military mission in Ukraine and appoint commander – WSJ",
//   "author": {
//       "name": "Kumar Natasha",
//       "published_date": "2022-08-26 12:15:36",
//       "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//   },
//   "thumbnail_url": "https://i.ibb.co/dr4TRY4/unsplash-Eh-Tc-C9s-YXsw-21.png",
//   "image_url": "https://i.ibb.co/vz5K0FB/unsplash-Eh-Tc-C9s-YXsw-10.png",
//   "details": "Illustrative public photo In the coming weeks, the Joe Biden administration plans to name its military mission to support Ukraine and appoint a general to lead the military training and relief efforts. This is reported by The Wall Street Journal, citing US officials. The name of the operation formally recognizes US military support, akin to how the Pentagon dubbed the missions in Iraq and Afghanistan Operation Iraqi Freedom,   Enduring Freedom   and 'Guardian of Freedom'. The naming of training and assistance is of great bureaucratic importance, as it usually entails long-term dedicated funding and the possibility of special pay, rewards for military personnel participating in these missions."
// }

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
          <img src={news.image_url} alt="news thumbnail" className="size-full" />
        </div>
        <div className="mb-5">
          <p className="line-clamp-3 text-[#706F6F]">{news.details}</p>
          <Link><span className="text-red-600 font-semibold">Read More</span></Link>
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
    <section className="border border-black col-span-6">
      <h2 className="text-[#403F3F] text-xl font-semibold  mb-5">
        Dragon News Home
      </h2>
      <div className="space-y-6">
        {newsData.map((news) => (
          <NewsCards key={news._id} news={news} />
        ))}
      </div>
    </section>
  );
};

export default HomeMain;
