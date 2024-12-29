<script setup lang="ts">
import {ref} from 'vue'
import HomeView from './views/HomeView.vue';
import Planner from './views/Planner.vue';

</script>

<template>
  <HomeView />
  <header>
    <nav class="navbar navbar-expand-lg  fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="./assets/Logo2.svg" class="logo" height="80px" alt="Planilha investimento">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <a href='/login'>
            <button type="button" class="login" style="margin-right: 10px;">
              <span>
                Log In
              </span>
            </button></a>
          <a href='/cadastro'>
            <button type="button" class="login">
              <span>
                Sign Up
              </span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>


<style scoped>

.navbar {
  background-color: #030914;
}

.logo {
  position: relative;
  top: 6px;
  left: 38px;
}


.login {
 display: inline-block;
 border-radius: 8px;
 letter-spacing: 2.5px;
 background-color: #03DAC5;
 border: none;
 color: #000000;
 text-align: center;
 font-size: 19px;
 width: 130px;
 height: 40px;
 transition: all 0.5s;
 cursor: pointer;
 margin: 5px;
 margin-top: 11px;
 margin-right: 80px;
}


.login span {
 cursor: pointer;
 display: inline-block;
 position: relative;
 transition: 0.5s;
}

.login span:after {
 content: '»';
 position: absolute;
 opacity: 0;
 top: 0;
 right: -15px;
 transition: 0.9s;
}

.login:hover span {
 padding-right: 15px;
 letter-spacing: 2.8px;
}

.login:hover span:after {
 opacity: 1;
 right: 0;
}

</style>
