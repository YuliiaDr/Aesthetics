// ---------------------------- Catalogue List

let catalogue = [
  {
    "image": "./images/catalogue_fluid_dry.png",
    "imageAlt": "Fluid for dry skin",
    "itemName": "Флюїд для обличчя для сухої шкіри",
    "price": "630",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_antiox_cream.png",
    "imageAlt": "Antioxidant face cream",
    "itemName": "Антиоксидантний крем для обличчя",
    "price": "850",
    "availability": "В наявності",
    "description": "./product/2.html"
  },
  {
    "image": "./images/catalogue_gel_problem.png",
    "imageAlt": "Washing gel for problematic skin",
    "itemName": "Гель для вмивання для проблемної шкіри",
    "price": "590",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_hydr_serum_norm.png",
    "imageAlt": "Hydrating serum for normal skin",
    "itemName": "Зволожуюча сироватка для нормальної шкіри",
    "price": "480",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_hydr_cream_dry.png",
    "imageAlt": "Hydrating cream for dry skin",
    "itemName": "Зволожуючий крем для сухої шкіри",
    "price": "830",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_tonic_norm.png",
    "imageAlt": "Face tonic",
    "itemName": "Тонік для обличчя для нормальної шкіри",
    "price": "450",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_foam_clean.png",
    "imageAlt": "Face-cleaning foam",
    "itemName": "Пінка для очищенняшкіри обличчя",
    "price": "560",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_set_day_night.png",
    "imageAlt": "Set of night and day creams",
    "itemName": "Набір Денний та нічний крем",
    "price": "1230",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_mattif_day_cream_oil.png",
    "imageAlt": "Mattifying day cream",
    "itemName": "Матуючий денний крем для жирної шкіри",
    "price": "680",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_night_antiage_cream_dry.png",
    "imageAlt": "Night antiage cream for dry skin",
    "itemName": "Нічний антивіковий крем для сухої шкіри",
    "price": "860",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_makeup_remover_gel.png",
    "imageAlt": "Gel for makeup removing",
    "itemName": "Гель для зняття макіяжу",
    "price": "730",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_antiage_serum_night.png",
    "imageAlt": "Antiage serum",
    "itemName": "Антивікова сироватка для зони навколо очей",
    "price": "900",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_lotion_norm_comb.png",
    "imageAlt": "Lotion for normal and combinated skin",
    "itemName": "Лосьон для нормальної та комбінованої шкіри",
    "price": "1050",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_scrub_sens.png",
    "imageAlt": "Scrub for sensitive skin",
    "itemName": "Скраб для чутливої шкіри",
    "price": "890",
    "availability": "В наявності",
    "description": "#"
  },
  {
    "image": "./images/catalogue_gel_deep_clean.png",
    "imageAlt": "Gel for deep cleaning",
    "itemName": "Гель для глубокого очищення шкіри обличчя",
    "price": "890",
    "availability": "В наявності",
    "description": "#"
  }
];

// ---------------------------- Create Catalogue Cards

function createItemsCatalogue(event) {
  event.preventDefault();
  let ul = document.querySelector('#catalogue-cards');
  catalogue.forEach (function (item, index){
    if (index >=0 && index < catalogue.length){
      let li = document.createElement('li');
      ul.append(li);

      let divImgHolder = document.createElement('div');
      li.prepend(divImgHolder);
      divImgHolder.classList.add('img-holder');

      let img = document.createElement('img');
      divImgHolder.appendChild(img);
      img.setAttribute('src', `${item.image}`);
      img.setAttribute('alt', `${item.imageAlt}`);
      img.classList.add('item-pic');
      
      let btn = document.createElement('button');
      btn.setAttribute('type','button');
      btn.setAttribute('name','to-favorite');
      btn.classList.add('item-icon');
      img.insertAdjacentElement('afterend', btn);

      let h4 = document.createElement('h4');
      h4.innerHTML = `${item.itemName}`;
      divImgHolder.insertAdjacentElement('afterend', h4);

      let p = document.createElement('p');
      p.innerHTML = `${item.price}` + ' грн.';
      h4.insertAdjacentElement('afterend', p);

      let divItemExtra = document.createElement('div');
      divItemExtra.classList.add('item-extra');
      li.append(divItemExtra);

      let a = document.createElement('a');
      divItemExtra.appendChild(a);
      a.setAttribute('href', `${item.description}`);
      a.innerHTML = 'Детальніше';

      let divToBasket = document.createElement('div');
      a.insertAdjacentElement('afterend', divToBasket);
      divToBasket.classList.add('tobasket-btn-container');

      let btnToBasket = document.createElement('button');
      divToBasket.prepend(btnToBasket);
      btnToBasket.setAttribute('type','button');
      btnToBasket.setAttribute('name','button');
      btnToBasket.innerHTML = 'В кошик';
    }
  }
  )
}

