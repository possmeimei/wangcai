<template>
  <div>
    <layout>
      <div class="tags">
        <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
          <span>{{ tag.name }}</span>
          <Icon name="arrow-right"/>
        </router-link>
      </div>
      <div class="newTag-wrapper">
        <Button class="newTag" @click="createTag">新增标签</Button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import store from '@/store/index2';

@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = store.tagList;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
     store.createTag(name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  background: white;
  font-size: 16px;

  > .tag {
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