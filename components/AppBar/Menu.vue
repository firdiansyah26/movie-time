<template>
  <div class="flex gap-7 text-custom-white">
    <div v-for="(obj, idx) in list" :key="idx" class="flex gap-1">
      <img v-if="obj.icon" :src="require(`@/assets/icons/${obj.icon}.svg`)" :alt="obj.icon" width="20" height="20" />
      <span class="uppercase">{{ obj.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMenu',
  data() {
    return {
      list: [
        {
          label: 'Categories',
          icon: 'ic-category'
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
  }
}
</script>