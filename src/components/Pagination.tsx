import { generatePagination } from "../lib/pagination";
import Link from "next/link";

type Props = {
  current: number;
  pages: number;
  link: {
    href: (page: number) => string;
    as: (page: number) => string;
  };
};
export default function Pagination({ current, pages, link }: Props) {
  const pagination = generatePagination(current, pages);
  return (
    <ul className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
      {pagination.map((it, i) => (
        <li key={i} className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
          {it.excerpt ? (
            "..."
          ) : (
            <Link href={link.href(it.page)} as={link.as(it.page) }>
              <a className={it.page === current ? "active" : null}>{it.page}</a>
            </Link>
          )}
        </li>
      ))}
      <style jsx>{`
        ul {
          list-style: none;
          margin: 3rem 0 0 0;
          padding: 0;
        }
        li {
          display: inline-block;
          margin-right: 1em;
          color: #9b9b9b;
          font-size: 1.25rem;
        }
        a.active {
          color: #222;
          font-weight: bold;
        }
      `}</style>
    </ul>
  );
}
