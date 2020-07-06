import { IPostsData, IAllMarkdownRemark, IEdge, INode, IFields, IFrontmatter, IFeaturedImage, IChildImageSharp, IFluid } from "../interfaces/post";

export class PostsData {
    allMarkdownRemark: AllMarkdownRemark;
    constructor(attrs: IPostsData) {
        this.allMarkdownRemark = new AllMarkdownRemark(attrs.allMarkdownRemark)
    }
}

class AllMarkdownRemark {
    edges: Edge[] = []
    constructor(attrs: IAllMarkdownRemark) {
        attrs.edges.map( edge => {
            this.edges.push( new Edge(edge))
        })
    }
}

export class Edge {
    node: Node
    constructor(attrs: IEdge) {
        this.node = new Node(attrs.node)
    }
}

class Node {
    id: string
    excerpt: string
    fields: Fields
    frontmatter: Frontmatter 
    constructor(attrs: INode) {
        this.excerpt = attrs.excerpt
        this.fields = attrs.fields
        this.frontmatter = new Frontmatter(attrs.frontmatter)
        this.id = attrs.id
    }
}

class Fields {
    slug: string
    constructor(attrs: IFields) {
        this.slug = attrs.slug
    }
}

class Frontmatter {
    date: string
    title: string
    tags: string[]
    featuredImage: FeaturedImage | null
    constructor(attrs: IFrontmatter) {
        this.date = attrs.date
        this.title = attrs.title
        this.tags = attrs.tags ? attrs.tags : []
        this.featuredImage = attrs.featuredImage ? new FeaturedImage(attrs.featuredImage) : null
    }
}

class FeaturedImage {
    childImageSharp: ChildImageSharp
    constructor(attrs: IFeaturedImage) {
        this.childImageSharp = new ChildImageSharp(attrs.childImageSharp)
    }
}

class ChildImageSharp {
    fluid: Fluid
    constructor(attrs: IChildImageSharp) {
        this.fluid = new Fluid(attrs.fluid)
    }
}

class Fluid {
    aspectRatio: number;
    base64: string;
    sizes: string;
    src: string;
    srcSet: string;
    constructor(attrs: IFluid) {
        this.aspectRatio = attrs.aspectRatio
        this.sizes = attrs.sizes
        this.src = attrs.src
        this.srcSet = attrs.srcSet
    }
}
