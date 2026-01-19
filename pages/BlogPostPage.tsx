import React, { useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleConsultationClick = () => {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
  }

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <main className="lg:w-2/3">
                <div className="mb-8">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-[400px] object-cover rounded-2xl shadow-md mb-8" />
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <span className="bg-lightBg px-3 py-1 rounded-full font-medium text-deepBlue">Blog</span>
                        <span>{post.date}</span>
                    </div>
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-deepBlue mb-6 leading-tight">{post.title}</h1>
                </div>

                <div 
                    className="prose prose-lg max-w-none text-gray-700 prose-headings:font-heading prose-headings:text-deepBlue prose-a:text-android prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </main>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
                <div className="bg-deepBlue text-white p-8 rounded-2xl sticky top-32 shadow-xl">
                    <h3 className="font-heading font-bold text-2xl mb-4">Need Android Developers?</h3>
                    <p className="text-slate-300 mb-6">
                        Hire DroidDevLab to build secure, high-performance native Android applications.
                    </p>
                    <button 
                        onClick={handleConsultationClick}
                        className="w-full bg-android hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition-colors"
                    >
                        Hire Us
                    </button>
                    <div className="mt-6 border-t border-slate-700 pt-6">
                        <h4 className="font-bold mb-2">Popular Services:</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                           <li>• Custom App Development</li> 
                           <li>• Java to Kotlin Migration</li> 
                           <li>• App Security Audits</li> 
                        </ul>
                    </div>
                </div>
            </aside>

        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;