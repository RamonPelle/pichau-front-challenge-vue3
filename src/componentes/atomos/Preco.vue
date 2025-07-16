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

<style scoped>
.preco-td {
  padding: 16px 12px;
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.preco-td::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.preco-td:hover::before {
  left: 100%;
}

.preco-nossa-loja {
  background: linear-gradient(
    135deg,
    #bebebeff,
    color-mix(in srgb, #bebebeff 90%, white)
  );
  color: #000;
  font-weight: bold;
}

.preco-mais-barato {
  background: linear-gradient(
    135deg,
    #8ac926ff,
    color-mix(in srgb, #8ac926ff 85%, white)
  );
  color: #000;
  box-shadow: 0 4px 12px color-mix(in srgb, #8ac926ff 30%, transparent);
}

.preco-mais-caro {
  background: linear-gradient(
    135deg,
    #ff595eff,
    color-mix(in srgb, #ff595eff 85%, white)
  );
  color: #000;
  box-shadow: 0 4px 12px color-mix(in srgb, #ff595eff 30%, transparent);
}

.preco-default {
  background: linear-gradient(
    135deg,
    #bebebeff,
    color-mix(in srgb, #bebebeff 90%, white)
  );
  color: #000;
}
</style>
