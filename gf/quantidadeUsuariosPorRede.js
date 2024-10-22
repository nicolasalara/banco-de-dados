import {getCSS, tickConfig } from"cammon.js"
async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados);

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar'
        }
    ]

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Ploty.newPlot(grafico, data)

}

const laytout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: ' redes sociais com mais usuario',
        x: 0,
        font: {
            color: getCSS('--primary-color')
            size: 30,
            font: getCSS('--font-')
        }
    },



xaxis: {
    tickfont: tickConfig,
        title: {
        text: 'nomes das redes',
            font: {
            color: getCSS('--secondary-color')
        }
    },
    YAXIS: {
        tickfont: tickConfig,
            title: {
            text: 'bilhoes de usuarios ativos',
                font: {
                color: getCSS('--secondary-color');
            }
        }
    }
}

const grafico = document.createElement('div')
grafico.clasname = 'grafico'
document.getElementeById('graicos-container').appendChield(grafico)
Ploty.newplot(grafico, data, laytout)

}

quantidadeUsuariosPorRede();
