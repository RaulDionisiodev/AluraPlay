async function listaVideos() {
    const conexao = await fetch("http://localhost:3004/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3004/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}

async function buscaVideo(termoDeusca) {
    const conexao = await fetch(`http://localhost:3004/videos?q=${termoDeusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}

// start json server
//npx json-server --watch db.json --port 3004
