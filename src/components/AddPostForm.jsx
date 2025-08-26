import { useState } from "react";

export default function AddPostForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  // Handle file upload
  const handleFileChange = (e) => {
  const files = Array.from(e.target.files);

  // Convert files to local preview URLs
  const fileUrls = files.map((file) => URL.createObjectURL(file));

  setImages((prev) => [...prev, ...fileUrls]); // append instead of replace
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    onAdd({
      id: Date.now(),
      title,
      content,
      images, // pass uploaded images
    });

    // Reset form
    setTitle("");
    setContent("");
    setImages([]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black/10 p-4 mx-100 mt-30 rounded-xl shadow-lg mb-6">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />

      {/* File Upload Button */}
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
        id="imageUpload"
      />

     <label
  htmlFor="imageUpload"
  className="cursor-pointer 
             bg-gradient-to-tr from-black via-blue-500 to-white 
             hover:bg-gradient-to-bl hover:from-black hover:via-blue-500 hover:to-white
             text-white px-4 py-2 rounded inline-block mb-3 transition-all duration-500"
>
  Upload Images
</label>



      {/* Preview */}
      <div className="flex flex-wrap gap-2 mb-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="preview"
            className="w-24 h-24 object-cover rounded-lg border"
          />
        ))}
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Post
      </button>
    </form>
  );
}
