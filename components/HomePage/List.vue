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
          'bg-primary': btnActive !== 1,
          'bg-[#E74C3C]': btnActive === 1,
        }" @click="$emit('on-sort', 1)">Popularity</span>
        <span class="cursor-pointer rounded-full font-semibold px-5 py-1" :class="{
          'bg-primary': btnActive !== 2,
          'bg-[#E74C3C]': btnActive === 2,
        }" @click="$emit('on-sort', 2)">Release Date</span>
      </div>
    </div>
    <div v-if="list.length !== 0" class="grid grid-cols-5 gap-3 p-6 mx-16">
      <div v-for="(data, idx) in list" :key="idx">
        <comp-card :image="data?.primaryImage?.url" :year="data?.releaseDate?.year" :title="data?.titleText?.text"
          :type="data?.titleType?.text" :id="data?.id" />
      </div>
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
  props: {
    list: {
      type: Array,
      default: () => ([])
    },
    btnActive: {
      type: Number,
      default: 1
    }
  },
  mounted() {

  },
}
</script>