<template>
  <div class="w-[700px]">
    <div class="flex flex-row">
      <img alt="ic-film" src="@/assets/icons/ic-film.svg" width="24" height="24" class="relative left-[30px]" />
      <div class="w-full">
        <input type="search" placeholder="Find movie" id="search"
          class="block w-full p-2 px-10 text-sm text-custom-white border border-base rounded-lg bg-primary focus:ring-base focus:border-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-custom-white dark:focus:ring-base dark:focus:border-base">

        <!-- list -->
        <div class="absolute w-[650px] bg-primary px-4 py-2  rounded-lg">
          <span class="cursor-pointer hover:bg-base p-2">sdadas</span>
        </div>
      </div>
      <img alt="ic-film" src="@/assets/icons/ic-search.svg" width="24" height="24" class="relative right-[30px]" />
    </div>
  </div>
</template>