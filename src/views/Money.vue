<template>
  <div>
    <layout class-prefix="money">
      <number-pad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <Notes @update:value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

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
const tagList = tagListModel.fetch();

@Component(
    {
      components: {Types, Notes, Tags, NumberPad},
    })
export default class Money extends Vue {
  tags = tagList;
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
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChanged(): void {
    recordListModel.save(this.recordList);
  }
}
</script>
<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
