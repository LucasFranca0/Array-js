inicio();

function inicio() {

    let opcao = parseInt(prompt("Selecione a opcão de desejada: \n 1). Listagem \n 2). Triagem de Nº < 50 e > 50 \n 3). Inventário Drofo e Topper \n 4). Sair"));

    switch (opcao) {

        case 1:
            lista();
            break;
        case 2:
            triagem();
            break;
        case 3:
            inventario();
            break;
        case 4:
            sair();
            break;
        default:
            alert("Opção inválida! Selecione uma opção de 1 a 4");
            inicio();
            break;
    }
}

function lista() {
    let contador = 0;
    let lista = [];

    if (lista.length > 20) {
        alert("Limite máximo.");
    } else {
        while (contador < 20) {
            contador++;
            let inserir_numero = parseInt(prompt("Insira o número " + contador + ": "));
            lista.push(inserir_numero);
        }
    }

    alert("Os número digitados foram: " + lista);
    inicio();
}

function triagem() {

    contador = 0;
    let lista_maior_50 = [];
    let lista_menor_50 = [];

    while (contador < 12) {
        contador++;
        let inserir_numero = parseInt(prompt("Insira o número " + contador + ":"));

        if (inserir_numero < 0 || inserir_numero == 0 || inserir_numero == NaN) {
            alert("Valor inválido. Insira valores acima de 0.");
            inicio();
        }

        if (inserir_numero > 0 && inserir_numero < 50) {
            lista_menor_50.push(inserir_numero);
        }
        else if (inserir_numero >= 50) {
            lista_maior_50.push(inserir_numero);
        }
    }

    alert("Os números maiores ou igual a 50 são: " + (lista_maior_50));
    alert("Os números menores que 50 são: " + (lista_menor_50));
    inicio();
}

function inventario() {

    let inventario_drofo = ["Anel da Invisibilidade", "Botas Mágicas", "Botas Mágicas", "Poção do Sono", "Poção da inocência", "Poção da inocência"];
    let inventario_topper = ["Capa da Invisibilidade", "Pedra do Dispertar", "Varinha das Varinhas", "Poção da inocência", "Poção da Mentira", "Poção da Mentira", "Poção de Anti-Inteligência"];

    //Jornada Topper
    inventario_topper.splice(4, 1); //Consumiu uma poção do Inventário
    inventario_topper.splice(1, 1);  // Perdeu Pedra do Dispertar     
    inventario_topper.push(inventario_drofo[1]); //Ganhou uma bota mágina do Drofo
    inventario_drofo.splice(1, 1);    // Menos uma bota mágica para Drofo
    inventario_topper.push("Escudo Mágico", "Espada Mágica");  // Topper achou um Escudo e uma Espada Mágica

    // Jornada Drofo
    inventario_drofo.push("Bota Mágica"); // Drofo ganhou mais uma bota mágica
    inventario_drofo.splice(2, 1);    // Drofo usou a poção do sono
    inventario_topper.splice(4, 1);  // Drofo usou a poção de anti-inteligência de Topper
    inventario_drofo.push("Ovo de Dragão", "Coxinha"); // Drofo encontrou um ovo de dragão e uma coxinha

    
    document.write("<strong>Drofo</strong> terá um anel da invisibilidade, dois pares de botas mágicas, uma poção do sono e duas poções da inocência. <br><br> <strong>Torper</strong> terá uma capa da invisibilidade, uma pedra do despertar,  uma varinha das varinhas, uma poção da inocência e duas poções da mentira, poção anti-inteligência.<br><br> No meio de sua jornada, Torper consumiu uma das poções da mentira, perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica.<br>");
    document.write("No meio da sua jornada, Drofo, ganhou mais uma bota mágica, usou sua poção do sono e consumiu a poção anti-inteligência do Torper, encontrou um ovo de dragão e uma coxinha.");
    document.write("<br><br> Fim da Jornada de Drofo e Tropper <br><br> Itens do Inventário: <br>" + "Tropper --> " + inventario_topper + "<br> Drofo -->" + inventario_drofo + "<br><br>");
}

function sair() {

    let confirma = confirm("Deseja sair?");

    if (confirma) {
        alert("Obrigado! Até mais!");
        window.close();
    }
    else {
        inicio();
    }
}
