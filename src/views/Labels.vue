<template>
  <div>
    <layout>
      <ul class="tags">
        <li v-for="tag in tags" :key="tag.id">
          <span>{{ tag.name }}</span>
          <Icon name="arrow-right"/>
        </li>
      </ul>
      <div class="newTag-wrapper">
        <button class="newTag" @click="createTag">新增标签</button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import TagListModel from '@/models/tagListModel';

tagListModel.fetch();
@Component
export default class Labels extends Vue {
  tags = TagListModel.data;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      // try {
      //   tagListModel.create(name);
      // } catch (error) {
      //   console.log(error.message);
      //   if (error.message === 'duplicated') {
      //     window.alert('标签名重复了');
      //   }
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
        window.alert('标签名重复');
      }else if (message === 'success'){
        window.alert('添加成功');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  background: white;
  font-size: 16px;

  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e6e6e6;
    padding-left: 16px;

    svg {
      width: 24px;
      height: 24px;
      color: #666;
      margin-right: 20px;
    }
  }
}

.newTag {
  background: $color-highlight;
  color: white;
  border-radius: 4px;
  margin-top: 50px;
  padding: 10px 16px;

  &-wrapper {
    text-align: center;
  }
}
</style>