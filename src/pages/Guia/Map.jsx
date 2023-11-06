import React, { useState } from 'react';
import { Box, Center, Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const Map = ({ imageSrc, altText, description, contentImg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Center>
      <Box margin="20px">
        <Image src={imageSrc} alt={altText} className="custom-image" marginLeft="280px" maxWidth="100" onClick={openModal} cursor="pointer" />
        <Box bg='#E4E5FF' maxW="md" borderWidth="1px" borderRadius="lg">
          <Box p="6">
            <Image src={contentImg} alt={altText} className="custom-image" onClick={openModal} cursor="pointer" />
          </Box>
        </Box>
      </Box>
      <Modal isOpen={isModalOpen} onClose={closeModal} size="full">
        <ModalOverlay />
        <ModalContent alignItems="center" justifyContent="center"> {/* Adiciona estilos de centralização */}
          <ModalCloseButton />
          <ModalBody>
            <Image src={contentImg} alt={altText} className="custom-image" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default Map;
