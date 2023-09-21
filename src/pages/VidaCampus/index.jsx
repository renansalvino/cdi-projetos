import React from "react";

export default function VidaCampus() {
    return (
        <>
            <section class="center">
                <h1>Bem vindo a página de Vida no Campus</h1>
                <p>Aqui vai ser possível explorar informações sobre o campus de Limeira.</p>
            </section>

            <section class="events">
                <h2>Próximos eventos</h2>
                <div class="event">

                    <h3>Nome do Evento</h3>
                    <p>Data: 20 de Agosto, 2023</p>
                    <p>Localização: Faculdade de Tecnologia</p>
                </div>
            </section>

            <h2>Vida do Estudante</h2>
            <section class="cards">
                <div class="card">
                    <img src="imagem1.jpg" alt="Imagem 1" />
                        <div class="card-text">Descrição da Imagem 1</div>
                </div>
                <div class="card">
                    <img src="imagem2.jpg" alt="Imagem 2" />
                        <div class="card-text">Descrição da Imagem 2</div>
                </div>
                <div class="card">
                    <img src="imagem3.jpg" alt="Imagem 3" />
                        <div class="card-text">Descrição da Imagem</div>
                </div>
            </section>
        </>
    )
}