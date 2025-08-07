// src/pages/CreatePostPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/postService';

const CreatePostPage: React.FC = () => {
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!files || files.length === 0) {
      setError('Harap pilih setidaknya satu gambar.');
      return;
    }
    setError(null);
    setLoading(true);

    const formData = new FormData();
    formData.append('description', description);
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    try {
      await createPost(formData);
      alert('Postingan berhasil dibuat!');
      navigate('/feed');
    } catch (err) {
      setError('Gagal membuat postingan.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 mt-20">
      <h1 className="text-3xl font-bold text-text-dark mb-6">Buat Postingan Baru</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Deskripsi
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">
            Gambar
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple // Izinkan multi-file
            required
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-primary hover:file:bg-primary/20"
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button type="submit" disabled={loading} className="w-full py-3 font-bold text-white bg-primary rounded-md hover:bg-opacity-90 disabled:bg-opacity-50 transition-all">
          {loading ? 'Mengunggah...' : 'Publish'}
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
