<template>
  <div class="z-[1] w-full bg-dialog h-fit rounded-lg flex flex-col text-left gap-3 py-3">
    <span class="px-3 font-semibold text-custom-white text-[16px]">Sort Result By</span>
    <hr class="h-px bg-gray-700 border-0" />
    <div class="px-3">
      <comp-ddl :list="listPopularity" @on-select="onChange('sort', $event)" />
    </div>
    <hr class="h-px bg-gray-700 border-0" />
    <span class="px-3 font-semibold text-custom-white text-[16px]">Genres</span>
    <hr class="h-px bg-gray-700 border-0" />
    <div v-for="(data, idx) in listGenre" :key="idx">
      <div class="flex flex-row justify-between px-3">
        <span class="text-sm">{{ data }}</span>
        <input type="checkbox" class="checked:bg-[#E74C3C]" :value="data"
          @change="onChange('genre', $event)" :checked="data === $route.query.genre" />
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown';

export default {
  name: 'CompFilter',
  components: {
    'comp-ddl': Dropdown,
  },
  data() {
    return {
      listGenre: [
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
      listPopularity: [
        { label: 'Popularity Ascending', value: 'year.incr' },
        { label: 'Popularity Descending', value: 'year.decr' },
        { label: 'Release Date Ascending', value: 'year.incr' },
        { label: 'Release Date Descending', value: 'year.decr' },
        { label: 'Rating Ascending', value: 'year.incr' },
        { label: 'Rating Descending', value: 'year.decr' },
      ],
      filter: {
        sort: '',
        genre: ''
      }
    }
  },
  methods: {
    onChange(type, event) {
      let value = null;

      if (type === 'sort') value = event.value
      else value = event.target.value

      this.$emit('on-filter', { type, value })
    }
  }
}
</script>