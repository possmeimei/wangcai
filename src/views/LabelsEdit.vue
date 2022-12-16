<template>
  <Layout>
    <div>
      <Icon name="arrow-left" />
     <span>编辑标签</span>
    </div>
    <Notes field-name="标签名" placeholder="请输入标签名"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import TagListModel from '@/models/tagListModel';
import Notes from '@/components/Money/Notes.vue';
@Component({
  components: {Notes}
})
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