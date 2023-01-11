<template>
  <div>
    <app-swiper :list="upcomingMovieList" />

    <app-list :list="movieList" :btnActive="btnActive" @on-sort="btnActive = $event" />
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
      movieList: [],
      upcomingMovieList: [],
      btnActive: 1
    }
  },
  watch: {
    btnActive() {
      this.fetchData();
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const query = {
        limit: 20,
        page: 1,
        year: 2020,
        sort: this.btnActive === 1 ? 'year.incr' : 'year.decr'
      }
      const { results } = await this.$services.home.getMovies(query);
      const filter = results.filter((x) => x.primaryImage)

      this.movieList = filter
      this.upcomingMovieList = filter
    }
  }
}
</script>
