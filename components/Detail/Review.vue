<template>
  <div class="p-3 rounded-lg bg-[#F9F9F9] w-full h-80 max-h-full flex flex-col gap-3 text-black">
    <div class="grid grid-cols-[48px_1fr_auto] gap-3 items-center">
      <div class="rounded-full bg-[#cbccce] w-12 h-12"></div>
      <div class="flex flex-col">
        <span class="font-bold text-sm text-black">{{ name }}</span>
        <span class="font-normal text-xs text-[##666666]">{{ date }}</span>
      </div>
      <div class="bg-[#eaeaea] rounded-lg flex flex-row h-fit items-start p-2 py-3 gap-1">
        <img alt="rating" src="@/assets/icons/ic-rating.svg" width="17" height="17" class="pt-1"/>
        <span class="font-semibold text-4xl">{{ rating }}</span>
      </div>
    </div>
    <p class="italic" v-html="review"></p>
  </div>
</template>

<script>
export default {
  name: 'CompReview',
  props: {
    name: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    rating: {
      type: String,
      default: ''
    },
    review: {
      type: String,
      default: ''
    },
  }
}
</script>