<template>
  <tr>
    <td class="nome-produto">{{ produto.nome }}</td>
    <Preco
      v-for="coluna in colunasPreco"
      :key="coluna.chave"
      :preco="obterPrecoColuna(coluna)"
      :maisBarato="obterPrecoColuna(coluna) === minPreco"
      :maisCaro="obterPrecoColuna(coluna) === maxPreco"
      :nossoPreco="coluna.ehNossaLoja"
    />
  </tr>
</template>

<script setup>
import { computed } from "vue";
import Preco from "../atomos/Preco.vue";

const props = defineProps({
  produto: { type: Object, required: true },
  colunasPreco: { type: Array, required: true },
});

const obterPrecoColuna = (coluna) => {
  const valor = coluna.obterValor(props.produto);
  return valor === "N/A" ? null : Number(valor);
};

const precosValidos = computed(() => {
  return props.colunasPreco
    .map((coluna) => obterPrecoColuna(coluna))
    .filter((preco) => preco !== null);
});

const minPreco = computed(() => {
  return precosValidos.value.length === 0
    ? null
    : Math.min(...precosValidos.value);
});

const maxPreco = computed(() => {
  return precosValidos.value.length === 0
    ? null
    : Math.max(...precosValidos.value);
});
</script>
