import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = (props) => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [image_url, setImage_url] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoFilmeCadastrado({
            id,
            name,
            gender,
            image_url
        })
        setId('')
        setName('')
        setGender('')
        setImage_url('')
        console.log(id, name, gender, image_url)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Filme</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="ID"
                    placeholder="Digite o id do Filme" 
                    valor={id}
                    aoAlterado={valor => setId(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome do Filme"
                    placeholder="Digite o nome do Filme" 
                    valor={name}
                    aoAlterado={valor => setName(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Genego"
                    placeholder="Digite o Genero" 
                    valor={gender}
                    aoAlterado={valor => setGender(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={image_url}
                    aoAlterado={valor => setImage_url(valor)}
                />
                <Botao>
                    Salvar Filme
                </Botao>
            </form>
        </section>
    )
}

export default Formulario