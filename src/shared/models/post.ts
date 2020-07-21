import {
  IPostData,
  IMarkdownRemark,
  IPostsData,
  IAllMarkdownRemark,
  IEdge,
  INode,
  IFields,
  IFrontmatter,
  IFeaturedImage
} from "../interfaces/post";
import { Author } from "./author";
import { ChildImageSharp } from "./image";
export class PostsData {
  allMarkdownRemark: AllMarkdownRemark;
  constructor(attrs: IPostsData) {
    this.allMarkdownRemark = new AllMarkdownRemark(attrs.allMarkdownRemark);
  }
}

export class PostData {
  markdownRemark: MarkdownRemark;
  constructor(attrs: IPostData) {
    this.markdownRemark = new MarkdownRemark(attrs.markdownRemark);
  }
}

class AllMarkdownRemark {
  edges: Edge[] = [];
  constructor(attrs: IAllMarkdownRemark) {
    attrs.edges.map((edge) => {
      this.edges.push(new Edge(edge));
    });
  }
}

class MarkdownRemark {
  id: string;
  excerpt: string;
  fields: Fields;
  frontmatter: Frontmatter;
  html: string;
  constructor(attrs: IMarkdownRemark) {
    this.excerpt = attrs.excerpt;
    this.fields = attrs.fields;
    this.frontmatter = new Frontmatter(attrs.frontmatter);
    this.id = attrs.id;
    this.html = attrs.html;
  }
}

export class Edge {
  node: Node;
  constructor(attrs: IEdge) {
    this.node = new Node(attrs.node);
  }
}

class Node {
  id: string;
  excerpt: string;
  fields: Fields;
  frontmatter: Frontmatter;
  constructor(attrs: INode) {
    this.excerpt = attrs.excerpt;
    this.fields = attrs.fields;
    this.frontmatter = new Frontmatter(attrs.frontmatter);
    this.id = attrs.id;
  }
}

class Fields {
  slug: string;
  constructor(attrs: IFields) {
    this.slug = attrs.slug;
  }
}

class Frontmatter {
  date: string;
  title: string;
  tags: string[];
  contentType: string[];
  featuredImage: FeaturedImage | null;
  author: Author | null;
  constructor(attrs: IFrontmatter) {
    this.date = attrs.date;
    this.title = attrs.title;
    this.tags = attrs.tags ? attrs.tags : [];
    this.contentType = attrs.contentType ? attrs.contentType : [];
    this.featuredImage = attrs.featuredImage
      ? new FeaturedImage(attrs.featuredImage)
      : null;
    this.author = attrs.author ? new Author(attrs.author) : null;
  }
}

class FeaturedImage {
  childImageSharp: ChildImageSharp;
  constructor(attrs: IFeaturedImage) {
    this.childImageSharp = new ChildImageSharp(attrs.childImageSharp);
  }
}
