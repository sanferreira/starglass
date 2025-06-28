import React from 'react';
import barIMG from '../assets/dh-bar.png'; // ajuste o caminho se necessário

const ImagemDecorativa = () => {
    return (
        <img
            src={barIMG}
            alt="Imagem decorativa"
            width="230px"
            className=" my-3"
        />
    );
};

export default ImagemDecorativa;