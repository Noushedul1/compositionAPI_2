<template>
  <p>
    {{firstname}}
  </p>
  <p class="animate__animated animate__bounce">{{lastname}}</p>
  <p>{{city}}</p>
  <p>{{phone}}</p>
  <p>{{po}}</p>
  <ul>
    <li v-for="post in posts" :key="post.id" class="animate__animated animate__bounce">
      {{post.title}}
    </li>
  </ul>
</template>
<script>
import { onMounted } from '@vue/runtime-core';
import {stateData,countryD} from './assets/stateData'
export default {
setup(){
  let {firstname,lastname} = stateData();
  let {city,phone,po,posts} = countryD();
  onMounted(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{
      posts.value = data;
    })
  });
  return{
    firstname,
    lastname,
    city,
    phone,
    po,
    posts
  }
}
}
</script>

<style>

</style>