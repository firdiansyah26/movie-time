import { createServiceInstance } from '@/services/base.service';
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
    async getList(){
      return homeInstance.$get('/upcoming');
    }
  }
};