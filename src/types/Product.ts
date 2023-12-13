import {Image} from "./Image";
import {Description} from "./Description";
import {Color} from "./Color";

export type Product = {
  id: string;
  namespaceId: string;

  name: string;
  capacity: string;
  capacityAvailable: string[];
  priceRegular: number;
  priceDiscount: number;

  colors: Color[];
  images?: Image[];
  description: Description[];

  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];

  discount?: number;

  time_created: string;
  time_updated: string;
}

export type ProductShorted = Omit<Product, "colors" | "images" | "description" | "discount"> & { image: string }