<template>
    <section name="Main Section" class="h-screen bg-red-300 flex flex-col justify-between">
        <section name="Heading" class="w-full h-12 bg-cyan-300">
            <Button></Button>
        </section>
        <section name="Body" class="w-full bg-green-300">
            Categorie:
            <div v-for="category in categories"></div>
        </section>
        <section name="CTA" class="w-full h-12 bg-cyan-300 ">

        </section>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';



// #region Category

const categories = ref([])

onMounted(() => {
    categories.value = getFromLocalStorage('categories');
})


// #endregion


// #region Save and Load

const saveToLocalStorage = (key, data) => {
    const dataString = JSON.stringify(data);
    localStorage.setItem(key, dataString);
};

const getFromLocalStorage = (key) => {
    const dataString = localStorage.getItem(key);
    if (dataString) {
        return JSON.parse(dataString);
    }
    return null;
};


// #endregion

</script>