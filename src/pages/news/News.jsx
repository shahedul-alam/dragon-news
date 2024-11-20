import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const News = () => {
  const news = useLoaderData().data[0];

  return (
    <section className="col-span-9">
      <h2 className="text-[#403F3F] text-xl font-semibold  mb-5">Dragon News</h2>
      <div className='p-8 border rounded-md'>
        <div className='mb-5'>
          <img src={news.image_url} alt="News thumbnail" className='size-full' />
        </div>
        <h1 className='text-[#403F3F] text-2xl font-bold mb-2'>{news.title}</h1>
        <p className='text-[#403F3F] mb-8 text-justify'>{news.details}</p>
        <Link to={`/category/${news.category_id}`} className='w-fit flex justify-start items-center text-white text-xl font-medium gap-2 px-6 py-2 bg-[#D72050] rounded-md'><FaArrowLeft className='text-white text-xl' /> All news in this category</Link>
      </div>
    </section>
  );
};

export default News;