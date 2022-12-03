<template>
  <div class="tags">
    <div class="new">
      <button>
        新增标签
      </button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Tags"
}
</script>

<style scoped lang="scss">
.tags {
  padding: 16px;
  font-size: 14px;
  background: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    margin-bottom: 16px;
    flex-wrap: wrap;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 6px;
    }
  }

  > .new {
    > button {
      color: #999;
      background: transparent;
      border: none;
      border-bottom: 1px solid;
    }
  }
}
</style>