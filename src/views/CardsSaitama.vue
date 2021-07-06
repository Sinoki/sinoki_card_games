<template>
  <div>
    <header>
      <button>View products</button>
      <button>View Cart</button>
    </header>
  </div>
  <div class="cards">
  <div class="genos">
    <div class="name">Genos</div>
      <img src="../assets/genos.jpg" />
      <div class="price">"$ 9.99"</div>
      <div class="btn"><button>Add to cart</button></div>
  </div>
  <div class="sonic">
    <div class="name">Sonic Velocidade da Luz</div>
      <img src="https://pm1.narvii.com/7545/2c5241b41cfb381e6ebd424e12782924cedba241r1-300-460v2_128.jpg" />
      <div class="price">"$ 5.40"</div>
      <div class="btn"><button>Add to cart</button></div>
  </div>
  </div>
</template>

  <style>
header {
  height: 60px;
  box-shadow: 2px 2px 5px #a9271a;
  background-color: #fecc49;
  text-align: right;
  font-size: 30px;
  padding-top: 20px;
}
header button {
  padding: 10px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: #282c2f;
}
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid white;
}
.genos {
  width: 201px;
}
.sonic {
  margin-left: 50px;
}
</style>
