<template>
  <header class="header" id= "header">
    <nav class="nav container">
      <router-link to="/" class="nav_logo">
        <img src="../assets/flitter-icon-whiteBgr.png" />
      </router-link>
      
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item" v-if="user">
            <button
              class="nav__link"
              @click="logout()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
              >
                <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
                <path
                  d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"
                ></path>
              </svg>
              <span class="nav__name">Logout</span>
            </button>
          </li>
          <li class="nav__item" v-if="!user">
            <router-link to="/login" class="nav__link">
              <span>Sign in </span>
            </router-link>
          </li>
          <li
            @click="() => popupClose('buttonOpen')"
            class="nav__item"
            v-if="user"
          >
            <GoModal v-if="popupOpen.buttonOpen" />
            <div class="nav__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
              >
                <path d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2z"></path>
                <path
                  d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3v2z"
                ></path>
              </svg>
              <span class="nav__name">Add</span>
            </div>
          </li>
          <li class="nav__item" v-if="user">
            <router-link :to="{ name: 'selectedUserView', params: { id: user._id }}" class="nav__link">
                <svg class= "nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4l3 3 3-3h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-7 3c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zM7.177 16c.558-1.723 2.496-3 4.823-3s4.266 1.277 4.823 3H7.177z"></path></svg>
                <span class="nav__name">Profile</span>
            </router-link>
          </li>
                    
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import GoModal from "@/components/GoModal";
import { ref, onMounted } from "vue";

import useUsers from '@/composables/useUsers';



export default {
  name: 'FooterNav',
  components: {
    GoModal
  },
  setup() {

    const { selfUser, logout, getSelf } = useUsers()

    const popupOpen = ref({
      buttonOpen: false,
    });

    onMounted(async () => {
      const token = localStorage.getItem("token")
      const userId = localStorage.getItem("selfUserId")

      if (token && userId) {
        await getSelf(userId)
      }
    })

    const popupClose = (popup) => {
      popupOpen.value[popup]= !popupOpen.value[popup]
    }

  return {
    user: selfUser,
    logout,
    GoModal,
    popupOpen,
    popupClose}
  }
}


</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
:root {
--header-height: 3rem;
--hue: 174;
--sat: 63%;
--first-color: hsl(var(--hue), var(--sat), 40%);
--first-color-alt: hsl(var(--hue), var(--sat), 36%);
--title-color: hsl(var(--hue), 12%, 15%);
--text-color: hsl(var(--hue), 8%, 35%);
--body-color: hsl(var(--hue), 100%, 99%);
--container-color: #fff;
/*========== Font and typography ==========*/
--body-font: "Open Sans", sans-serif;
--h1-font-size: 1.5rem;
--normal-font-size: 0.938rem;
--tiny-font-size: 0.625rem;
/*========== z index ==========*/
--z-tooltip: 10;
--z-fixed: 100;
}
* {
box-sizing: border-box;
padding: 0;
margin: 0;
}
html {
scroll-behavior: smooth;
}
body {
margin: var(--header-height) 0 0 0;
font-family: var(--body-font);
font-size: var(--normal-font-size);
background-color: var(--body-color);
color: var(--text-color);
}
ul {
list-style: none;
}
a {
text-decoration: none;
}
header img {
max-width: 20%;
height: auto;
}
/*=============== REUSABLE CSS CLASSES ===============*/
.section {
padding: 4.5rem 0 2rem;
}
.section__title {
font-size: var(--h1-font-size);
color: var(--title-color);
text-align: center;
margin-bottom: 1.5rem;
}
.section__height {
height: 100vh;
}
.container {
max-width: 968px;
margin-left: 1rem;
margin-right: 1rem;
}
/*=============== HEADER ===============*/
.header {
position: fixed;
top: 0;
left: 0;
width: 100%;
padding: 20px;
background-color: black;
}
#nav__logo > img {
width: 50px;
position: absolute;
align-self: flex-start;
}
img {
border-radius: 50%;
}
.nav {
height: var(--header-height);
display: flex;
justify-content: space-between;
align-items: center;
}
.nav__img {
width: 32px;
border-radius: 50%;
}
.nav__logo {
color: var(--title-color);
font-weight: 600;
}
@media screen and (max-width: 767px) {
.nav__menu {
position: fixed;
bottom: 0;
left: 0;
background-color: var(--container-color);
box-shadow: 0 -1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
width: 100%;
height: 4rem;
padding: 0 1rem;
display: grid;
align-content: center;
border-radius: 1.25rem 1.25rem 0 0;
transition: 0.4s;
}
}
.nav__list,
.nav__link {
display: flex;
}
.nav__link {
flex-direction: column;
align-items: center;
row-gap: 4px;
color: var(--title-color);
font-weight: 600;
background: none;
border: none;
}
.nav__list {
justify-content: space-around;
}
.nav__name {
font-size: var(--tiny-font-size);
display: none;
}
.nav__icon {
font-size: 1.5rem;
}
/* For medium devices */
@media screen and (min-width: 576px) {
.nav__list {
justify-content: center;
column-gap: 3rem;
}
.nav__link:hover {
color: var(--first-color);
}
}
@media screen and (min-width: 767px) {
body {
margin: 0;
}
.section {
padding: 7rem 0 2rem;
}
.nav {
height: calc(var(--header-height) + 1.5rem); /* 4.5rem */
}
.nav__img {
display: none;
}
.nav__icon {
display: none;
}
.nav__name {
font-size: var(--normal-font-size);
/* display: block; */ /* Minimalist design, visible labels */
}
.nav__link:hover {
color: var(--first-color);
}
}
</style>