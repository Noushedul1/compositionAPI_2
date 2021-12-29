<template>
  <input type="text" v-model="firstname">
  <input type="text" v-model="secondname">
  <p>{{fullname}}</p>
  <div v-for="book in books" :key="book.id">
    <h1>{{book.id}}</h1>
    <h2>{{book.title}}</h2>
    <h3>{{book.author}}</h3>
  </div>
  <div v-for="all in alldata" :key="all.id" class="fetch">
    <h4>{{all.title}}</h4>
    <p>{{all.body}}</p>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
export default {
  setup() {
    const firstname = ref('akib');
    const secondname = ref('islam');
    const alldata = ref([]);
    const books = ref([
      {id:1 , title: 'web design', author: 'noushed'},
      {id:2 , title: 'graphic design', author: 'akib'},
      {id:3 , title: 'web development', author: 'islam'}
    ]);
    console.log(books);
    const fullname = computed(()=>{
      return `${firstname.value} ${secondname.value}`;
    });
    // onMounted(()=>{
    //   fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(res=>res.json())
    //   .then(data=>{
    //     // console.log(data);
    //     alldata.value = data.slice(0,10);
    //   })
    // })
    (function fetchApi(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(data=>{
        alldata.value = data.slice(0,10);
      })
    })()
    return {
      firstname,
      secondname,
      fullname,
      books,
      alldata
    }
  }
}
</script>

<style>
.fetch{
  color: green;
  border: 1px solid black;
  background: #ddd;
  padding: 10px;
  margin: 10px;
}
</style>