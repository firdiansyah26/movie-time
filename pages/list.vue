<template>
  <div class="w-full min-h-screen pb-6">
    <div class="bg-base w-full h-52 absolute"></div>
    <div class="flex justify-between items-center p-6 mx-16 relative">
      <div class="flex flex-col items-start gap-1 my-3">
        <hr class="w-28 h-[6px] bg-[#E74C3C] border-0">
        <span class="font-semibold text-custom-white text-2xl">Movies</span>
      </div>
    </div>
    <div class="grid grid-cols-[300px_1fr] gap-6 mx-16 p-6">
      <comp-filter @on-filter="onFilter" />
      <div v-if="movieList.length" class="flex flex-col gap-3 items-center">
        <div class="grid grid-cols-4 gap-3 px-6">
          <div v-for="(data, idx) in movieList" :key="idx">
            <comp-card :image="data?.primaryImage?.url" :year="data?.releaseDate?.year" :title="data?.titleText?.text"
              :type="data?.titleType?.text" :id="data?.id" />
          </div>
        </div>
        <span class="cursor-pointer rounded-full font-semibold px-5 py-1 bg-[#E74C3C]" @click="onMore">Load More</span>
      </div>
    </div>
  </div>

</template>

<script>
import Card from '@/components/Card'
import Filter from '@/components/List/Filter'

export default {
  name: 'pageList',
  components: {
    'comp-card': Card,
    'comp-filter': Filter
  },
  data() {
    return {
      movieList: [],
      filter: {
        genre: '',
        sort: ''
      }
    }
  },
  watch: {
    '$route.query': function () {
      this.fetchData();
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { page } = this.$route.query;

      const query = {
        limit: 10,
        page: page || 1,
        year: 2020,
        genre: this.$route.query?.genre || null,
        sort: this.$route.query?.sort || null
      }
      const { results } = await this.$services.home.getMovies(query);
      let tempList = results.filter((x) => x.primaryImage)

      if (page === 1) this.movieList = tempList
      else this.movieList = this.movieList.concat(tempList)
    },
    onMore() {
      const { page, ...query } = this.$route.query;
      this.$router.push({
        query: {
          ...query,
          page: parseInt(page || 0) + 1 || 1
        }
      });

    },
    onFilter(e) {
      const { ...query } = this.$route.query;

      this.filter[e.type] = e.value

      this.$router.push({
        query: {
          ...query,
          page: 1,
          genre: this.filter.genre,
          sort: this.filter.sort
        }
      });
    }
  }
}
</script>