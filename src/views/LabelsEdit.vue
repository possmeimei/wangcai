<template>
  <Layout>
    <span>编辑标签</span>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import TagListModel from '@/models/tagListModel';

@Component
export default class LabelsEdit extends Vue {
  created() {
    const id = this.$route.params.id;
    TagListModel.fetch();
    const tags = TagListModel.data
    const tag = tags.filter(tag => tag.id === id)[0]
    if (tag){
      console.log(tag);
    }else {
      this.$router.replace('/404')
    }
  }
}
</script>

<style scoped lang="scss">

</style>