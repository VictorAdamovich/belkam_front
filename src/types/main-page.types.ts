import { DefaultAttributesType, ImageArrURLDataType, ImageURLDataType } from 'src/types/strapi.types';

export interface IStocksAttributes extends DefaultAttributesType {
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  imgUrl: ImageURLDataType;
}

export interface IOurWorkAttributes extends DefaultAttributesType {
  imges: ImageArrURLDataType;
}

export interface IWorkPlanAttributes extends DefaultAttributesType {
  price: number;
}

export interface IReviewsAttributes extends DefaultAttributesType {
  name: string;
  type: string;
  description: string;
}
