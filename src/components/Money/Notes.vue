<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text"
             v-model = "value"
             placeholder="写点备注吧！"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class Notes extends Vue{
  value = '';
}
</script>

<style scoped lang="scss">
.notes {
  background: #f5f5f5;
  //display: block;
  font-size: 14px;
  padding: 16px;
  display: flex;
  align-items: center;

  > .name {
    padding: 10px;
  }

  > input {
    margin-left: 10px;
    flex-grow: 1;
    color: #999999;
  }
}
</style>