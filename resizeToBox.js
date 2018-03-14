resizeBoard(wView, hView, wImg, hImg) {

    const propView = wView / hView;
    const propImg = wImg / hImg;

    let hNew = 0;
    let wNew = 0;

    if ( propView === propImg ) {
      if ( wImg >= wView ) {
        // proporções iguais e a imagem maior ou igual ao palco,
        // imagem assume dimensões do palco.
        return [ wView, hView ];
      }
      // proporções iguais e imagem menor ou igual que o palco
      // a imagem preserva suas dimensões
      return [ wImg, hImg ];
    }

    if ( propView === 1 ) { // palco quadrado
      if ( wImg > wView || hImg > hView ) {
        if ( propImg > 1 ) { // imagem paisagem
          hNew = Math.ceil(wView / propImg);
          return [ wView, hNew ];
        }
        if ( propImg < 1 ) { // imagem retrato
          wNew = Math.ceil(wView * propImg);
          return [ wNew, hView ];
        }
      }
      return [ wImg, hImg ];
    }

    if ( propImg === 1 ) { // imagem quadrada
      if ( propView > 1 ) {
        return [ hView, hView ];
      }
      if ( propView < 1 ) {
        return [ wView, wView ];
      }
    }

    // proporcoes diferentes
    if ( hImg > hView || wImg > wView ) {
      if ( hImg > hView ) {
        hNew = hView;
        wNew = Math.ceil(hNew * propImg); // diminui a largura proporcionalemente
        return [ wNew, hNew ];
      }
      if ( wImg > wView ) {
        wNew = wView;
        hNew = Math.ceil(wNew / propImg);
        return [ wNew, hNew ];
      }
    }

    if ( hImg < hView || wImg < wView ) {
      if ( hImg < hView ) {
        hNew = hView;
        wNew = Math.ceil(hNew * propImg); // diminui a largura proporcionalemente
        return [ wNew, hNew ];
      }
      if ( wImg < wView ) {
        wNew = wView;
        hNew = Math.ceil(wNew / propImg);
        return [ wNew, hNew ];
      }
    }

    return [ wImg, hImg ];
  }
