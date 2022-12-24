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
      <div>
        <ol>
          <li v-for="item in result" :key="item.id">{{ item }}</li>
        </ol>
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
  get recordList() {
    return this.$store.state.recordList;
  }

  get result() {
    const {recordList} = this;
    const hashTable = {};
    for (let i = 0; i < recordList.length; i++) {
      console.log(recordList[i].createdAt);
    }
    return [];
  }

  mounted() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  interval = 'day';
  intervalList = intervalList;
  typeList = typeList;
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

::v-deep {
  .type-tabs-item {
    background: #c4c4c4;

    &.selected {
      background: $color-highlight;
      color: white;
    }
  }

  .interval-tabs-item {
    height: 36px;
    border: 1px solid white;
  }
}
</style>