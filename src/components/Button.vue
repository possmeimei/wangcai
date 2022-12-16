<template>
  <button class="button" @click="$emit('click',$event)"><slot/></button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.button {
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