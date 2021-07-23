import { readonly } from 'vue';

const state = {
  cards: [
    {
      name: 'Saitama',
      image: 'https://cdn140.picsart.com/331077348044201.jpg?type=webp&to=crop&r=128',
      price: '$ 10.00',
    },
    {
      name: 'Genos',
      image: 'https://pm1.narvii.com/6462/564cd7bd4db82c8ece4b3483097c4de0b6840297_128.jpg',
      price: '$9.99',
    },
    {
      name: 'Sonic Velocidade da Luz',
      image: 'https://pm1.narvii.com/7545/2c5241b41cfb381e6ebd424e12782924cedba241r1-300-460v2_128.jpg',
      price: '$6.40',
    },
    {
      name: 'Cavaleiro sem licença',
      image: 'https://pm1.narvii.com/6407/13e0b97c31ddc5592e2e187dc5cb8c374e2aa834_128.jpg',
      price: '$5.20',
    },
    {
      name: 'Tornado',
      image: 'https://pm1.narvii.com/6516/cdbd33630a5893aade4ba49765a73c1fe00248be_128.jpg',
      price: '$8.80',
    },
    {
      name: 'Pretty Pretty Prisoner',
      image: 'https://ih1.redbubble.net/image.223684705.5560/raf,128x128,075,f,e5d6c5:f62bbf65ee.u4.jpg',
      price: '$4.40',
    },
    {
      name: 'Silver Fang',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDHJAzQvaK0Sf72eXih8ds2xCPlWOEVqKlpAzLK5_VtrB0gy2auBDqB9dxDWnKdkC5Hs&usqp=CAU',
      price: '$ 7.90',
    },
    {
      name: 'Fubuki',
      image: 'https://pm1.narvii.com/6518/28f816a7e21548bfb751609241878e40e052f557_128.jpg',
      price: '$ 3.70',
    },
    {
      name: 'Atomic Samurai',
      image: 'https://pm1.narvii.com/6560/b58a811a54afee14eb7d52666751971663422a5d_128.jpg',
      price: '$ 2.00',
    },
    {
      name: 'Metal Bat',
      image: 'https://pm1.narvii.com/6556/67965d6d77eef20d072e73ab0fce7b20b41a8a36_128.jpg',
      price: '$ 1.93',
    },
    {
      name: 'Ashura Kabuto',
      image: 'https://pm1.narvii.com/7061/87d7fe415bc5c88ca07aff68b8101b94a313c00dr1-640-360v2_128.jpg',
      price: '$ 2.20',
    },
    {
      name: 'Rei do mar profundo',
      image: 'https://pm1.narvii.com/6489/99d6989f92768fb56e7711461cb825e95b45e546_128.jpg',
      price: '$ 5.10',
    },
    {
      name: 'Lord Boros',
      image: 'https://64.media.tumblr.com/avatar_91a12c0ac204_128.pnj',
      price: '$ 6.67',
    },
  ],

  cart: [],
};

const mutations = {};

const actions = {
  addItemToCart(card) {
    state.cart.push(card);
  },

};

export default function useSaitama() {
  return readonly({
    state,
    mutations,
    actions,
  });
}
