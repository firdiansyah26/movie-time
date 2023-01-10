<template>
  <div>
    <button id="dropdownPopular" data-dropdown-toggle="dropdown" @click="isOpenDDL = !isOpenDDL"
      class="text-white w-full bg-base hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
      type="button">
      <div class="flex flex-row justify-between w-full items-center">
        <span>{{ label }}</span>
        <img alt="polygon" src="@/assets/icons/ic-polygon.svg" />
      </div>
    </button>
    <!-- Dropdown menu -->
    <div id="dropdown" class="z-10 absolute bg-primary text-white rounded shadow w-60"
      :class="{ 'visible': isOpenDDL, 'hidden': !isOpenDDL }">
      <ul v-for="(data, idx) in list" :key="idx" class="py-1 text-sm text-white"
        aria-labelledby="dropdownPopular">
        <li class="p-1 px-2 cursor-pointer hover:bg-gray-500" @click="onClickDropdown(data)">{{ data.label }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompDDL',
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      isOpenDDL: false,
      label: 'Select'
    }
  },
  methods: {
    onClickDropdown(value) {
      this.label = value.label;
      this.isOpenDDL = !this.isOpenDDL;

      this.$emit('on-select', value)
    }
  }
}
</script>