<template>
  <div class="tags">
    <div class="new">
      <button @click="create">
        新增标签
      </button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag)>= 0} && 'selected'"
          @click="toggle(tag)">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index2';

@Component
export default class Tags extends Vue {
  tagList = store.fetchTags();
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

  create() {
    const name = window.prompt('请输入标签名');
    if (!name) {
      return window.alert('标签名不能为空');
    }
    store.createTag(name);
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.tags {
  padding: 16px;
  font-size: 14px;
  background: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    margin-bottom: 16px;
    flex-wrap: wrap;

    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 6px;

      &.selected {
        background: $color-highlight;
        color: white;
      }
    }
  }

  > .new {
    > button {
      color: #999;
      background: transparent;
      border: none;
      border-bottom: 1px solid;
    }
  }
}
</style>