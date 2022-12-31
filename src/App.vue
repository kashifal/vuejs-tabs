<template>

 <div class="">
   <h1 class="text-center font-bold text-3xl py-8 ">Vue 3 Tabs</h1>
   <div class="max-w-6xl mx-auto h-auto bg-white shadow-sm ring-1 ring-gray-300 rounded py-2">
     <div class="max-w-5xl mx-auto h-auto bg-blue-200 py-4 px-2 flex gap-x-2 rounded"  >
       <div v-for="(item, index) in languages" :key="item.name" @click="getTab(index, item)" :class="tab === index ? 'bg-blue-700' : ''" class="bg-blue-400 border border-blue-500 hover:bg-blue-700 hover:border-blue-700 transition-all px-4 py-2 w-24 cursor-pointer flex items-center justify-center text-white rounded" >
         <tab-button :name="item.name"  ></tab-button>

       </div>

     </div>
     <div class="max-w-5xl mx-auto mt-8"><tab-data :tabData="tabData"></tab-data></div>

   </div>
 </div>
</template>

<script>
import TabButton from "./components/TabButton.vue";
import TabData from "./components/TabData.vue";
import {ref, onMounted} from "vue";
const languages = ref([]);
const tab = ref(0);
const tabData = ref('');
export default {
  components:{
    TabButton,
    TabData
  },
  setup() {
  const tabButtons = [];


  onMounted(() => {
    fetch('http://localhost:3000/languages')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          languages.value = data;
          tabData.value = data[0].history;
        })
  })

    function getTab(index,item){
    tab.value = index;
    tabData.value =  item.history;
    }

    return {
      languages,
      getTab,
      tab,
      tabData
    }
  }
}
</script>

<style lang="scss" scoped>

</style>