
async function quantidadeUsuariosPorRede() {
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
const res = await fetch (url)
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
Ploty.newPlot(grafico,data)

}

const laytout = {
    plot_BGCOLOR: getCSS('--bg-color'),
    paper-bgcolor: getCSS('--bg-color'),
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
        title:{
        text: 'nomes das redes',
            font: {
            color: getCSS('--secondary-color')
        }
    },
    yaxis: {
        tickfont: tickConfig,
            title: {
            text: 'bilhoes de usuarios ativos',
            font:{
                color: getCSS('--secpndary-color')
            }
        }
    }
}

quantidadeUsuariosPorRede();
