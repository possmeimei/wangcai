<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="arrow-left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <EditItem :value="tag.name"
                @update:value="updateTag"
                field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="removeTag">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import EditItem from '@/components/Money/EditItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, EditItem},
})
export default class LabelsEdit extends Vue {
  get tag(){
    return this.$store.state.currentTag;
  }
  created() {
    const id = this.$route.params.id
    this.$store.commit('fetchTags')
    this.$store.commit('setCurrentTag',id)
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }

  updateTag(name: string) {
    if (this.tag) {
      this.$store.commit('updateTag',{id:this.tag.id, name:name});
    }
  }

  removeTag() {
    if (this.tag) {
      this.$store.commit('removeTag',this.tag.id)
    }
  }

  goBack() {
    this.$router.back();
  }
}
</script>

<style scoped lang="scss">
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .leftIcon {
    width: 1em;
    height: 1em;
  }

  > .title {

  }

  > .rightIcon {
    width: 1em;
    height: 1em;
  }
}

.form-wrapper {
  background: white;
  margin-top: 6px;
  height: 44px;
  display: flex;
  justify-content: left;
  align-items: center;
}

.button-wrapper {
  text-align: center;
}
</style>