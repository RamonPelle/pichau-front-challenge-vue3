<template>
  <table :style="estiloTabela">
    <HeaderTabela
      :chaveAtual="chaveAtual"
      :direcao="direcao"
      :colunasPreco="colunasPreco"
      @sort="handleSort"
    />
    <tbody>
      <LinhaProduto
        v-for="produto in produtosOrdenados"
        :key="produto.nome"
        :produto="produto"
        :colunasPreco="colunasPreco"
      />
    </tbody>
  </table>
</template>

<script setup>
import { ref, computed } from "vue";
import LinhaProduto from "../moleculas/LinhaProduto.vue";
import HeaderTabela from "../moleculas/HeaderTabela.vue";

const props = defineProps({
  produtos: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const chaveAtual = ref("nome");
const direcao = ref("asc");

const handleSort = (chave) => {
  if (chave === chaveAtual.value) {
    direcao.value = direcao.value === "asc" ? "desc" : "asc";
  } else {
    chaveAtual.value = chave;
    direcao.value = "asc";
  }
};

const colunasPreco = computed(() => {
  if (props.produtos.length === 0) return [];

  return [
    {
      label: "Pichau",
      chave: "preco",
      ehNossaLoja: true,
      obterValor: (produto) => produto.preco,
    },
    ...Object.keys(props.produtos[0].concorrentes).map((nome) => ({
      label: nome,
      chave: `concorrente_${nome}`,
      ehNossaLoja: false,
      obterValor: (produto) => produto.concorrentes[nome],
    })),
  ];
});

const produtosOrdenados = computed(() => {
  const chave = chaveAtual.value;
  const asc = direcao.value === "asc";

  return [...props.produtos].sort((a, b) => {
    const getValor = (produto) => {
      if (chave.startsWith("concorrente_")) {
        const nomeConcorrente = chave.slice("concorrente_".length);
        const valor = produto.concorrentes?.[nomeConcorrente];
        return valor === "N/A" ? Infinity : valor;
      }
      return produto[chave];
    };

    const valorA = getValor(a);
    const valorB = getValor(b);

    if (valorA === valorB) return 0;
    return (valorA < valorB ? -1 : 1) * (asc ? 1 : -1);
  });
});

const estiloTabela = computed(() => {
  return {
    borderCollapse: "collapse",
    boxShadow: `
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05)
    `,
  };
});
</script>
