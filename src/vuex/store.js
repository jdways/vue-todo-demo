import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({ //构造对象
        state:{ //存储状态
            //count:3
            todoList:[
            ],
            todoInfo:{
                id:0,
                isDone:true,
                title:"",

            },
            //储存一个全局变量 
            selected:0

        },
        mutations:{ //提交
            add(state,todoText){ //载荷
                if(todoText){
                    let todoInfo = {};
                    todoInfo.isDone = false;
                    if(state.todoList.length == 0){
                      todoInfo.id = 0;
                    }else if(state.todoList.length > 0){
                      let todoFirst = state.todoList[state.todoList.length - 1];
                      console.log(todoFirst.title + ' , ' + todoFirst.id);
                      todoInfo.id = todoFirst.id + 1;
                    }
                    todoInfo.title = todoText;
                    state.todoList.push(todoInfo);
                  }
            },
            modifyisdone(state,d){
                state.todoList.map(item=>{
                    if(item.id==d){
                        return item.isDone=true
                    }
                })
            },
            modifyselected(state,s){
                state.selected=s;
            }
        },

        getters:{ //返回数据过滤数据
            todofilterDone:function(state){
                //处理程序
                let todoList=state.todoList.filter(data=>{
                    if(data.isDone){
                        return data;
                    }
                });
                return todoList;
            },
            todofilterNoneDone:function(state){

                let todoList=state.todoList.filter(data=>{
                    if(!data.isDone){
                        return data;
                    }
                });
                return todoList;
            }

        },
        actions:{ //异步状态控制可控
            increse({commit},temp){
                commit('add',temp)
                console.log(temp)
            },
            modify({commit},id){
                commit('modifyisdone',id)
            },
            selected1({commit},t){
                commit('modifyselected',t)
            },


        }

})