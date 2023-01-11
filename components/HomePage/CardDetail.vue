<template>
  <div class="flex flex-col my-4 p-3 bg-black text-white gap-2 w-full">
    <div class="flex flex-row gap-2">
      <img alt="rating" src="@/assets/icons/ic-rating.svg" height="16" width="16" />
      <span class="font-bold text-lg">7.3</span>
    </div>
    <span class="font-medium text-3xl">{{ title }}</span>
    <div class="flex flex-row gap-3">
      <span>{{ year }}</span>
      <img alt="bullet" src="@/assets/icons/ic-bullet.svg" width="6" height="6" />
      <span>{{ genre }}</span>
    </div>
    <span class="text-xs">{{ synopsis }}</span>
  </div>
</template>

<script>
export default {
  name: 'CompCardDetail',
  props: {
    title: {
      type: String,
      default: ''
    },
    genre: {
      type: String,
      default: ''
    },
    year: {
      type: Number,
      default: 0
    },
    synopsis: {
      type: String,
      default: ''
    },
  },
}
</script>