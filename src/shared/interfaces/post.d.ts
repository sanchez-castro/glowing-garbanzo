
export interface IFields {
    slug: string;
}

export interface IFrontmatter {
    date: string;
    title: string;
    tags: string[];
    type: string[];
    featuredImage: IFeaturedImage;
}

export interface INode {
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
    childImageSharp: IChildImageSharp
}

export interface IChildImageSharp {
    fluid: IFluid
}

export interface IFluid {
    aspectRatio: number;
    base64: string;
    sizes: string;
    src: string;
    srcSet: string;
}