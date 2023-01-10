<template>
  <div>
    <div class="flex flex-col top-[40%] w-full">
      <div class="left-24 top-80">
        <img class="absolute top-80 z-[2] left-28 h-[280px]" alt="img" width="200" height="130"
          :src="movies?.primaryImage?.url" />
      </div>

      <div class="relative bg-[url('@/assets/images/bg-image.svg')] bg-cover pt-72">
        <div class="w-full p-6 pl-96 flex flex-col gap-1">
          <span class="font-medium text-lg">{{ movies?.releaseYear?.year }}</span>
          <span class="font-semibold text-4xl">{{ movies?.titleText?.text }}</span>
          <span class="font-medium text-sm">{{ movies?.titleType?.text }}</span>
        </div>
        <div class="w-full bg-base bg-opacity-60 h-auto p-6 pl-96 grid grid-cols-[260px_180px_180px_220px_220px]">
          <div class="flex flex-row items-center justify-start gap-2 border-r-2">
            <img alt="rating" width="32" height="32" src="@/assets/icons/ic-rating.svg" />
            <span class="font-semibold text-4xl">7.0</span>
            <div class="flex flex-col items-start justify-center ml-3">
              <span class="uppercase text-custom-white text-opacity-60">User Score</span>
              <span class="uppercase">3621 Votes</span>
            </div>
          </div>
          <div class="flex flex-col items-start justify-center border-r-2 px-3">
            <span class="uppercase text-custom-white text-opacity-60">Status</span>
            <span class="uppercase">Released</span>
          </div>
          <div class="flex flex-col items-start justify-center border-r-2 px-3">
            <span class="uppercase text-custom-white text-opacity-60">language</span>
            <span class="uppercase">english</span>
          </div>
          <div class="flex flex-col items-start justify-center border-r-2 px-3">
            <span class="uppercase text-custom-white text-opacity-60">budget</span>
            <span class="uppercase">$200,000,000.00</span>
          </div>
          <div class="flex flex-col items-start justify-center px-3">
            <span class="uppercase text-custom-white text-opacity-60">production</span>
            <span class="uppercase">DC Entertainment</span>
          </div>
        </div>

        <div class="w-full bg-white p-6 pl-96 flex flex-col gap-1">
          <span class="text-orange-inter-0 font-semibold text-sm">OVERVIEW</span>
          <span class="text-black text-sm">{{ movies?.primaryImage?.caption?.plainText }}</span>
        </div>
      </div>

      <div class="bg-white z-[1] w-full h-full flex flex-col gap-3 p-6 pt-5 px-24">
        <span class="text-orange-inter-0 font-semibold text-sm">REVIEWS</span>
        <div class="grid grid-cols-[1fr_1fr] gap-6">
          <div v-for="(data, idx) in reviewList" :key="idx">
            <comp-review :name="data.name" :date="data.date" :rating="data.rating" :review="data.review" />
          </div>
        </div>
      </div>

      <div v-if="recomendationList.length" class="bg-base p-6 px-24">
        <span class="text-white font-semibold text-sm">RECOMMENDATION MOVIES</span>

        <div class="grid grid-cols-5 gap-3 py-6">
          <div v-for="(data, idx) in recomendationList" :key="idx">
            <comp-card :image="data?.primaryImage?.url" :year="data?.releaseDate?.year" :title="data?.titleText?.text"
              :type="data?.titleType?.text" :id="data?.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Review from '@/components/Detail/Review'
import Card from '@/components/Card'

export default {
  name: 'PageDetail',
  components: {
    'comp-review': Review,
    'comp-card': Card
  },
  data() {
    return {
      reviewList: [{
        name: "SWITCH.",
        date: "December 18, 2020",
        rating: '7.0',
        review: "It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest."
      }, {
        name: "msbreviews",
        date: "December 18, 2020",
        rating: '8.0',
        review: "If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com<br /><br />The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only "
      }],
      movies: {},
      recomendationList: [],
    }
  },
  watch: {
    '$route.query': function () {
      this.fetchData()
    },
  },
  mounted() {
    this.fetchData()
    this.fetchRecomendation()
  },
  methods: {
    async fetchData() {
      const { id } = this.$route.query;
      const { results } = await this.$services.home.getDetailMovies(id);
      this.movies = results
    },
    async fetchRecomendation() {
      const query = {
        limit: 10,
        page: 1,
        year: 2020,
      }
      const { results } = await this.$services.home.getMovies(query);
      this.recomendationList = results.filter((x) => x.primaryImage)
    }
  }
}
</script>