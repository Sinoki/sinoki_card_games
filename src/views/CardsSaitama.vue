<template>
  <div>
    <header>
      <button class="products">
        <router-link to="products">View cards</router-link>
      </button>
      <button class="cart">
        <router-link to="cart">View cart</router-link>
      </button>
    </header>
    <h1>Cards</h1>

    <div class="footer">2021 ♥ Desenvolvimento: Sinoki Card Games ®.</div>
    <div class="cards">
      <div class="saitama">
        <div class="name">Saitama</div>
        <img
          src="https://cdn140.picsart.com/331077348044201.jpg?type=webp&to=crop&r=128"
        />
        <div class="price">"$ 10.00"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="genos">
        <div class="name">Genos</div>
        <img
          src="https://pm1.narvii.com/6462/564cd7bd4db82c8ece4b3483097c4de0b6840297_128.jpg"
        />
        <div class="price">"$ 9.99"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="sonic">
        <div class="name">Sonic Velocidade da Luz</div>
        <img
          src="https://pm1.narvii.com/7545/2c5241b41cfb381e6ebd424e12782924cedba241r1-300-460v2_128.jpg"
        />
        <div class="price">"$ 6.40"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="cavaleiro">
        <div class="name">Cavaleiro sem licença</div>
        <img
          src="https://pm1.narvii.com/6407/13e0b97c31ddc5592e2e187dc5cb8c374e2aa834_128.jpg"
        />
        <div class="price">"$ 5.20"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="tornado">
        <div class="name">Tornado</div>
        <img
          src="https://pm1.narvii.com/6516/cdbd33630a5893aade4ba49765a73c1fe00248be_128.jpg"
        />
        <div class="price">"$ 8.80"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="pretty">
        <div class="name">Pretty Pretty Prisoner</div>
        <img
          src="https://ih1.redbubble.net/image.223684705.5560/raf,128x128,075,f,e5d6c5:f62bbf65ee.u4.jpg"
        />
        <div class="price">"$ 4.40"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="silver">
        <div class="name">Silver Fang</div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDHJAzQvaK0Sf72eXih8ds2xCPlWOEVqKlpAzLK5_VtrB0gy2auBDqB9dxDWnKdkC5Hs&usqp=CAU"
        />
        <div class="price">"$ 7.90"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="fubuki">
        <div class="name">Fubuki</div>
        <img
          src="https://pm1.narvii.com/6518/28f816a7e21548bfb751609241878e40e052f557_128.jpg"
        />
        <div class="price">"$ 3.70"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="atomic">
        <div class="name">Atomic Samurai</div>
        <img
          src="https://pm1.narvii.com/6560/b58a811a54afee14eb7d52666751971663422a5d_128.jpg"
        />
        <div class="price">"$ 2.00"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="metal">
        <div class="name">Metal Bat</div>
        <img
          src="https://pm1.narvii.com/6556/67965d6d77eef20d072e73ab0fce7b20b41a8a36_128.jpg"
        />
        <div class="price">"$ 1.93"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="ashura">
        <div class="name">Ashura Kabuto</div>
        <img
          src="https://pm1.narvii.com/7061/87d7fe415bc5c88ca07aff68b8101b94a313c00dr1-640-360v2_128.jpg"
        />
        <div class="price">"$ 2.20"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="rei">
        <div class="name">Rei do mar profundo</div>
        <img
          src="https://pm1.narvii.com/6489/99d6989f92768fb56e7711461cb825e95b45e546_128.jpg"
        />
        <div class="price">"$ 5.10"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
      <div class="boros">
        <div class="name">Lord Boros</div>
        <img src="https://64.media.tumblr.com/avatar_91a12c0ac204_128.pnj" />
        <div class="price">"$ 6.67"</div>
        <div class="btn"><button>Add to cart</button></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  height: 80px;
  background-color: #fecc49;
  text-align: right;
  font-size: 30px;
  padding-top: 20px;
}
header button {
  padding: 10px;
  margin: 3px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #282c2f;
}
button a {
  color: white;
}
a:link {
  text-decoration: none;
}
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid white;
  padding: 50px;
}
.name {
  width: 150px;
  margin: 10px 50px;
}
</style>
