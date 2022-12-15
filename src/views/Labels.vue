<template>
  <div>
    <layout>
      <ul class="tags">
        <li>
          <span>衣</span>
          <Icon name="arrow-right" />
        </li>
        <li>
          <span>食</span>
          <Icon name="arrow-right" />
        </li>
        <li>
          <span>住</span>
          <Icon name="arrow-right" />
        </li>
        <li>
          <span>行</span>
          <Icon name="arrow-right" />
        </li>
      </ul>
      <div class="newTag-wrapper">
        <button class="newTag">新增标签</button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Labels',
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  .tags{
    background: white;
    font-size: 16px;
    > li{
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #e6e6e6;
      padding-left: 16px;
      svg{
        width: 24px;
        height: 24px;
        color: #666;
        margin-right: 20px;
      }
    }
  }
  .newTag{
    background: $color-highlight;
    color: white;
    border-radius: 4px;
    margin-top: 50px;
    padding: 10px 16px;
    &-wrapper{
      text-align: center;
    }
  }
</style>