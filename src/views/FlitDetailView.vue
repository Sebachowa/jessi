<template>
    <div class="details">
      <div v-if="!isLoading">
        <div class="flit-details">
            <h1 class="flit-user"> {{ selectedFlit.id_user }}</h1>
            <div class="flit-message">
              <p>{{ selectedFlit.message}}</p>
            </div>
          </div>
        </div>
      <div v-else>Cargando...</div>
    </div>
  </template>
    
<script>

    import { defineComponent } from 'vue';
    import useFlits from '@/composables/useFlits';

   
    
    export default defineComponent({
      name: 'flitDetailView',
      components: {
  
      },
      props: {
        id: {
          type: Number,
          required: true,
        },
      },
  
      setup(props) {
          const { selectedFlit, isLoading, fetchSelectedFlit} = useFlits()
  
          fetchSelectedFlit(props.id)
  
  
        return {selectedFlit, isLoading}
      }
    });
  </script>