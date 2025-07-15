<template>
  <th @click="handleSort" :style="estiloTh">
    {{ label }}
    <span> {{ icone }}</span>
  </th>
</template>

<script setup>
import { computed } from "vue";
import { useTheme } from "vuetify";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  chave: {
    type: String,
    required: true,
  },
  direcao: {
    type: String,
    default: "asc",
  },
  chaveAtual: {
    type: String,
    required: true,
  },
});

const theme = useTheme();
const emit = defineEmits(["sort"]);

const currentTheme = theme.global.current.value;

const handleSort = () => {
  emit("sort", props.chave);
};

const icone = computed(() => {
  if (props.chave !== props.chaveAtual) {
    return "";
  }
  return props.direcao == "asc" ? "▼" : "▲";
});

const estiloTh = computed(() => {
  return {
    cursor: "pointer",
    backgroundColor:
      props.chave === props.chaveAtual
        ? currentTheme.colors.info
        : "transparent",
    color: props.chave === props.chaveAtual ? "#fff" : currentTheme.colors.grey,

    padding: "12px 16px",
    transition: "all 0.2s ease",
  };
});
</script>
