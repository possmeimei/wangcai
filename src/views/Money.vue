<template>
  <div>
    <layout class-prefix="money">
      <number-pad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <EditItem field-name="备注" placeholder="写点备注吧" @update:value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import EditItem from '@/components/Money/EditItem.vue';
import Types from '@/components/Money/Types.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';

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
const recordList = recordListModel.fetch();

@Component(
    {
      components: {EditItem, Types, Tags, NumberPad},
    })
export default class Money extends Vue {
  tags = window.tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  onUpdateTags(value: string[]): void {
    this.record.tags = value;
  }

  onUpdateNotes(value: string): void {
    this.record.notes = value;
  }

  onUpdateAmount(value: string): void {
    this.record.amount = parseFloat(value);
  }

  saveRecord(): void {
    recordListModel.created(this.record)
  }

  @Watch('recordList')
  onRecordListChanged(): void {
    recordListModel.save();
  }
}
</script>
<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
