import PostCard from "../components/PostCard";
import backgroundVideo from "../assets/video.mp4"; // make sure it's in src/assets/
import { Link } from "react-router-dom";
export default function Photos({ posts, handleDelete }) {
  return (
    <div className="w-full min-h-screen">
      {/* Section with background video */}
      <div className="relative w-full min-h-screen">
        {/* Background video */}
        <video
          className="fixed absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       

        {/* Posts */}
        <div className="relative z-10 p-6 grid grid-cols-1  md:grid-cols-2 gap-6">
          {posts.length === 0 ? (
            <p className="text-white text-lg col-span-2">
              No posts yet.{" "}
              <Link
                to="/create"
                className="text-blue-400 underline hover:text-blue-300"
              >
                mujhe dabao!
              </Link>
            </p>
          ) : (
            posts.map((post) => (
              <PostCard key={post.id} post={post} onDelete={handleDelete} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
