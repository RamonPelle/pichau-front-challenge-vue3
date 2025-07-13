<template>
<!-- App.vue -->

<v-app>
<v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            subtitle="Gerente"
            title="Joe Doe"
            color="red"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

<v-app-bar :elevation="4" color="red" app>
  <v-app-bar-title class="text-h5 font-weight-bold text-white">
    <v-icon icon="mdi-calculator-variant" class="me-2"></v-icon>
    Gestão de Orçamentos
  </v-app-bar-title>
</v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

 <v-footer class="d-flex flex-column w-100" color="red" app>
    <div class="d-flex align-center px-4 py-2 justify-center">
      <strong>Desafio Pichau 2025</strong>
    </div>
    <div class="d-flex align-center px-4 py-2 justify-center">
    <p>Ramon Pelle</p>
    </div>
  </v-footer>
</v-app>
</template>

<script>
export default { name: 'App' };
</script>