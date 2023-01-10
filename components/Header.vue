<template>
  <div
    class="z-[2] top-0 w-full h-[66px] bg-base text-custom-white grid grid-cols-[100px_700px_500px] justify-between items-center justify-items-end gap-3 px-24"
    :class="{ 'bg-opacity-60 absolute': isOpacity, 'sticky': !isOpacity }">
    <nuxt-link to="/">
      <img alt="logo-color" class="cursor-pointer" height="31" width="112" src="@/assets/icons/logo-color.svg" />
    </nuxt-link>
    <app-search-box />
    <app-menu />
  </div>
</template>

<script>
import Menu from '@/components/AppBar/Menu'
import SearchBox from '@/components/AppBar/SearchBox'

export default {
  name: "Header",
  components: {
    'app-menu': Menu,
    'app-search-box': SearchBox,
  },
  computed: {
    isOpacity() {
      return this.$route.name === 'detail'
    }
  }
}
</script>