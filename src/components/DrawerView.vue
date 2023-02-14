<template>
  <div class="drawerView-container">
    <div class="drawerView-header">
      <h3>Menú</h3>
      <i class="fa fa-close" @click="isDrawerViewVisible = false"></i>
    </div>
    <nav class="drawerView-content">
      <router-link to="/">Inicio</router-link>
      <router-link to="/acerca">Acerca de</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "DrawerView",
  data() {
    return {
      isDrawerVisible: false,
    };
  },
};
</script>

<style>
.drawerView-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  transform: translateX(-300px);
  transition: transform 0.3s ease-in-out;
}
.drawerView-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.drawerView-header h3 {
  font-weight: bold;
}
.drawerView-content {
  padding: 20px;
}
.drawerView-container.open {
  transform: translateX(0);
}
</style>
