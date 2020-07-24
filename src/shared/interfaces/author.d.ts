import { IChildImageSharp } from "./image";

export interface IAuthor {
  name: string;
  bio: string;
  title?: string;
  location?: string;
  id: string;
  twitter?: string;
  github?: string;
  avatar?: string;
  image?: IAuthorImage;
}

export interface IAuthorImage {
  childImageSharp: IChildImageSharp;
}
