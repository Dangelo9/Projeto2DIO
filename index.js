function nivelRankeadas (vitorias, derrotas){
    let saldoDeVitorias = vitorias - derrotas;
    
    let Nivel;

    switch(true) {
        case saldoDeVitorias < 10:
        Nivel = "ferro";
        break;
            case saldoDeVitorias >= 11 && saldoDeVitorias <= 20:
        Nivel = "bronze";
        break

        case saldoDeVitorias >= 21 && saldoDeVitorias <= 50:
            Nivel = "prata";
            break;

            case saldoDeVitorias >= 51 && saldoDeVitorias <= 80:
                Nivel = "ouro";
                break;

                case saldoDeVitorias >= 81 && saldoDeVitorias <= 90:
                    Nivel = "Diamante";
                    break;

                    case saldoDeVitorias >= 91 && saldoDeVitorias <= 100: 
                    Nivel = "lendario";
                    break;
                    
                    default:
                    Nivel = "Imortal";

                    return `O Herói tem um saldo de ${saldoDeVitorias} Vitórias e está no nível de ${Nivel}!`;
    }
    return `O heroi tem um saldo de ${saldoDeVitorias} Vitorias e esta no Nivel ${Nivel}!`;
}
    let vitorias = 81
    let derrotas = 28

const resultado = nivelRankeadas(vitorias, derrotas);
    console.log(resultado);