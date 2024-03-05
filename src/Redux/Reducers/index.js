import {
  TOGGLE_ITEM,
  GET_ITEMS,
  TOGGLE_FAV,
  SET_AMOUNT,
  CLEAR_CART,
  LOAD_DATA,
} from "../actions";

const initialState = {
  items: [
    {
      id: 1,
      name: "HP notebook 15",
      price: "200",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/hp1.jpg",
    },
    {
      id: 2,
      name: "HP ProBook 450",
      price: "400",
      desc: "Memory: 32 GB memory (1 x 8 GB) \n CPU: Intel® Core™ i7-1355U (up to 5.0 GHz with Intel",
      image: "./images/hp2.png",
    },
    {
      id: 3,
      name: "HP EitBook 650",
      price: "200",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/hp3.png",
    },
    {
      id: 4,
      name: "HP pivlion",
      price: "400",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/hp4.jpg",
    },
    {
      id: 5,
      name: "HP vertex",
      price: "170",
      desc: "Memory: 16 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/hp5.jpg",
    },
    {
      id: 6,
      name: "HP notebook 10",
      price: "160",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/hp6.jpg",
    },
    {
      id: 7,
      name: "Macintosh LC m1",
      price: "110",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/appel1.webp",
    },
    {
      id: 8,
      name: "Macintosh  m2",
      price: "1400",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/appel2.jpg",
    },
    {
      id: 9,
      name: "Apple Macnotich",
      price: "1600",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/appel3.jpeg",
    },
    {
      id: 9,
      name: "Apple High Siara",
      price: "1100",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/appel4.jpg",
    },
    {
      id: 10,
      name: "Apple micro",
      price: "2000",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/appel5.jpg",
    },
    {
      id: 11,
      name: "Apple micro",
      price: "670",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/appel5.jpg",
    },
    {
      id: 12,
      name: "Apple micro",
      price: "670",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/appel6.webp",
    },
    {
      id: 13,
      name: "ASUS 1p",
      price: "900",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/asus1.jpeg",
    },
    {
      id: 14,
      name: "ASUS 2p",
      price: "950",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/asus2.jpeg",
    },
    {
      id: 15,
      name: "ASUS 3p",
      price: "950",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/asus3.png",
    },
    {
      id: 16,
      name: "ASUS 4p",
      price: "950",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/asus6.png",
    },
    {
      id: 17,
      name: "ASUS 5p",
      price: "990",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/asus5.jpeg",
    },
    {
      id: 18,
      name: "ASUS 6p",
      price: "880",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/asus6.png",
    },
    {
      id: 19,
      name: "Dell insperation",
      price: "300",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/dell.jpg",
    },
    {
      id: 20,
      name: "Dell insperation 2",
      price: "320",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/dell2.jpg",
    },
    {
      id: 21,
      name: "Dell insperation 3",
      price: "320",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/dell3.jpeg",
    },
    {
      id: 22,
      name: "Dell insperation 4",
      price: "420",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/dell4.jpg",
    },
    {
      id: 23,
      name: "Dell insperation 5",
      price: "420",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/dell5.jpeg",
    },
    {
      id: 24,
      name: "Dell insperation 6",
      price: "420",
      desc: "Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB) \n CPU: Intel® Core™ i5-8250U",
      image: "./images/dell6.jpeg",
    },
  ],
  cart: [],
  favs: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state };
    case TOGGLE_ITEM: {
      if (state.cart.find((item) => item.id == action.id)) {
        const filtered = state.cart.filter((item) => item.id !== action.id);
        localStorage.setItem("cart", JSON.stringify(filtered));
        return { ...state, cart: [...filtered] };
      } else {
        var localCart =
          localStorage.getItem("cart") != null
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
        localCart = [
          ...localCart,
          {
            id: action.id,
            amount: action.amount,
          },
        ];

        localStorage.setItem("cart", JSON.stringify(localCart));
        return {
          ...state,
          cart: [...state.cart, { id: action.id, amount: action.amount }],
        };
      }
    }
    case SET_AMOUNT: {
      const item = state.cart.find((item) => item.id == action.id);
      item.amount = action.amount;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return state;
    }
    case TOGGLE_FAV: {
      if (state.favs.includes(action.id)) {
        state.favs = state.favs.filter((item) => item !== action.id);
        localStorage.setItem("favs", JSON.stringify([...state.favs]));
        return { ...state, favs: [...state.favs] };
      } else {
        localStorage.setItem(
          "favs",
          JSON.stringify([...state.favs, action.id])
        );
        return { ...state, favs: [...state.favs, action.id] };
      }
    }
    case CLEAR_CART: {
      localStorage.setItem("cart", JSON.stringify([]));
      return { ...state, cart: [] };
    }
    case LOAD_DATA: {
      const localCart =
        localStorage.getItem("cart") != null
          ? JSON.parse(localStorage.getItem("cart"))
          : [];
      const localFavs =
        localStorage.getItem("favs") != null
          ? JSON.parse(localStorage.getItem("favs"))
          : [];
      return { ...state, cart: [...localCart], favs: [...localFavs] };
    }
    default:
      return state;
  }
}

export default reducer;
