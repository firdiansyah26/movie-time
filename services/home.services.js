import { createServiceInstance } from '@/services/base.services';
import config from '@/config';

/**
 * @param {import('@/services/base.service').Context} context - Nuxt context
 */
export default (context) => {
  const homeInstance = createServiceInstance({
    context,
    baseURL: config.endpoints.titles,
  });
  return {
    async getMovies(params){
      return homeInstance.$get('', { params });
    },
    async getDetailMovies(id){
      return homeInstance.$get(`/${id}`);
    }
  }
};