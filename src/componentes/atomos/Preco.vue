<template>
  <td
    class="preco-td"
    :class="{
      'preco-mais-barato': maisBarato,
      'preco-mais-caro': maisCaro,
      'preco-nossa-loja': nossoPreco,
      'preco-default': !maisBarato && !maisCaro && !nossoPreco,
    }"
  >
    <span>{{ precoFormatado }}</span>
  </td>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  preco: {
    type: [Number, String, null],
    default: null,
  },
  maisBarato: {
    type: Boolean,
    default: false,
  },
  maisCaro: {
    type: Boolean,
    default: false,
  },
  nossoPreco: {
    type: Boolean,
    default: false,
  },
});

const precoFormatado = computed(() => {
  if (props.preco == null) {
    return "N/A";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.preco);
});
</script>
