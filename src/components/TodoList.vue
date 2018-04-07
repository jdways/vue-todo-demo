<template>
    <div>
        <div>
            <ul v-for="item in todoList">
                <!-- 根据状态判断是否已完成 -->
               <li @click="modifyState(item.id)"><input type="radio" /><span :class="{'text-span':item.isDone}">{{item.title}}</span></li> 
            </ul>
        </div>

        <div class='bottom_box'>
            <div class='box_space' @click="change(0)">
                <span>全部</span>
                <ul v-for="item in todoList" :class="{'isactive':selected==0,'hide':true}">
                    <li>{{item.title}}</li>   
                </ul>                
            </div>
            <div class="box_space" @click="change(1)">
                <span>已完成</span>
                <ul v-for="item in todoList" :class="{'isactive':selected==1,'hide':true}">
                    <li>{{item.title}}</li>   
                </ul>
            </div>
            <div class="box_space" @click="change(2)" >
                <span>未完成</span>,
                <ul v-for="item in todoList" :class="{'isactive':selected==2,'hide':true}">
                    <li>{{item.title}}</li>   
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'todoList',
  data(){
      return {
          msg:"待办已办",
        
        }
  },
  computed:{
      todoList:function(){ //从这个当中获取值
            let selected = this.$store.state.selected;
              console.log(selected)
            if(selected == 0){
                return this.$store.state.todoList;
            }else if(selected == 1){
                return this.$store.getters.todofilterDone;  //根据不同类型的选择，返回不同todolist
            }else if(selected == 2){
                return this.$store.getters.todofilterNoneDone;
            }
         // return this.$store.state.todoList;
      },
      selected:function(){
          return this.$store.state.selected;
      }
  },
  methods:{
      modifyState:function(id){
          //修改单个 数据的状态
            //this.$store.state.
            this.$store.dispatch("modify",id)
      },
      change:function(type){
          this.$store.dispatch('selected1',type)
      }


  }
}
</script>


<style>
    ul li{
        list-style-type: none
    }
    .bottom_box{
        display: flex;
        justify-content: center;
        align-items: center
    }

    .box_space{
        margin: 5px
    }

    .text-span{
        text-decoration: line-through
    }

    .hide{
        display: none
    }

    .isactive{
        display: inline
    }
</style>

