<template>
  <div class="file" :style="`width:${width}px;`">
    <div class="file__img" :style="`cursor: ${data.type === 'folder' ?'pointer' : 'unset'};`">
      <img
        :src="data.img || (data.type === 'file' ? fileImg : folderImg)"
        :width="width"
        :height="width"/>
    </div>
    <div class="file__info">
      <div>{{data.fileName || '未知'}}</div>
    </div>
    <div class="file__tools">
      <div class="file__tools--bt"
        v-for="(item, index) in data.tools"
        :key="index"
        @click="$eimt('clickTools',item)"
        :title="item.title">
        <i :style="item.icon" class="file__tools--icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import fileImg from '../assets/images/file.jpg'
import folderImg from '../assets/images/folder.jpg'
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    width: {
      type: [Number, String],
      default: 150
    }
  },
  data () {
    return {
      fileImg,
      folderImg
    }
  }
}
</script>

<style lang="scss" scoped>
.file{
  border: 1px solid #eee;
  display: inline-block;
  box-shadow:  0 12px 12px rgba(0, 0, 0, 0.2);
  &__img{
    height: 100%;
  }
  &__info{
    padding: 0 5px;
  }
  &__tools{
    &--bt{
      display: inline-block;
    }
    &--icon{
      width: 25px;
      height: 25px;
    }
  }
}
</style>