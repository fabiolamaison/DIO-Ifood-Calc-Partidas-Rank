// Variáveis com valores para vitórias e derrotas em partidas rankeadas
let vitorias = 130;
let derrotas = 30;
// Variável com o saldo de vitórias, obtido da subtração das vitórias pelas derrotas
let saldoVitorias = vitorias - derrotas;

// Declaração da variável nível, que guardará o rank do usuário, OBS.: seria melhor chamar de rank
let nivel = '';

// Chamada da função que calcRank previamente a sua localização no código
calcRank(saldoVitorias);

// Definição da função que calcula o rank com base no saldo de vitórias
function calcRank(saldoVitorias){

// Switch que definirá o valor da variável nivel com base no saldo de vitórias
// As condicionais seguem o padrão | saldoVitorias < saldo necessário para se atingir o próximo rank |
switch(true) {
    case saldoVitorias < 11:
        nivel = 'Ferro';
        break;
    case saldoVitorias < 21:
        nivel = 'Bronze';
        break;
    case saldoVitorias < 51:
        nivel = 'Prata';
        break;
    case saldoVitorias < 81:
        nivel = 'Ouro';
        break;
    case saldoVitorias < 91:
        nivel = 'Diamante';
        break;
    case saldoVitorias < 101:
        nivel = 'Lendário';
        break;
    case saldoVitorias > 100:
        nivel = 'Imortal';
        break;
    }
return nivel
}

// Interpola uma estrutura de string padrão com os valores resultantes do código
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)