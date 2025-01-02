<template>
    <div class="container mt-5">
      <div class="header-section text-center mb-4">
        <h1 class="fw-bold">Movimentação de Extrato</h1>
        <p class="text-muted">Acompanhe todas as suas movimentações financeiras com detalhes e clareza.</p>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered table-hover align-middle">
          <thead class="table-dark text-center">
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Tipo de Operação</th>
              <th scope="col">Ativo</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Preço</th>
              <th scope="col">Valor Total</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(movimentacao, index) in movimentacoes" :key="index" class="text-center">
              <td>{{ movimentacao.data }}</td>
              <td>
                <span
                  :class="{
                    'badge bg-success': movimentacao.tipo === 'Compra',
                    'badge bg-danger': movimentacao.tipo === 'Venda',
                  }"
                >
                  {{ movimentacao.tipo }}
                </span>
              </td>
              <td>{{ movimentacao.ativo }}</td>
              <td>{{ movimentacao.quantidade }}</td>
              <td>{{ movimentacao.preco }}</td>
              <td>{{ movimentacao.valorTotal }}</td>
              <td>
                <button class="btn btn-outline-warning btn-sm me-2">
                  <a class="bi bi-pencil-square"></a> Editar
                </button>
                <button class="btn btn-outline-danger btn-sm">
                  <a class="bi bi-trash"></a>Excluir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <button class="btn btn-primary btn-lg">
          <a class="bi bi-plus-circle"></a> Adicionar Nova Movimentação
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Planner",
    data() {
      return {
        movimentacoes: [
          {
            data: "2024-12-28",
            tipo: "Compra",
            ativo: "PETR4",
            quantidade: 100,
            preco: "R$ 28,50",
            valorTotal: "R$ 2.850,00",
          },
          {
            data: "2024-12-29",
            tipo: "Venda",
            ativo: "VALE3",
            quantidade: 50,
            preco: "R$ 72,00",
            valorTotal: "R$ 3.600,00",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 5000px;
    width: 1300px;
    margin: auto;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 18px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    right: 42.5px;
    bottom: 100px;
    }
  
  .header-section h1 {
    color: #343a40;
  }
  
  .header-section p {
    font-size: 1.1rem;
  }
  
  .table {
    background: #ffffff;
    border-collapse: separate;
    border-spacing: 0;
  }
  
  .table thead th {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  .table tbody tr:hover {
    background: #f1f1f1;
  }
  
  .btn {
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  .btn i {
    margin-right: 5px;
  }
  </style>
  