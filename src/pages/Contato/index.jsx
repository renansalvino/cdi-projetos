import React from 'react';
import Title from '../../components/Title';

function Contato() {
  const title = "Contato"
  const subtitle = "Nossos contatos"

  return (
    <>
      <Title title={title} subtitle={subtitle} />
      <h1>Hello, Contato! </h1>
    </>
  );
}

export default Contato;