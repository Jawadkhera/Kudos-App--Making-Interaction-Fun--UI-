import { Heart, MessageCircle, Share2, MoreHorizontal, Coins } from 'lucide-react';
import type { PostType } from '../../data/mockData';

interface PostCardProps {
    post: PostType;
}

export const PostCard = ({ post }: PostCardProps) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={post.sender.avatar}
                        alt={post.sender.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary-50"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">{post.sender.name}</span>
                            <span className="text-slate-400 text-sm">→</span>
                            <span className="font-bold text-slate-900">{post.receiver.name}</span>
                        </div>
                        <span className="text-xs text-slate-400">{post.timestamp}</span>
                    </div>
                </div>
                <button className="text-slate-400 hover:bg-slate-50 p-2 rounded-full transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full">
                            {tag}
                        </span>
                    ))}
                    <div className="flex items-center gap-1 px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-full border border-yellow-100">
                        <Coins className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                        +{post.coins}
                    </div>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg">
                    {post.message}
                </p>
            </div>

            <div className="flex items-center gap-6 border-t border-slate-50 pt-4">
                <button className="flex items-center gap-2 text-slate-500 hover:text-pink-500 transition-colors group">
                    <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors group">
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors ml-auto">
                    <Share2 className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
