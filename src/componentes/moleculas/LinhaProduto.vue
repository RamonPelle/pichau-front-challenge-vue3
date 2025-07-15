<template>
  <tr>
    <td :style="estiloNomeProduto">{{ produto.nome }}</td>
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

const precos = computed(() => {
  return props.colunasPreco.map((coluna) => obterPrecoColuna(coluna));
});

const minPreco = computed(() => {
  return precos.value.length === 0 ? null : Math.min(...precos.value);
});

const maxPreco = computed(() => {
  return precos.value.length === 0 ? null : Math.max(...precos.value);
});

const estiloNomeProduto = computed(() => {
  return {
    fontWeight: "bold",
    padding: "12px 16px",
  };
});
</script>
