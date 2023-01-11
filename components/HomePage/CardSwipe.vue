<template>
  <div class="flex flex-row" :class="{ 'opacity-40 transfo': !isCurrent }"
    :style="!isCurrent ? {'transform': 'scale(0.7)', 'transition': 'all 0.75s'} : {'transition': 'all 0.75s'}">
    <comp-card-image :image="image" :id="id" :genre="genre" :is-current="isCurrent" />
    <comp-card-detail :synopsis="synopsis" :genre="genre" :year="year" :title="title" />
  </div>
</template>

<script>
import CardDetail from './CardDetail'
import CardImage from './CardImage'

export default {
  name: 'CompCardSwipe',
  components: {
    'comp-card-image': CardImage,
    'comp-card-detail': CardDetail,
  },
  props: {
    id: {
      type: String,
      default: ''
    },
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