import { IAuthor } from "./author";
import { IChildImageSharp } from "./image";

export interface IFields {
  slug: string;
}

export interface IFrontmatter {
  date: string;
  title: string;
  tags: string[];
  contentType: string[];
  author: IAuthor;
  featuredImage: IFeaturedImage | null;
}

export interface INode {
  id: string;
  excerpt: string;
  fields: IFields;
  frontmatter: IFrontmatter;
}

export interface IEdge {
  node: INode;
}

export interface IAllMarkdownRemark {
  edges: IEdge[];
}

export interface IPostsData {
  allMarkdownRemark: IAllMarkdownRemark;
}

export interface IFeaturedImage {
  childImageSharp: IChildImageSharp;
}

export interface IMarkdownRemark {
  id: string;
  excerpt: string;
  fields: IFields;
  frontmatter: IFrontmatter;
  html: string;
}

export interface IPostData {
  markdownRemark: IMarkdownRemark;
}
