<template>
  <div>
      <ul>
          <li>待办2{{t}}</li>
          <input type="checkbox" />
      </ul>

  </div>
</template>
<script>
    export default {
        name:'List',
        data(){
            return {
                msg:"我是列表页",
                t:this.$store.state.count,
            }
        }
    }
</script>
