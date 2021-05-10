import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <>
    <div className="container  mx-auto">
    <ul className={"flex flex-wrap justify-between pt-12 -mx-6"}>
          {posts.map((it, i) => (
            <li key={i} className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
              <PostItem post={it} />
            </li>
          ))}
        </ul>
    </div>
    
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        />

      
      <ul className={"categories hidden"}>
        {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} />
          </li>
        ))}
      </ul>
    </>
        
      
   
  );
}
