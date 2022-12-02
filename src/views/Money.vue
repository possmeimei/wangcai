<template>
  <div>
    <layout>
      <div class="tags">
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div class="new">
          <button>
            新增标签
          </button>
        </div>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="写点备注吧！"/>
        </label>
      </div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>.</button>
          <button>+</button>
          <button>_</button>
          <button>x</button>
          <button>完成</button>
        </div>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money",
}
</script>

<style lang="scss" scoped>
.tags {
  padding: 16px;
  font-size: 14px;
  > .current {
    display: flex;
    margin-bottom: 16px;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
    }
  }
  > .new{
    >button{
      color: #999;
      background: transparent;
      border: none;
      border-bottom: 1px solid;
    }
  }
}
.notes{
  background: #f5f5f5;
  display: block;
  font-size: 14px;
  padding: 16px;
  display: flex;
  align-items: center;
  > .name{
    padding: 10px;
  }
  > input{
    margin-left: 10px;
    flex-grow: 1;
    color: #999999;
  }
}
.types{
  display: flex;
  background: #c4c4c4;
  text-align: center;
  font-size: 24px;
  > li{
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333333;
    }
  }
}
</style>