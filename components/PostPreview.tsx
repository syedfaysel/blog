import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  // console.log(props.tags);
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
      <div className="card-actions justify-start mt-3">
        Tags: 
        {props.tags &&
          props.tags.map((tag, index) => (
            <div key={index} className="badge badge-outline">{tag}</div>
          ))}
      </div>
    </div>
  );
};

export default PostPreview;
