<template>
  <th
    @click="handleSort"
    class="header-ordenavel"
    :class="{
      ativo: props.chave === props.chaveAtual,
      inativo: props.chave !== props.chaveAtual,
    }"
  >
    {{ label }}
    <span> {{ icone }}</span>
  </th>
</template>

<script setup>
import { computed } from "vue";

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

const emit = defineEmits(["sort"]);

const handleSort = () => {
  emit("sort", props.chave);
};

const icone = computed(() => {
  if (props.chave !== props.chaveAtual) {
    return "";
  }
  return props.direcao == "asc" ? "▼" : "▲";
});
</script>
