<template>
  <div class="flex gap-7 text-custom-white">
    <div v-for="(obj, idx) in list" :key="idx">
      <div class="flex gap-1" @mouseover="isHover = true">
        <img v-if="obj.icon" :src="require(`@/assets/icons/${obj.icon}.svg`)" :alt="obj.icon" width="20" height="20" />
        <span class="uppercase">{{ obj.label }}</span>
      </div>
      <div v-show="isHover" v-if="obj.menu && obj.menu.length" class="bg-white absolute" @mouseleave="isHover = false">
        <ul v-for="(data, idx) in obj.menu" :key="idx" class="py-1 text-sm text-base" aria-labelledby="dropdownPopular">
          <li class="p-1 px-2 hover:bg-gray-500 hover:text-white">
            <nuxt-link :to="`/list?page=1&genre=${data}`">
              {{ data }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMenu',
  data() {
    return {
      isHover: false,
      list: [
        {
          label: 'Categories',
          icon: 'ic-category',
          menu: [
            'Action',
            'Adventure',
            'Animation',
            'Comedy',
            'Crime',
            'Documentary',
            'Drama',
            'Family',
            'Fantasy',
            'History',
            'Horror'
          ],
        },
        {
          label: 'Movies'
        },
        {
          label: 'TV Shows'
        },
        {
          label: 'Login'
        },
      ]
    }
  },
}
</script>