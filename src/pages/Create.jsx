import AddPostForm from "../components/AddPostForm";

export default function Create({ onAdd }) {
  return (
    <>
      <AddPostForm onAdd={onAdd} />
    </>
  );
}
