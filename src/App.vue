<template>
  <v-app>
    <v-app-bar :elevation="4" color="pichau" app>
      <v-app-bar-title class="d-flex text-h7 font-weight-bold text-white">
        <v-icon icon="mdi-calculator-variant" class="me-2"></v-icon>
        Gestão de Orçamentos | Desafio Pichau by Ramon Pelle
      </v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer></v-footer>
  </v-app>
</template>

<script setup></script>
