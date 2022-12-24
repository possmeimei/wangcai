<template>
  <div>
    <layout class-prefix="money">
      <number-pad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Tabs :data-source="typeList" :value.sync="record.type"/>
      <EditItem field-name="备注" placeholder="写点备注吧" @update:value="onUpdateNotes"/>
      <Tags/>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import EditItem from '@/components/Money/EditItem.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constants/typeList';

//版本数据迁移
// const version = window.localStorage.getItem('version') || '0';
//   if (version === '0.0.1') {
//     recordList.forEach(record => {
//       record.createdAt = new Date(2020,1,1);
//     });
//     window.localStorage.setItem('recordList', JSON.stringify(recordList));
//   }
//
// window.localStorage.setItem('version', '0.0.2');

@Component(
    {
      components: {Tabs, EditItem, Tags, NumberPad},
    })
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  typeList = typeList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNotes(value: string): void {
    this.record.notes = value;
  }

  onUpdateAmount(value: string): void {
    this.record.amount = parseFloat(value);
  }

  saveRecord(): void {
    this.$store.commit('createRecord', this.record);
  }
}
</script>
<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
