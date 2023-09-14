import React, { useState, useEffect } from 'react';
import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import { buscaFilmes } from 'servicos/requisicoes/filmes';

function Favoritos() {
    const [video, setVideo] = useState();
    const [nomeFilme, setNomeFilme] = useState('');
    const [filme, setFilme] = useState({});
    const [videos, setVideos] = useState([]);

    /* useEffect(() => {
        fetch('https://my-json-server.typicode.com/wsimonini/fake-api/filmes?favorit=1')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
                console.log(dados)
            })
    }, []) */

    useEffect(() => {
        fetch('http://localhost:3000/filmes?favorit=1')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
                console.log(dados)
            })
    }, [])

    async function busca(){
        const resultado = await buscaFilmes()
        console.log(resultado)

        setNomeFilme('')
        if (resultado ) {
            setFilme(resultado)
        }
        else {
            setFilme({})
        }
    }   
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;