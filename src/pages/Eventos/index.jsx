import React from 'react';

export default function Eventos() {
    return (
        <>
            <header>
                <div class="container">
                    <div class="logo">
                        <img src="./img/Logo CDI.png" alt="" />
                    </div>
                </div>
                <h1>CDI - Comissão Discente de Informática</h1>
                <img src="https://camilalordelo1.github.io/cdi-unicamp/img/Logo%20CDI.png" alt="CDI" />
            </header>
            {
                //Barra de pesquisa
            }
            <div id="divBusca">
                {
                    //<img src="search3.png" alt="Buscar..." />
                }
                <input type="text" id="txtBusca" placeholder="Buscar..." />
                <button id="btnBusca">Buscar</button>
            </div>
            <div class="topic">
                <h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-H41_5-u5IOaOY8wA4bjq6yIg85DMwySnToZUXFWz1o_o9zA4"
                    alt="Oportunidades Externas" />Oportunidades Externas & Carreiras</h1>
                <p>Informações sobre estágios, IC, etc (com link e explicação sobre o tópico).</p>
            </div>

            <div class="topic">
                <p>
                    <p>
                        <p>

                        </p>
                    </p>
                </p>
                <hr />
                <p>
                    <p>

                    </p>
                </p>
                <hr />
                <h1>Eventos Próximos</h1>
                    <div style={{overflow: "hidden"}}>
                    <img src="https://i.imgur.com/AtGb6zx.png" alt="Eventos"
                        style={{maxWidth: "1200px", float: "right", margin: "0 10px 10px 0"}} />

                    <p>Data sobre os eventos próximos conforme o calendário e link para post (ou alguma publicação) com demais
                        informações sobre o mesmo.</p>
                    <p />
                </div>
                <div id="calendar"></div>
            </div>

        </>
    )
}