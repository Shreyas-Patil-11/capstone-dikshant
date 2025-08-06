import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewThreadForm() {
  const [formData, setFormData] = useState({ title: '', content: '', category: '', image: null });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async e => {
  e.preventDefault();
  console.log("Form submitted");

  let imageUrl = '';

  try {
    if (formData.image) {
      console.log("Uploading image...");
      const uploadData = new FormData();
      uploadData.append('image', formData.image);

      const uploadRes = await axios.post('http://localhost:5000/api/forum/upload-image', uploadData); // <-- FIXED ENDPOINT
      imageUrl = uploadRes.data.imageUrl;
      console.log("Image uploaded:", imageUrl);
    }

    console.log("Posting thread...");
    await axios.post('http://localhost:5000/api/forum/posts', {
      title: formData.title,
      content: formData.content,
      category: formData.category,
      imageUrl,
      createdBy: 'USER_ID_STATIC_FOR_NOW',
    });

    console.log("Thread posted, redirecting...");
    navigate('/forum');
  } catch (error) {
    console.error("Error in form submission:", error);
  }
};


  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create New Thread</h2>
      <input name="title" placeholder="Title" className="border p-2 w-full mb-3" onChange={handleChange} required />
      <textarea name="content" placeholder="Content" className="border p-2 w-full mb-3" onChange={handleChange} required />
      <input name="category" placeholder="Category" className="border p-2 w-full mb-3" onChange={handleChange} required />
      <input type="file" name="image" accept="image/*" className="mb-3" onChange={handleChange} />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Post</button>
    </form>
  );
}

export default NewThreadForm;
