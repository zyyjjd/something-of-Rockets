<!--
 * @Date: 2023-03-20 11:27:50
 * @LastEditTime: 2023-04-04 09:11:47
 * @FilePath: /Rockets/src/pages/Login.vue
 * @Description: 
 * 
-->
<!-- bg-cover bg-center bg-no-repeat -->

<template>
    <div class="flex justify-center items-center h-screen bg-login-bg bg-no-repeat bg-cover bg-center">
        <form class="bg-white p-6 rounded-lg shadow-md backdrop-blur bg-opacity-20">
            <h2 class="text-2xl font-bold mb-6 text-center">JUSTDOIT</h2>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                    用户名
                </label>
                <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="请输入你的用户名" />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 font-bold mb-2" for="password">
                    密码
                </label>
                <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="请输入你的密码" />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button" @click="toHome">
                    登录
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    忘记密码？
                </a>
            </div>
        </form>
    </div>
</template>
  
<script  setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
//跳转到home页面
const toHome = () => {
    router.push("/home");

};
</script>
  
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>