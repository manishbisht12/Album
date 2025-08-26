import Slider from "react-slick";

export default function PostCard({ post, onDelete }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
   <div className="border rounded-xl shadow-lg p-4  backdrop-blur-sm  w-full max-w-xl mx-auto ml-10 mt-25">

      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-3">{post.content}</p>

      {post.images && post.images.length > 0 && (
        <Slider {...settings} className="mb-3">
          {post.images.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`post-img-${i}`}
                className="rounded-lg  h-100 w-full object-cover"
              />
            </div>
          ))}
        </Slider>
      )}

      <button
        onClick={() => onDelete(post.id)}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Delete Post
      </button>
    </div>
  );
}
