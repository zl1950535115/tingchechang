<template>
  <div class="top">
    <p class="title_name">{{title}}</p>
  </div>
</template>

<script>
export default {
  props:{
      title:{
        type:String,
        default:null
      }
  }
}
</script>

<style>
   .title_name{
    margin-left:20px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size:20px;
    padding-top:24px;
  }
  .top{
    box-sizing:border-box;
  }
</style>
