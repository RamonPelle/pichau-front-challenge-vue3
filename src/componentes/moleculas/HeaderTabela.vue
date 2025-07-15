<template>
  <thead>
    <tr>
      <HeaderOrdenavel
        label="Produto"
        chave="nome"
        :chaveAtual="chaveAtual"
        :direcao="direcao"
        @sort="handleSort"
      />
      <HeaderOrdenavel
        v-for="coluna in colunasPreco"
        :key="coluna.chave"
        :label="coluna.label"
        :chave="coluna.chave"
        :chaveAtual="chaveAtual"
        :direcao="direcao"
        @sort="handleSort"
      />
    </tr>
  </thead>
</template>

<script setup>
import HeaderOrdenavel from "../atomos/HeaderOrdenavel.vue";

const props = defineProps({
  chaveAtual: { type: String, required: true },
  direcao: { type: String, default: "asc" },
  colunasPreco: { type: Array, required: true },
});

const emit = defineEmits(["sort"]);
const handleSort = (chave) => {
  emit("sort", chave);
};
</script>
