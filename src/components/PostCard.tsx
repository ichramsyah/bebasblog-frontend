// src/components/PostCard.tsx
import { useState } from 'react';
import type { IPost } from '../types';
import { useAuthStore } from '../store/authStore';
import { addComment } from '../services/postService';

interface PostCardProps {
  post: IPost;
  onLikeToggle: (postId: string) => void;
}

const PostCard = ({ post, onLikeToggle }: PostCardProps) => {
  const { user, isLoggedIn } = useAuthStore();
  const [comment, setComment] = useState('');

  // Cek apakah pengguna saat ini sudah me-like post ini
  const isLiked = user ? post.likes.includes(user._id) : false;

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      await addComment(post._id, comment);

      setComment('');
    } catch (error) {
      console.error('Gagal menambah komentar', error);
      alert('Gagal menambah komentar');
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden my-4">
      {/* ... Header Postingan (tetap sama) ... */}
      <div className="p-4 flex items-center">
        <img src={post.user.profile_picture_url || 'https://via.placeholder.com/150'} alt={post.user.username} className="w-10 h-10 rounded-full mr-3" />
        <span className="font-semibold text-text-dark">{post.user.username}</span>
      </div>

      <img src={post.images[0]} alt="Post image" className="w-full h-auto" />

      <div className="p-4">
        {/* Tombol Aksi (Like & Comment) */}
        <div className="flex items-center space-x-4 mb-2">
          <button onClick={() => onLikeToggle(post._id)} disabled={!isLoggedIn}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 transition-colors duration-200 ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-300'}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>
          {/* Tombol comment bisa ditambahkan di sini jika perlu */}
        </div>

        {/* Jumlah Likes */}
        <div className="font-semibold text-sm text-text-dark">{post.likes.length} likes</div>

        {/* Deskripsi */}
        <p className="text-text-dark my-2">
          <span className="font-semibold mr-2">{post.user.username}</span>
          {post.description}
        </p>

        {/* Tampilkan jumlah komentar */}
        <div className="text-sm text-gray-500 cursor-pointer hover:underline">Lihat semua {post.comments.length} komentar</div>

        {/* Form Tambah Komentar */}
        {isLoggedIn && (
          <form onSubmit={handleCommentSubmit} className="mt-3 flex">
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Tambahkan komentar..." className="flex-grow bg-transparent border-b border-gray-300 focus:outline-none focus:border-primary text-sm" />
            <button type="submit" disabled={!comment.trim()} className="ml-3 text-sm font-semibold text-primary disabled:text-gray-400">
              Post
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PostCard;
