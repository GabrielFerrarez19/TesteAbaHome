/*script barra de tarefas*/
const toggleButton = document.getElementById('checkbox');

const corpo2 = document.getElementById('corpo2');
let iscorpo2Visible = false;

const taskbar = document.getElementById('taskbar');
let isTaskbarVisible = false;


toggleButton.addEventListener("click", function() {
  if (corpo2.classList.contains("animation2-in")) {
    corpo2.classList.remove("animation2-in");
    corpo2.classList.add("animation2-out");
    setTimeout(function() {
    corpo2.style.display = 'none';
    iscorpo2Visible = false; }, 1000);
  } else {

    corpo2.style.display = "block";
    corpo2.classList.remove("animation2-out");
    corpo2.classList.add("animation2-in");
    iscorpo2Visible = true;
  }
});

toggleButton.addEventListener("click", function() {
  if (taskbar.classList.contains("animation-in")) {
    taskbar.classList.remove("animation-in");
    taskbar.classList.add("animation-out");
  } else {

    taskbar.style.display = "block";
    taskbar.classList.remove("animation-out");
    taskbar.classList.add("animation-in");
  }
});


// Função para cadastrar os dados
function cadastrarDados() {
  var nome = document.getElementById("nome").value;
  var cpf = document.getElementById("cpf").value;
  var sexo = document.getElementById("sexo").value;
  var data = document.getElementById("data").value;
  var codigoPesquisa = document.getElementById("codigoPesquisa").value;
  var rua = document.getElementById("rua").value;
  var bairro = document.getElementById("bairro").value;
  var num = document.getElementById("num").value;
  var cidade = document.getElementById("cidade").value;
  var est = document.getElementById("est").value;
  
  // Salvar os dados em algum lugar (por exemplo, em um objeto ou em um banco de dados)
  // Aqui, irei armazenar os dados em uma variável chamada "dadosCadastrados"
  if (typeof dadosCadastrados === 'undefined') {
      dadosCadastrados = [];
  }
  
  dadosCadastrados.push({ nome: nome, cpf: cpf, sexo: sexo, data: data, codigoPesquisa: codigoPesquisa, rua: rua, bairro: bairro, num: num, cidade: cidade, est: est });
  
  // Limpar os campos após cadastrar
  document.getElementById("nome").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("sexo").value = "";
  document.getElementById("data").value = "";
  document.getElementById("codigoPesquisa").value = "";
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("num").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("est").value = "";

  alert("Dados cadastrados:\nNome: " + nome + "\nCPF: " + cpf + "\nSexo: " + sexo + "\nData de Nascimento: " + data + "\nCódigo Afiliado: " + codigoPesquisa + "\nRua: " + rua + "\nBairro: " + bairro + "\nNúmero: " + num + "\nCidade: " + cidade + "\nEstado: " + est  );
}

// Função para exibir os dados cadastrados
// Função para exibir os dados cadastrados
function exibirDados() {
var codigoPesquisa = document.getElementById("codigoPesquisa").value;

// Procurar pelos dados cadastrados com o código informado
var encontrados = dadosCadastrados.filter(function(dado) {
  return dado.codigoPesquisa === codigoPesquisa;
});

if (encontrados.length > 0) {
  // Exibir os dados encontrados
  var mensagem = "Dados encontrados:\n\n";
  encontrados.forEach(function(dado) {
      mensagem += "Nome: " + dado.nome + "\n";
      mensagem += "CPF: " + dado.cpf + "\n";
      mensagem += "Sexo: " + dado.sexo + "\n";
      mensagem += "Data de Nascimento: " + dado.data + "\n";
      mensagem += "Código Afiliado: " + dado.codigoPesquisa + "\n\n";
      mensagem += "Rua: " + dado.rua + "\n";
      mensagem += "Bairro: " + dado.bairro + "\n";
      mensagem += "Número: " + dado.num + "\n";
      mensagem += "Cidade: " + dado.cidade + "\n";
      mensagem += "Estado: " + dado.est + "\n";
  });

  // Exibir um alerta com os dados encontrados
  alert(mensagem);
} else {
  // Exibir um alerta caso nenhum dado seja encontrado
  alert("Nenhum dado encontrado com o código informado.");
}
}





const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});









 //script grafico
 document.addEventListener('DOMContentLoaded', function () {
  // Função para obter os últimos 6 meses
  function getLast6Months() {
    const months = [];
    const currentDate = new Date();
    for (let i = 5; i >= 0; i--) {
      const month = currentDate.getMonth() - i;
      const year = currentDate.getFullYear();
      months.push(`${month + 1}/${year}`);
    }
    return months;
  }

  // Dados dos últimos 6 meses (substitua com seus próprios dados)
  const data = [100, 150, 200, 180, 250, 300];

  // Meses dos últimos 6 meses (obtidos automaticamente)
  const months = getLast6Months();

  // Crie o contexto do gráfico
  const ctx = document.getElementById('lineChart').getContext('2d');

  // Crie o gráfico de linhas
  const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months, // Use os meses como rótulos do eixo X
      datasets: [{
        label: '',
        borderColor: 'rgb(5, 68, 104)   ',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        data: data, // Use os dados dos últimos 6 meses
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false // Ocultar linhas de grade no eixo X
          }
        },
        y: {
          beginAtZero: true // Começar o eixo Y a partir do valor zero
        }
      }
    }
  });
});