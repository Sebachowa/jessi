<template>
    <div class="title">
      <h1>Flits</h1>
    </div>
    <div class="flitList-main-wraper">
      <div v-if="isLoading">Cargando...</div>
      <div class="flits-list" v-else>
        <FlitCard v-for="flit in flits" :key="flit._id" :flit="flit" @goUserProfile="goUserProfile(flit)"/>
      </div>
    </div>
  </template>
  
    
<script>
  import { defineComponent } from 'vue';
  import useFlits from '@/composables/useFlits';
  import FlitCard from '@/components/FlitCard.vue';
  import router from '@/router';
  
  export default defineComponent({
    name: 'flitsView',
    components: {
      FlitCard
    },

    setup() {
        
      const {flits, isLoading, fetchFlits, fetchFollowedPeopleFlits} = useFlits()

      const token = localStorage.getItem("token")

      if(token) {
        fetchFollowedPeopleFlits(token)
      }
      else {
        fetchFlits()
      }

      fetchFlits()

      function goUserProfile(flit) {
        const id = flit.id_user._id
        router.push({name: "selectedUserView", params: {id} })
      }
      
    return {
      isLoading,
      flits,
      goUserProfile,
    };
  },
});
</script>

<style scoped>

h1 {
  margin-top: 70px;
  margin-bottom: 20px;
}
.product-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
  margin-left: 10px;
}

.flitList-main-wraper {
  display: flex;
  justify-content: center;
}

</style>
