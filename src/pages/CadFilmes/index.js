import React, { useState } from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import "../CadFilmes/index.css"

function CadFilmes(){
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [favorit, setFavorit] = useState("");
    const [image_url, setImage_url] = useState("");
    const [mesage, setMesage] = useState("");

    let handleSubmit = async (e) => {
            e.preventDefault();
            try{
                let res = await fetch("http://localhost:3000/filmes", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                body: JSON.stringify({name,gender,favorit,image_url
                }),
            });
            let resJson = await res.json();
            if (res.status === 201) {
                setName("");
                setGender("");
                setFavorit("");
                setImage_url("");
                setMesage("Adicionado com sucesso");
            }else{
                setMesage("Erro ao adicionar");
            }
        } catch (err){
            console(err);
        }
    };

return(
    <>
        <Banner imagem='favoritos' />
        <Titulo>
            <h1>Cadastrar Filmes</h1>
        </Titulo>
        <section className="formulario">

        <form onSubmit={handleSubmit}>
            <div className="campo-texto">
                <input
                type="text"
                value={name}
                placeholder="Inserir nome do filme"
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="text"
                value={gender}
                placeholder="Inserir genero do filme"
                onChange={(e) => setGender(e.target.value)}
                />
                <input
                type="text"
                value={image_url}
                placeholder="Inserir url da imagem do filme"
                onChange={(e) => setImage_url(e.target.value)}
                />
                <button className="botao" type="submit">Inserir filme</button>
                <div className="mensagem">{mesage ? <p>{mesage}</p> : null} </div>
            </div>
        </form>
        </section>
    </>
)

    // return(
    //     <>
    //     <Banner imagem='favoritos'/>
    //     <Titulo>
    //         <h1>Cadastro de filmes</h1>
    //     </Titulo>
    //     <CampoTexto placeholder="Inserir Nome"/>
    //     <CampoTexto placeholder="Inserir Gênero"/>
    //     <CampoTexto placeholder="Inseir Imagem"/>
    //     </>
    // )
}

export default CadFilmes;