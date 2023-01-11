<template>
  <div class="flex flex-row">
    <div class="relative inline-block" @mouseover="onHover" @mouseleave="hover.id = 0">
      <div v-show="isCurrent && hover.id === 1"
        class="absolute flex flex-col gap-2 items-center justify-center text-custom-white w-full h-full bg-base bg-opacity-90">
        <div class="flex flex-row gap-2">
          <img alt="rating" src="@/assets/icons/ic-rating.svg" width="32" height="32" />
          <span class="font-semibold text-2xl">7.2</span>
        </div>
        <span class="font-semibold text-lg">{{ genre }}</span>
        <span class="cursor-pointer rounded-full font-semibold px-5 py-1 bg-[#E74C3C]">
          <nuxt-link :to="`/detail?id=${id}`">
            View
          </nuxt-link>
        </span>
      </div>
      <img alt="img" width="400" class="object-fill h-[346px]" :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompCardImage',
  props: {
    id: {
      type: String,
      default: ''
    },
    genre: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    isCurrent: {
      type: Boolean,
      default: false
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
    onHover() {
      this.hover.id = 1;
    }
  }
}
</script>