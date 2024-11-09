import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-base-100"
    >
      <p className="text-sm text-slate-400">{props.date}</p>

      <Link href={`/blogs/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-content-base">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;