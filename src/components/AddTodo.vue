<template>
    <div>
        <!-- 必须要有根节点 -->
        <input id='todotitle' placeholder="添加待办事件" />
        <button @click="add">增加</button>
        <router-link to="/list">跳转</router-link>
    </div>
</template>


<script>
export default {
    name:"AddTodo",
    data(){
        return {
           msg: "我是todo"
        }
    },
    methods:{ //添加方法 使用vuex吗
        add:function(){
            //构造一个对象 获取待办的文字
            let text=document.getElementById('todotitle').value;
            // if(text==""){
            //     alert("请输入待办信息")
            // }else{
            //     info=this.$store.state.todoInfo;
            //     //console.log(info)
            //     info.title=text;
            //     info.id=parseInt(Math.random()*1000000);
            //     info.isDone=false
            // }
            //this.$store.dispatch("increse","")
            this.$store.dispatch("increse",text); //传一个info对象
        }

        //添加一个对象 //通知分发
        

    },
}
</script>
