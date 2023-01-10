<template>
  <div>
    <app-swiper />

    <app-list :list="movieList" />
  </div>
</template>

<script>
import Swiper from '@/components/HomePage/Swiper'
import List from '@/components/HomePage/List'

export default {
  name: 'PageIndex',
  components: {
    'app-swiper': Swiper,
    'app-list': List
  },
  data() {
    return {
      movieList: []
    }
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const query = {
        limit: 20,
        page: 1,
        year: 2020
      }
      const { results } = await this.$services.home.getMovies(query);
      this.movieList = results.filter((x) => x.primaryImage)

    }
  }
}
</script>
