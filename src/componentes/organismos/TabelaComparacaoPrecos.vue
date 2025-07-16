<template>
  <table class="tabela-comparacao">
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
</script>

<style scoped>
.tabela-comparacao {
  border-radius: 16px;
  overflow: hidden;
}

.tabela-comparacao tbody tr {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tabela-comparacao tbody tr:nth-child(even) {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.03));
}

.tabela-comparacao tbody tr:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}
</style>
