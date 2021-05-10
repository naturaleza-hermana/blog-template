import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";


type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  console.log(post)
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
       
          <img src={post.image} className="h-full w-full rounded-t pb-6" />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6"> <Date date={parseISO(post.date)} /></p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">{post.title}</div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
         
          </p>
        </a>
    </Link>
  );
}
