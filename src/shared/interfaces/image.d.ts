export interface IChildImageSharp {
  fluid: IFluid
}

export interface IFluid {
  aspectRatio: number;
  sizes: string;
  src: string;
  srcSet: string;
}