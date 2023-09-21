import React from 'react';
import Title from '../../components/Title';

function SobreNos() {
  const title = "Sobre Nós"
  const subtitle = "Pinguim Pinguim Pinguim Pinguim Pinguim"

  return (
    <>
      <Title title={title} subtitle={subtitle} />
      <h1>Hello, Sobre nós! </h1>
    </>
  );
}

export default SobreNos;