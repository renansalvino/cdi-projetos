import React from "react"

export default function Guia() {
    return (
        <>
            <section class="hero-section">
                <h1>Bem-vindo à Unicamp</h1>
                <p>Preparamos tudo que você precisa saber para começar sua jornada conosco.</p>
                <a href="#admission-process" class="cta-button">Saiba Mais</a>
            </section>

            <section class="section-container">
                <section class="section admission-process" id="admission-process">
                    <h2>Cursos</h2>
                    <p>Conheça nossos cursos.</p>
                    <a href="#programs" class="cta-button">Nossos Programas</a>
                </section>

                <section class="section academic-programs" id="academic-programs">
                    <h2>Horas Complementares</h2>
                    <p>Tutorial para atividades complementares.</p>
                    <a href="#contact" class="cta-button">Saiba Mais</a>
                </section>
            </section>
        </>
    )
}