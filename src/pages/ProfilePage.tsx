// src/pages/ProfilePage.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserPublicProfile, getPostsByUsername } from '../services/userService';
import type { IPublicUserProfile, IPost } from '../types';

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>();

  const [profile, setProfile] = useState<IPublicUserProfile | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!username) return;

      setLoading(true);
      setError(null);
      try {
        // Ambil data profil dan data postingan secara bersamaan
        const [profileData, postsData] = await Promise.all([getUserPublicProfile(username), getPostsByUsername(username)]);
        setProfile(profileData);
        setPosts(postsData);
      } catch (err) {
        setError('Gagal memuat profil pengguna.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [username]); // Jalankan ulang jika username di URL berubah

  if (loading) return <div className="text-center mt-10">Loading profile...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!profile) return <div className="text-center mt-10">Profil tidak ditemukan.</div>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 mt-20">
      {/* Header Profil */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left mb-10">
        <img src={profile.profile_picture_url} alt={profile.username} className="w-40 h-40 rounded-full object-cover border-4 border-card shadow-lg mb-4 md:mb-0 md:mr-10" />
        <div className="flex-grow">
          <h1 className="text-4xl font-bold text-text-dark">{profile.username}</h1>
          <p className="text-gray-600 mt-2">{profile.bio || 'Pengguna ini belum menulis bio.'}</p>

          {/* Statistik */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <div>
              <span className="font-bold text-lg">{profile.postCount}</span>
              <span className="text-gray-500 ml-1">posts</span>
            </div>
            <div>
              <span className="font-bold text-lg">{profile.totalLikes}</span>
              <span className="text-gray-500 ml-1">likes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Galeri Postingan */}
      <hr className="my-6 border-gray-200" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {posts.map((post) => (
          <div key={post._id} className="aspect-square bg-gray-200">
            <img src={post.images[0]} alt={`Post by ${profile.username}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
