<template>
  <div class="w-full min-h-screen pb-6">
    <div class="bg-base w-full h-52 absolute"></div>
    <div class="flex justify-between items-center p-6 mx-16 relative">
      <div class="flex flex-col items-start gap-1 my-3">
        <hr class="w-28 h-[6px] bg-[#E74C3C] border-0">
        <span class="font-semibold text-custom-white text-2xl">Discover Movies</span>
      </div>
      <div class="flex gap-4">
        <span class="cursor-pointer rounded-full font-semibold px-5 py-1" :class="{
          'bg-primary': true,
          'bg-[#E74C3C]': btnActive === 1,
        }" @click="btnActive = 1">Popularity</span>
        <span class="cursor-pointer rounded-full font-semibold px-5 py-1" :class="{
          'bg-primary': true,
          'bg-[#E74C3C]': btnActive === 2,
        }" @click="btnActive = 2">Release Date</span>
      </div>
    </div>
    <div class="grid grid-cols-5 gap-3 p-6 mx-16">
      <comp-card />
      <comp-card />
      <comp-card />
      <comp-card />
      <comp-card />
      <comp-card />
      <comp-card />
      <comp-card />
    </div>
  </div>

</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'List',
  components: {
    'comp-card': Card
  },
  mounted() {

  },
  data() {
    return {
      btnActive: 1
    }
  },
  methods: {

  }
}
</script>