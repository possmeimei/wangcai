<template>
  <div>
    <layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <div>
        type:{{ type }}
        <br>
        interval:{{ interval }}
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import typeList from '@/constants/typeList';
@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  typeList = typeList;
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

::v-deep .type-tabs-item {
  background: #c4c4c4;

  &.selected {
    background: $color-highlight;
    color: white;
  }
}
</style>