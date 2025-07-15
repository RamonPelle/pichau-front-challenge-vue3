<template>
  <v-container fluid>
    <v-row justify="center" class="mb-4">
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 font-weight-bold">Comparador de Preços</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" class="d-flex justify-center">
        <TabelaComparacaoPrecos :produtos="items" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default { name: "HomeView" };
</script>

<script setup>
import { mockProdutos } from "../mocks/produtos.js";
import TabelaComparacaoPrecos from "../componentes/organismos/TabelaComparacaoPrecos.vue";

const items = mockProdutos;
</script>
