<template>
    <H1>欢迎来到主界面-{{msg}}</H1>
    <!-- <el-button>去登录</el-button> -->
    <router-link to="/login">去登录</router-link> 
     
</template>

<!-- <script setup>  // 方式一
import { defineProps,reactive } from 'vue';
// import {useRouter} from 'vue-router';

defineProps({
    msg: String
})

const state = reactive({count: 0})


</script> -->

<script>
export default{
    name: 'Welcome',
    props:['msg'],
    setup(){
        
    }
}

</script>

<style scoped>
a{
    color: #42b983;
}
</style>