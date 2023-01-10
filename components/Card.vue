<template>
  <div class="w-fit flex flex-col gap-2">
    <div class="relative inline-block" @mouseover="onHover" @mouseleave="hover.id = 0">
      <div v-show="hover.id === 1"
        class="absolute flex flex-col gap-2 items-center justify-center text-custom-white w-full h-full bg-base bg-opacity-90">
        <div class="flex flex-row gap-2">
          <img alt="rating" src="@/assets/icons/ic-rating.svg" width="32" height="32" />
          <span class="font-semibold text-2xl">7.2</span>
        </div>
        <span class="font-semibold text-lg">{{ type }}</span>
        <span class="cursor-pointer rounded-full font-semibold px-5 py-1 bg-[#E74C3C]">
          <nuxt-link :to="`/detail?id=${id}`">
            View
          </nuxt-link>
        </span>
      </div>
      <img alt="img" width="400" class="object-fill h-[346px]" :src="image" />
      <span v-if="hover.id === 0"
        class="absolute right-0 top-0 w-12 h-8 bg-base bg-opacity-50 text-custom-white font-semibold text-center">7.8</span>
    </div>

    <span class="font-semibold text-base text-white">{{ title }}</span>
    <span class="font-normal text-secondary text-sm">{{ year }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    year: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hover: {
        id: 0,
      }
    }
  },
  methods: {
    onHover(data) {
      this.hover.id = 1;
    }
  }
}
</script>