<template>
    <div class="login">
        <h2>Login</h2>
        <form>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" v-model="senha" required />
            </div>
            <button type="submit" class="btn btn-primary">Entrar</button>
        </form>
        <div v-if="mensagemErro" class="mensagem-erro">{{ mensagemErro }}</div>
        <div v-if="mensagemSucesso" class="mensagem-sucesso">{{ mensagemSucesso }}</div>
    </div>
</template>

<script>
import {ref} from "vue"
import router from '@/router';
</script>


<style scoped>
.login {
    max-width: 400px;
    margin: 100px auto;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login h2 {
    text-align: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
}

.mensagem-erro {
    color: red;
    margin-top: 10px;
}

.mensagem-sucesso {
    color: green;
    margin-top: 10px;
}
</style>