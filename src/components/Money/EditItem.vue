<template>
  <div>
    <label class="EditItem">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text"
             :value="value"
             @input="onValueChanged($event.target.value)"
             :placeholder="this.placeholder"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class EditItem extends Vue {
  @Prop({default:''}) readonly value!:string;
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch('value')
  onValueChanged(value: string): void {
    this.$emit('update:value', value);
  }
}
</script>

<style scoped lang="scss">
.EditItem {
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