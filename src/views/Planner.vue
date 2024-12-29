<template>
    
    <div class="container mt-4">
        <h1 class="text-center mb-4">Minha Planilha</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Coluna 1</th>
                    <th scope="col">Coluna 2</th>
                    <th scope="col">Coluna 3</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Exemplo 1</td>
                    <td>Exemplo 2</td>
                    <td>Exemplo 3</td>
                    <td>
                        <button class="btn btn-warning btn-sm me-2">Editar</button>
                        <button class="btn btn-danger btn-sm">Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-primary mt-3">Adicionar Nova Linha</button>
    </div>
</template>

<script>
export default {
    name: "Planner",
};
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: auto;
}
</style>
