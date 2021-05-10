import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PostList from "../../components/PostList";
import config from "../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../lib/posts";
import { listTags, TagContent } from "../../lib/tags";
import Head from "next/head";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, tags, pagination }: Props) {
  const url = "/posts";
  const title = "All posts";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div style={{background:'#787D12'}} >
      <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal pb-6">
        <p className="text-white font-extrabold text-3xl md:text-5xl">
          NATURALEZA HERMANA
        </p>
        <p className="text-xl md:text-2xl text-gray-500">¡Bienvenidos!</p>
      </div>
      </div>
      <div style={{height:'75vh'}} className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
        <PostList posts={posts} tags={tags} pagination={pagination} />
      </div>
     
     
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
