// src/components/PostCard.tsx
import type { IPost } from '../types';

interface PostCardProps {
  post: IPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden my-4">
      <div className="p-4 flex items-center">
        <img src={post.user.profile_picture_url || 'https://via.placeholder.com/150'} alt={post.user.username} className="w-10 h-10 rounded-full mr-3" />
        <span className="font-semibold text-text-dark">{post.user.username}</span>
      </div>

      {/* Untuk sementara kita tampilkan gambar pertama */}
      <img src={post.images[0]} alt="Post image" className="w-full h-auto" />

      <div className="p-4">
        <p className="text-text-dark mb-2">{post.description}</p>
        <div className="text-sm text-gray-500">
          <span>{post.likes.length} Likes</span> · <span>{post.comments.length} Comments</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
