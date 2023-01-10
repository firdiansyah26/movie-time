<template>
  <div>
    <app-swiper />

    <app-list />
  </div>
</template>

<script>
import Swiper from '@/components/HomePage/Swiper'
import List from '@/components/HomePage/List'

export default {
  name: 'PageIndex',
  components: {
    'app-swiper': Swiper,
    'app-list': List
  }
}
</script>
