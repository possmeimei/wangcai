<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
    <li v-for="item in dataSource" :key="item.value"
        :class="liClass(item)" class="tabs-item"
        @click="selected(item)">{{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type dataSourceItem = { text: string, value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: dataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  liClass(item: dataSourceItem) {
    return {
      [this.classPrefix + '-tabs-item']: this.classPrefix,
      selected: item.value === this.value
    };
  }

  selected(item: dataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.tabs {
  display: flex;
  background: #c4c4c4;
  text-align: center;
  font-size: 24px;

  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected {
      background: $color-highlight;
      color: white;
    }

    //&.selected::after {
    //  content: '';
    //  position: absolute;
    //  bottom: 0;
    //  left: 0;
    //  width: 100%;
    //  height: 4px;
    //  background: white;
    //}
  }
}
</style>