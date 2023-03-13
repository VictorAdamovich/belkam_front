import axios from 'axios';
import {
  IOurWorkAttributes, IReviewsAttributes, IStocksAttributes, IWorkPlanAttributes,
} from 'src/types/main-page.types';
import { DataType, StrapiReqType } from 'src/types/strapi.types';

import {
  API_OUR_WORKS, API_REVIEWS, API_STOCK, API_WORK_PLANS, BASE_URL,
} from '@constants/api.constants';

const settings = {
  // withCredentials: true,
  headers: {
    // eslint-disable-next-line max-len
    'API-KEY': 'a954d429b0d23f12ca9b0e1eacea26e51b9e1c666b99a51afcdbd7816698e814e09a1abdcd3bcb2710c0ed5ebca890986c663160d093d8ba359a1872ecebb0f557745fbbb3eeecfd9f96389ccb442b1ad0160ed73d6d35370d953dbd865344ea4311730fcc5c53caaa419a5c06cb56915bb32b2776bdc9f0edd0d71f60fe735d',
    // eslint-disable-next-line max-len
    Authorization: 'a954d429b0d23f12ca9b0e1eacea26e51b9e1c666b99a51afcdbd7816698e814e09a1abdcd3bcb2710c0ed5ebca890986c663160d093d8ba359a1872ecebb0f557745fbbb3eeecfd9f96389ccb442b1ad0160ed73d6d35370d953dbd865344ea4311730fcc5c53caaa419a5c06cb56915bb32b2776bdc9f0edd0d71f60fe735d',
  },
};
const instance = axios.create({
  baseURL: BASE_URL,
  ...settings,
});

export const mainPageApi = {
  getStocks: () => instance.get<StrapiReqType<DataType<IStocksAttributes>[]>>(API_STOCK),
  getReviews: () => instance.get<StrapiReqType<DataType<IReviewsAttributes>[]>>(API_REVIEWS),
  getOurWorks: () => instance.get<StrapiReqType<DataType<IOurWorkAttributes>[]>>(API_OUR_WORKS),
  getWorkPlans: () => instance.get<StrapiReqType<DataType<IWorkPlanAttributes>[]>>(API_WORK_PLANS),
};
