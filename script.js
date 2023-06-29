function toggleMode() {
  const html = document.documentElement
  /*pode ser feito dessa forma
  if (html.classList.contains('light')) {  
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */
  html.classList.toggle("light") /*pode ser feito dessa froma tambem*/

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/johnny.png")
  } else {
    // se tiver sem lighr=t mode, manter a imagem normal
    img.setAttribute("src", "./assets/johnny1.png")
  }


}