<template>
  <div>
    <div class="mask"></div>
    <div class="modal_main">
      <div class="modal_title">
        <span>{{ title || "提示" }}</span>
        <!-- <span v-if="close" title="关闭" class="close" @click="!loading && handleCancel()">✕</span> -->
      </div>
      <div class="modal_content">
        <!-- <Content v-if="typeof content === 'function'" :render="content" /> -->
        <!-- <slot v-else> <img src="./img/warn.png" class="content_img" alt="warn" v-if="icon == 'warn'" />{{ content }} </slot> -->
        <slot name="content"></slot>
      </div>
      <div class="modal_btns">
        <button class="btn confirm" @click="handleConfirm">
          <!-- <span class="loading" v-if="loading"> ❍ </span> -->
          {{ confirmText }}
        </button>
        <button class="btn cancel" @click="handleCancel()">{{ cancelText }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  confirmText: {
    type: String,
    default: "确定",
  },
  cancelText: {
    type: String,
    default: "取消",
  },
});

const handleConfirm = () => {};

const handleCancel = () => {};
</script>

<style lang="less" scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@primary-color: #007bff; /* 设置主色为蓝色 */

.modal {
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.45);
  }
  .modal_main {
    width: 400px;
    min-height: 180px;
    background: #ffffff;
    border-radius: 10px;
    z-index: 10000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .modal_title {
      width: 100%;
      height: 50px;
      padding: 0 20px;
      box-sizing: border-box;
      font-size: 18px;
      color: #333333;
      line-height: 50px;
      font-weight: 400;
      position: relative;
      .close {
        font-size: 10px;
        color: #93969c;
        position: absolute;
        top: 50%;
        right: 19px;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
    .modal_content {
      width: 100%;
      min-height: 30px;
      padding: 20px;
      box-sizing: border-box;
      font-size: 16px;
      color: #333333;
      line-height: 30px;
      .content_img {
        width: 30px;
        height: 30px;
        display: inline-block;
        margin-right: 9px;
        margin-top: -3px;
      }
    }
    .modal_btns {
      min-height: 60px;
      padding: 10px 20px 20px;
      box-sizing: border-box;
      .loading {
        display: inline-block;
        margin-right: 5px;
        animation: rotate 1s infinite linear;
      }
      .btn {
        min-width: 80px;
        height: 30px;
        padding: 0 9px;
        text-align: center;
        font-size: 14px;
        color: #333333;
        line-height: 28px;
        float: right;
        border: 1px solid #eeeff2;
        background-color: #fff;
        border-radius: 4px;
        margin-left: 20px;
      }
      .confirm {
        border: 1px solid @primary-color;
        background-color: @primary-color;
        color: #fff;
      }
      .cancel:hover {
        border: 1px solid @primary-color;
        color: @primary-color;
      }
    }
  }
}
</style>
