<template>
    <H1>欢迎来到登录界面</H1>
    <welcome msg="jack"/>
    <el-button @click="goHome">回首页</el-button>
</template>

<!-- <script setup>  // 方式一
import { defineProps,reactive } from 'vue';
import {useRouter} from 'vue-router';

defineProps({
    msg: String
})

const state = reactive({count: 0})
const router = useRouter()
const goHome = ()=>(
    router.push('/welcome')
)

</script> -->

<script> // 方式二
import welcome from './welcome.vue';
export default{
    name: 'login',
    components:{welcome},
    methods:{
        goHome(){
            this.$router.push('/welcome')
        }
    }
}
</script>

<style>
a{
    color: #42b983;
}
</style>