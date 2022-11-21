
const myImage = document.querySelectorAll("img");

myImage.forEach(function(onclick) {

onclick.addEventListener('click', function() {
  const mySrc = this.getAttribute("src"); 
  const number = mySrc.slice(40,42);
  const numberOpen = mySrc.slice(38,40);
  const numberDead = mySrc.slice(37, 39);

  if (mySrc === "QuantumGamesGraphics/ClosedBox/ClosedBox" + number + ".png") {
    if (parseInt(number) % 2 ==! 0) {
    this.setAttribute("src", "QuantumGamesGraphics/AliveCat/AliveCat" + number + ".png");
    } else {
      this.setAttribute("src", "QuantumGamesGraphics/DeadCat/GhostCat" + number + ".png");
    }
  } else { 
    if (mySrc === "QuantumGamesGraphics/AliveCat/AliveCat" + numberOpen + ".png") {
    this.setAttribute("src", "QuantumGamesGraphics/OpenBox/Alive/OpenBox" + numberOpen + ".png");
    }
    else if (mySrc === "QuantumGamesGraphics/DeadCat/GhostCat" + numberDead + ".png") {
    this.setAttribute("src", "QuantumGamesGraphics/OpenBox/Dead/OpenBoxDead" + numberDead + ".png");
    }
  }
  })
 /* if (mySrc === "QuantumGamesGraphics/ClosedBox/ClosedBox22.png") {
    this.setAttribute("src", "QuantumGamesGraphics/DeadCat/GhostCat22.png");
  } else {
    this.setAttribute("src", "QuantumGamesGraphics/ClosedBox/ClosedBox22.png");
  }*/
})

  /*const mySrc = myImage.item(1).getAttribute("src");
  if (mySrc === "QuantumGamesGraphics/ClosedBox/ClosedBox1.png") {
    myImage.item(1).setAttribute("src", "QuantumGamesGraphics/AliveCat/AliveCat1.png");
  } else {
    myImage.item(1).setAttribute("src", "QuantumGamesGraphics/ClosedBox/ClosedBox1.png");
  }
};*/

/*myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "QuantumGamesGraphics/AliveCat/AliveCat1.png") {
    myImage.setAttribute("src", "QuantumGamesGraphics/OpenBox/Alive/OpenBox1.png");
  } else {
    myImage.setAttribute("src", "QuantumGamesGraphics/AliveCat/AliveCat1.png");
  }
};

//const myImage22 = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "QuantumGamesGraphics/ClosedBox/ClosedBox22.png") {
    myImage.setAttribute("src", "QuantumGamesGraphics/DeadCat/GhostCat22.png");
  } else {
    myImage.setAttribute("src", "QuantumGamesGraphics/ClosedBox/ClosedBox22.png");
  }
};

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "QuantumGamesGraphics/DeadCat/GhostCat22.png") {
    myImage.setAttribute("src", "QuantumGamesGraphics/OpenBox/Alive/OpenBox22.png");
  } else {
    myImage.setAttribute("src", "QuantumGamesGraphics/DeadCat/GhostCat22.png");
  }
};*/

