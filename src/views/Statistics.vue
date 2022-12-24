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
          <li v-for="(group,index) in result" :key="index">
            <h3>{{group.title}}</h3>
            <ol>
              <li v-for="item in group.items" :key="item.id">
                {{item.amount}}{{item.createdAt}}
              </li>
            </ol>
          </li>
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
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    type hashTableValue = {title:string,items:RecordItem[]}
    const hashTable: { [key: string]: hashTableValue} = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split('T');
      hashTable[date] = hashTable[date] || {title:date,items:[]};
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreate() {
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