import { CreatePost } from './CreatePost';
import { PostCard } from './PostCard';
import { POSTS } from '../../data/mockData';

export const Feed = () => {
    return (
        <div className="max-w-2xl mx-auto py-8 px-4 text-left">
            <CreatePost />

            <div className="space-y-6">
                {POSTS.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};
