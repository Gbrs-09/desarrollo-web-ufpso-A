<template>
  <div class="container mt-5 col-md-4">
    <h3>Iniciar Sesión</h3>

    <input
      v-model="usuario"
      class="form-control mb-2"
      placeholder="Usuario"
    />

    <input
      v-model="clave"
      type="password"
      class="form-control mb-2"
      placeholder="Contraseña"
    />

    <button class="btn btn-primary w-100" @click="login">
      Entrar
    </button>

    <p v-if="error" class="text-danger mt-2">
      {{ error }}
    </p>
  </div>
</template>

<script>
import users from '@/assets/usuarios.json'

export default {
  data() {
    return {
      usuario: '',
      clave: '',
      error: ''
    }
  },
  methods: {
    login() {
      const valido = users.find(
        u => u.userName === this.usuario && u.password === this.clave
      )

      if (valido) {
        localStorage.setItem('logueado', 'true')
        this.$router.push('/dashboard')
      } else {
        this.error = 'Credenciales incorrectas'
      }
    }
  }
}
</script>