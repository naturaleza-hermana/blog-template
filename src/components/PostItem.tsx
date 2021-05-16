import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";


type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
          <div className="w-full font-bold text-xl text-gray-900">{post.title}</div>
          <p className="w-full t-right"> <Date date={parseISO(post.date)} /></p>
          <img src={post.image} className="" />
        </a>
    </Link>
  );
}
