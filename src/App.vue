<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
    <add-todo></add-todo>
    <todo-list></todo-list>

  </div>
</template>

<script>
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
export default {
  name: 'App',
  components:{AddTodo,TodoList}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
