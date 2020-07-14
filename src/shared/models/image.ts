import { IChildImageSharp, IFluid } from "../interfaces/image";

export class ChildImageSharp {
  fluid: Fluid
  constructor(attrs: IChildImageSharp) {
      this.fluid = new Fluid(attrs.fluid)
  }
}

class Fluid {
  aspectRatio: number;
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
