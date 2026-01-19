import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-lightBg min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h1 className="font-heading font-bold text-4xl md:text-5xl text-deepBlue mb-4">Android Development Blog</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">Insights, trends, and technical guides from the expert team at DroidDevLab.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col h-full">
                        <div className="h-48 overflow-hidden">
                            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="text-xs font-bold text-android uppercase tracking-wider mb-2">{post.date}</div>
                            <h2 className="font-heading font-bold text-xl text-deepBlue mb-3 leading-tight hover:text-android transition-colors">
                                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                            <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-deepBlue font-bold hover:text-android transition-colors mt-auto">
                                Read More <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </div>
  );
};

import { useEffect } from 'react';

export default BlogPage;