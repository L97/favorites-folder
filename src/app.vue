<template>
  <div class="favorites-folder">
    <div class="favorites-folder__nav">

    </div>
    <div class="favorites-folder__content">
      <file
        v-for="(item, index) in data"
        :key="index"
        :data="item"
        :width="width"
        @clickTools="(data) => $eimt('clickTools', data)">
      </file>
    </div>
  </div>
</template>

<script>
import file from './components/file.vue'
export default {
  components: { file },
  props: {
    data: {
      type: Array,
      default: () => [{}]
    },
    width: {
      type: [Number, String],
      default: 150
    }
  }
}
</script>

<style>

</style>