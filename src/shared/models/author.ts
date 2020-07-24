import { IAuthor, IAuthorImage } from "../interfaces/author";
import { ChildImageSharp } from "./image";

export class Author {
  name: string;
  bio: string;
  title: string;
  location: string;
  id: string;
  twitter: string;
  github: string;
  avatar: string;
  image: AuthorImage | null;
  constructor(attrs: IAuthor) {
    this.name = attrs.name;
    this.bio = attrs.bio;
    this.title = attrs.title ? attrs.title : "";
    this.location = attrs.location ? attrs.location : "";
    this.id = attrs.id;
    this.twitter = attrs.twitter ? attrs.twitter : "";
    this.github = attrs.github ? attrs.github : "";
    this.avatar = attrs.avatar ? attrs.avatar : "";
    this.image = attrs.image ? new AuthorImage(attrs.image) : null;
  }
}

class AuthorImage {
  childImageSharp: ChildImageSharp;
  constructor(attrs: IAuthorImage) {
    this.childImageSharp = new ChildImageSharp(attrs.childImageSharp);
  }
}
