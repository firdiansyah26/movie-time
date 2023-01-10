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
      <comp-filter />
      <div class="flex flex-col items-center gap-6">
        <div class="grid grid-cols-4 gap-3 px-6">
          <comp-card />
          <comp-card />
          <comp-card />
          <comp-card />
          <comp-card />
          <comp-card />
          <comp-card />
          <comp-card />
        </div>
        <span class="cursor-pointer rounded-full font-semibold px-5 py-1 bg-[#E74C3C]">Load More</span>
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
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>