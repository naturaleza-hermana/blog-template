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
    <div className="container mx-auto">
      <ul className={"grid"}>
            {posts.map((it, i) => (
              <li key={i} className="module">
                <PostItem post={it} />
              </li>
            ))}
          </ul>
      </div>
      
      <div className="container mx-auto">
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
      </div>
       
    </>
        
      
   
  );
}
