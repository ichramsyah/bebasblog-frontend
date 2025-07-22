// src/pages/FeedPage.tsx
import { useEffect, useState } from 'react';
import { getAllPosts, likePost, unlikePost } from '../services/postService';
import type { IPost } from '../types';
import PostCard from '../components/PostCard';
import { useAuthStore } from '../store/authStore';

const FeedPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (err) {
        setError('Gagal memuat postingan.');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleLikeToggle = async (postId: string) => {
    if (!user) return; // Pastikan user sudah login

    const originalPosts = [...posts];
    const post = posts.find((p) => p._id === postId);
    if (!post) return;

    const isLiked = post.likes.includes(user._id);

    // Update UI secara optimis untuk responsivitas
    const updatedPosts = posts.map((p) => {
      if (p._id === postId) {
        if (isLiked) {
          return { ...p, likes: p.likes.filter((id) => id !== user._id) };
        } else {
          return { ...p, likes: [...p.likes, user._id] };
        }
      }
      return p;
    });
    setPosts(updatedPosts);

    try {
      if (isLiked) {
        await unlikePost(postId);
      } else {
        await likePost(postId);
      }
    } catch (err) {
      // Jika gagal, kembalikan state ke semula
      setPosts(originalPosts);
      console.error('Gagal melakukan aksi like:', err);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-text-dark mb-6">Feed</h1>
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          onLikeToggle={handleLikeToggle} // Teruskan fungsi sebagai prop
        />
      ))}
    </div>
  );
};

export default FeedPage;
