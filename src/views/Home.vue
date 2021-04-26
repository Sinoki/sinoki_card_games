<template>
  <div class="home">
    <div class="welcome">
      Bom dia, boa tarde, boa noite, depende de onde você está 😃 seja bem vindo
      ao markeplace Sinoki Card Games 🚀
    </div>

    <img class="img1" src="https://i.ibb.co/k44tdZt/pokemon.jpg" />

    <div class="footer">2021 ♥ Desenvolvimento: Sinoki Card Games ®.</div>
  </div>
</template>

<script>
class Carousel {
  constructor(objeto) {
    console.log('inicio', objeto);

    this._els = [];

    if (objeto.images) {
      this.images = objeto.images;
    }

    if (objeto.el) {
      this.el = objeto.el;
      this.el.classList.add('__carousel_container');
    }

    if (objeto.el && objeto.images && objeto.images.length) {
      console.log('vamos renderizar');
      this.renderImagens();
    } else {
      console.error('Não tem imagens 😲 ');
    }

    console.log('Fim', this);
  }

  renderImagens() {
    console.log('vamos renderizar as imagens');
    for (let i = 0; i < this.images.length; i++) {
      const imgUrl = this.images[i];
      const imgEl = this.createImgElement(i, imgUrl);
      console.log('[]...', imgUrl);

      this.el.appendChild(imgEl);
    }
  }

  createImgElement(idx, imgUrl) {
    const el = document.createElement('img');
    el.src = imgUrl;
    el.classList.add('__carousel_img');

    const existsIndex = this._els.findIndex((x) => x === imgUrl);
    if (existsIndex > -1) {
      this._els[existsIndex] = el;
    } else {
      this._els.push(el);
    }

    return el;
  }
}

const options = {
  el: document.getElementById('carousel'),
  images: [
    'https://i.ibb.co/k44tdZt/pokemon.jpg',
    'https://i.ibb.co/ZHF7SyQ/batalha.jpg',
    'https://i.ibb.co/84JLDKQ/Ashe-Pikachu.jpg',
  ],
};
const carousel = new Carousel(options);
</script>

<style lang="scss" scoped>
.welcome {
  margin-top: 20px;
  font-family: "Ink Free";
  font-size: 27px;
  color: #f9105a;
}

.img1 {
  border-radius: 10px;
  border: 5px solid grey;
  margin-top: 30px;
  width: 700px;
  height: 400px;
}

.__carousel_container {
  display: flex;
  border: 1px solid white;
}

.__carousel_img {
  width: 50px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #444;
  color: white;
  text-align: center;
}
</style>
