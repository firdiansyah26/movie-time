<template>
  <div>
    <img alt="bg-img" width="100%" height="100%" src="@/assets/images/bg-image.svg" />

    <div class="flex flex-col absolute top-[40%] w-full">
      <div class="w-full p-6 pl-80 flex flex-col gap-1">
        <span class="font-medium text-lg">2020</span>
        <span class="font-semibold text-4xl">Wonder Woman 1984</span>
        <span class="font-medium text-sm">Fantasy, Action, Adventure</span>
      </div>
      <div class="w-full bg-base bg-opacity-60 h-auto p-6 pl-80 grid grid-cols-[260px_180px_180px_220px_220px]">
        <div class="flex flex-row items-center justify-start gap-2 border-r-2">
          <img alt="rating" width="32" height="32" src="@/assets/icons/ic-rating.svg" />
          <span class="font-semibold text-4xl">7.0</span>
          <div class="flex flex-col items-start justify-center">
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
      <div class="w-full bg-white p-6 pl-80">desc</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageDetail',
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>