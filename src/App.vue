<template>
    <div class="flex justify-center items-center w-screen h-screen">
        <div class="flex flex-col">
            <div class="" v-for="single in list">
                <label>
                    {{ single.name }}
                    <input type="checkbox" v-model="single.active">
                </label>

            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';


const list = ref([
    { name: 'Progetto numero 1', active: false },
    { name: 'Progetto numero 2', active: false },
    { name: 'Progetto numero 3', active: true },
    { name: 'Progetto numero 4', active: false },
])




const toggle = ref(false)
</script>