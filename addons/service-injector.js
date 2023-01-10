import homeServices from '@/services/home.services';

export default (context, inject) => {
  const services = {
    home: homeServices(context),
  };
  inject('services', services);
};
