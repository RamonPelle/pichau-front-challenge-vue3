<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Comparador de preço</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col> <v-data-table :items="items"></v-data-table> </v-col
    ></v-row>
  </v-container>
</template>

<script>
export default { name: "HomeView" };
</script>

<script setup>
import { mockProdutos } from "../mocks/produtos.js";

const items = mockProdutos;
</script>
