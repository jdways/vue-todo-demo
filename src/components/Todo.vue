<template>
    <div>
        <!-- 必须要有根节点 -->
        <input placeholder="添加待办事件" />
        <button @click="add">增加</button>
        <router-link to="/list">跳转</router-link>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    name:"Todo",
    data(){
        return {
           msg: "我是todo"
        }
    },
    methods:{ //添加方法 使用vuex吗
        add:function(){
            alert('aadd')
        }
    },
}
</script>
