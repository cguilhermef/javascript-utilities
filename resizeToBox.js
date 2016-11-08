

function resizeToBox(wView, hView, wImg, hImg) {
  
  var propView = wView/hView;
  var propImg = wImg/hImg;
  
  var left = 0;
  var top = 0;
  var hNew = 0;
  var wNew = 0;
  
  if (propView === propImg) { 
    if (wImg >= wView) { 
      //proporções iguais e a imagem maior ou igual ao palco, 
      //imagem assume dimensões do palco.
      return [wView, hView, left, top];
    } else {
      //proporções iguais e imagem menor que o palco
      //a imagem preserva suas dimensões e o posicionamento é calculado.
      left = parseInt((wView - wImg)/2);
      top = parseInt((hView - hImg)/2);
      return [wImg, hView, left, top];
    }
  }
  
  if (propView === 1 ) { // palco quadrado
    if (wImg > wView || hImg > hView) {
      if (propImg > 1) { //imagem paisagem   
        hNew = parseInt(wView / propImg);
        top = parseInt((hView - hNew)/2);
        return [wView, hNew, left, top];       
      }
      if (propImg < 1) { //imagem retrato
        wNew = parseInt(wView * propImg);
        left = parseInt((wView - wNew)/2);
        return [wNew, hView, left, top];
      }
    }
    left = parseInt((wView - wImg) / 2);
    top = parseInt((hView - hImg) / 2);
    return [wImg, hImg, left, top];
  }
  
  if (propImg === 1) {
    if (propView > 1) {
      left = parseInt((wView - hView)/2);
      return [hView, hView, left, top];
    }
    if (propView < 1) {
      top = parseInt((hView - wView)/2);
      return [wView, wView, left, top];
    }
  }
  
  
  if (wImg > wView || hImg > hView) {
    if (propImg > 1) {
      hNew = parseInt(wView / propImg);
      if (hNew > hView) {
        wNew = parseInt(hView * propImg);
        return resizeToBox(wView, hView, wNew, hView);
      }
      top = parseInt((hView - hNew)/2);
      return [wView, hNew, left, top];
    }
    if (propImg < 1) {
      wNew = parseInt(hView * propImg);
      if (wNew > wView) {
        hNew = parseInt(wView / propImg);
        return resizeToBox(wView, hView, wView, hNew);
      }
      left = parseInt((wView - wNew)/2);
      return [wNew, hView, left, top];
    }
  }

  left = parseInt((wView - wImg) / 2);
  top = parseInt((hView - hImg) / 2);
  return [wImg, hImg, left, top];
}

console.log(resizeToBox(100, 400, 200, 200));
