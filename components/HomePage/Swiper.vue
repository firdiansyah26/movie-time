<template>
  <div class="flex flex-col gap-7 py-6 my-o mx-auto relative list-none overflow-hidden">
    <div class="flex items-center gap-x-6 mx-6">
      <div v-for="(data, idx) in list" :key="idx" class="w-[600px] min-w-[600px] max-w-[600px]"
        :style="{ 'transform': `translateX(${-600 * (currentSlide - 1)}px)` }">
        <app-card-swipe :is-current="currentSlide === idx" :id="data?.id" :title="data?.titleText?.text"
          :genre="data?.titleType?.text" :year="data?.releaseDate?.year"
          :synopsis="data?.primaryImage?.caption?.plainText" :image="data?.primaryImage?.url" />
      </div>
    </div>

    <div class="flex items-center justify-center gap-x-4 py-4">
      <div v-for="(data, idx) in list" :key="idx">
        <button class="h-4 rounded-full" :class="{
          'bg-white w-4': currentSlide !== idx,
          'bg-[#E74C3C] w-12': currentSlide === idx
        }" @click="currentSlide = idx" />
      </div>
    </div>
  </div>
</template>

<script>
import CardSwipe from '@/components/HomePage/CardSwipe'

export default {
  name: 'CompSlide',
  components: {
    'app-card-swipe': CardSwipe
  },
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      currentSlide: 1
    }
  },
}
</script>