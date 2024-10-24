"use client";
import Link from 'next/link';
import React from 'react';

const FeaturedArticles = () => {
  const articles = [
    {
      id: 1,
      category: 'Stock Market',
      title: '15 Shocking Elon Musk Tweets About Stock Market',
      author: 'akbarh',
      date: 'June 28, 2021',
      imageUrl: '/images/business-blog-latest-news-image-1.jpg', // Update with real path
    },
    {
      id: 2,
      category: 'Technology',
      title: 'Want a Career in Technology? Make This Your Secret Weapon',
      date: 'June 28, 2021',
      imageUrl: '/images/business-blog-latest-news-image-2.jpg', // Update with real path
    },
    {
      id: 3,
      category: 'Health',
      title: 'The Health Industry Is Changing Fast. Here’s How to Keep Pace',
      date: 'June 28, 2021',
      imageUrl: '/images/business-blog-latest-news-image-3.jpg', // Update with real path
    },
    {
      id: 4,
      category: 'Technology',
      title: 'Everything You Ever Wanted to Know About Technology',
      date: 'June 28, 2021',
      imageUrl: '/images/business-blog-latest-news-image-4.jpg', // Update with real path
    },
  ];

  return (
    <div className="flex flex-wrap justify-center  my-10">
      {/* Main Featured Article */}
      <Link href="/DynamicPage" className="max-sm:w-full  relative  ">
        <div className="-z-10 relative">
          <img
            src={articles[0].imageUrl}
            alt={articles[0].title}
            className="w-full rounded-lg"
          />
          <div className="absolute bottom-0 w-full left-0 bg-opacity-50 bg-black text-white p-5">
            <span className="bg-blue-600 text-white px-2 py-1 rounded-sm text-sm">
              {articles[0].category}
            </span>
            <h2 className="text-2xl font-bold mt-2">{articles[0].title}</h2>
            <div className="text-sm mt-1">
              <span>{articles[0].author}</span> | <span>{articles[0].date}</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Side Articles */}
      <div className="max-sm:w-full w-[28%] max-md:my-8  flex flex-col gap-3   justify-between space-y-5 md:space-y-0 md:ml-5">
        {articles.slice(1).map((article) => (
          <Link href="/DynamicPage"  key={article.id} className="flex flex-col md:flex-row">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full md:w-[17rem] h-44 object-cover"
            />
            <div className="ml-4 w-[45%]">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-sm text-sm">
                {article.category}
              </span>
              <h3 className="text-lg font-bold mt-2">{article.title}</h3>
              <p className="text-sm text-gray-500">{article.date}</p>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default FeaturedArticles;
