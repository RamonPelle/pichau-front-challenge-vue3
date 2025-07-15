<template>
  <td :style="estiloTd" class="pa-2 text-center">
    <span>{{ precoFormatado }}</span>
  </td>
</template>

<script setup>
import { computed } from "vue";
import { useTheme } from "vuetify";

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

const theme = useTheme();

const precoFormatado = computed(() => {
  if (props.preco == null) {
    return "N/A";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.preco);
});

const estiloTd = computed(() => {
  const currentTheme = theme.global.current.value;
  if (props.maisBarato) {
    return {
      backgroundColor: currentTheme.colors["cor-mais-barato"],
      color: "#000",
    };
  }
  if (props.maisCaro) {
    return {
      backgroundColor: currentTheme.colors["cor-mais-caro"],
      color: "#000",
    };
  }
  if (props.nossoPreco) {
    return {
      backgroundColor: currentTheme.colors["cor-nossa-loja"],
      color: "#000",
    };
  }

  return {
    backgroundColor: currentTheme.colors.grey,
    color: "#000",
  };
});
</script>
