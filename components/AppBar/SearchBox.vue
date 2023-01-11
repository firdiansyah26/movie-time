<template>
  <div class="w-[700px]">
    <div class="flex flex-row">
      <img alt="ic-film" src="@/assets/icons/ic-film.svg" width="24" height="24" class="relative left-[30px]" />
      <div class="w-full">
        <input type="search" placeholder="Find movie" id="search" @input="searchKey = $event.target.value"
          @focus-in="searchKey = $event.target.value"
          class="block w-full p-2 px-10 text-sm text-custom-white border border-base rounded-lg bg-primary focus:ring-base focus:border-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-custom-white dark:focus:ring-base dark:focus:border-base">

        <!-- list -->
        <div v-if="searchKey" class="absolute w-[650px] bg-primary px-4 py-2  rounded-lg">
          <div v-for="(label, idx) in searchList" :key="idx">
            <p class="cursor-pointer hover:bg-base p-2 text-white" v-html="highlightText(label, searchQueriesFilter)" />
          </div>
        </div>
      </div>
      <img alt="ic-film" src="@/assets/icons/ic-search.svg" width="24" height="24"
        class="relative right-[30px] cursor-pointer"   />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      searchList: [
        'Wonder Woman 1984',
        'Wonder Woman',
        'Wonder',
        'Wonder Woman',
        'Wonder Woman: Bloodlines',
        'Wonder Park',
        'Wonder Boys',
      ],
      isLoading: false,
      searchKey: ''
    }
  },
  computed: {
    searchQueriesFilter() {
      return this.searchKey.toLowerCase().split(' ');
    },
  },
  methods: {
    highlightText(dt, keys) {
      const tempDt = dt.toLowerCase();
      let res = '';
      let pos = -1;
      let lastIdx = 0;
      const keys2 = keys.filter((element, index, array) => (index === array.lastIndexOf(element)));
      do {
        let prevPos;
        let key = '';
        for (let i = 0; i < keys2.length; i += 1) {
          if (keys[i]) {
            const tempPos = tempDt.indexOf(keys[i], pos);
            if (tempPos > -1) {
              if ((typeof prevPos === 'undefined'
                || tempPos < prevPos
                || tempPos === prevPos)
                && keys[i].length >= key.length) {
                prevPos = tempPos;
                key = keys[i];
              }
            }
          }
        }
        pos = prevPos;
        if (pos > -1) {
          res += dt.substr(lastIdx, pos - lastIdx);
          res += `<b>${dt.substr(pos, key.length)}</b>`;
          pos += key.length;

          lastIdx = pos;
        }
      } while (pos > -1);
      res += dt.substr(lastIdx, dt.length - lastIdx);
      return res;
    },
  }
};
</script>