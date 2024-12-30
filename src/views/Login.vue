<template>
    <div class="auth-container">
        <h2 class="text-center mb-4">Login</h2>
        <form @submit.prevent="handleLogin">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" v-model="email" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Senha</label>
                <input type="password" id="password" v-model="password" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary w-100">Entrar</button>
        </form>
        <p class="text-center mt-3">
            Não tem uma conta?
            <router-link to="/cadastro">Cadastre-se</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        handleLogin() {
            // Lógica de autenticação será implementada posteriormente
            console.log("Email:", this.email);
            console.log("Senha:", this.password);
        },
    },
};
</script>

<style scoped>
.auth-container {
    color: #fff;
    width: 1300px;
    max-width: 1400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 18px;
    background-color: #05102483;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    bottom: 30px;
    position: relative;
    right: 45.5px;
}
</style>