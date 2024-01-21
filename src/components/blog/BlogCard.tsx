import React from "react";
import { BlogPost } from "../../data/blog";
import styled from "styled-components";

interface BlogCardProps extends BlogPost {
  index: number;
}

const BlogCard = ({
  thumbNail,
  tag,
  publicationDate,
  title,
  shortDescription,
  index,
}: BlogCardProps) => {
  return (
    <Container className="">
      <div className="md:grid grid-cols-5 gap-4 md:gap-6 lg:gap-10 items-center">
        <div
          className={`md:col-span-2 lg:col-span-3 h-auto ${
            index % 2 === 0 ? "order-1" : "order-2"
          }`}
        >
          <div className="w-full rounded-lg overflow-hidden h-[200px] sm:h-[280px] md:h-[300px] lg:h-[350px]">
            <img src={thumbNail} className="w-full h-full object-cover" />
          </div>
        </div>
        <div
          className={`md:col-span-3 lg:col-span-2 ${
            index % 2 === 0 ? "order-2" : "order-1"
          }`}
        >
          <div className="flex gap-4 my-2 mt-4">
            <p className="uppercase text-xs faded">{tag}</p>
            <p className="uppercase text-xs faded">
              {new Date(publicationDate).toDateString()}
            </p>
          </div>
          <h2
            className="text-xl text-[var(--base-color)] md:leading-[1.1] md:w-10/12"
            style={{ fontSize: "clamp(1.45rem, 4.5vw, 2.4rem)" }}
          >
            {title}
          </h2>
          <p
            className="mt-4"
            style={{ fontSize: "clamp(0.8rem, 4.5vw, 18px)" }}
          >
            {shortDescription}
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div``;

export default BlogCard;
