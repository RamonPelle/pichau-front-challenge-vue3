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

<style scoped>
.header-ordenavel {
  cursor: pointer;
  padding: 16px 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: none;
  position: relative;
}

.header-ordenavel::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #8a64beff;
  transition: width 0.3s ease;
}

.header-ordenavel.ativo {
  background: linear-gradient(135deg, #8a64beff);
  color: #fff;
}

.header-ordenavel.ativo::after {
  width: 100%;
}

.header-ordenavel.inativo {
  background-color: transparent;
  color: #bebebeff;
}

.header-ordenavel.inativo:hover {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.05));
}

.header-ordenavel.inativo:hover::after {
  width: 100%;
}
</style>
