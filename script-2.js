const petsModule = (function () {
  const _data = [
    {
      image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
      name: "Sam",
      type: "Golden Retriever/St. Bernard Mix",
      sound: "bark",
      soundText: "Bark - type b",
    },
    {
      image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
      name: "Mellie",
      type: "Domestic Shorthair",
      sound: "meow",
      soundText: "Meow - type m",
    },
    {
      image:
        "https://i.pinimg.com/originals/ff/8e/a0/ff8ea0d38ae51d9adf78b93c2c7bde97.jpg",
      name: "Kurt",
      type: "Wolf",
      sound: "woof",
      soundText: "Woof - type w",
    },
    {
      image:
        "https://i2.cnnturk.com/i/cnnturk/75/1200x0/57ad7b20ae784906f8c4d72d.jpg",
      name: "Fil",
      type: "Elephant",
      sound: "trumpet",
      soundText: "Trumpet - type t",
    },
    {
      image:
        "https://i4.hurimg.com/i/hurriyet/75/750x422/5b3f6737537a000c409554d1.jpg",
      name: "Aslan",
      type: "Lion",
      sound: "roar",
      soundText: "Roar - type r",
    },
  ];
  const $tbodyEl = document.querySelector("tbody");
  //const $buttons = document.querySelectorAll("button");

  var _tmpTarget = null;

  const getButtons = function () {
    return document.querySelectorAll("button");
  };

  const getTrs = function () {
    return document.querySelectorAll("tr");
  };

  const createPetElement = function (pet) {
    return `<tr><td><img class='pet-image' src='${pet.image}'/></td><td>${pet.name}</td><td>${pet.type}</td><td>
      <button class='btn btn-outline-success' data-sound='${pet.sound}'>${pet.soundText}</button></td></tr>`;
  };

  const addToTable = function (content) {
    $tbodyEl.innerHTML += content;
  };

  const putPetsInHtml = function () {
    for (let i = 0; i < _data.length; i++) {
      addToTable(createPetElement(_data[i]));
    }
  };

  const bindEvents = function () {
    const buttons = getButtons();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        event.stopPropagation(); //Eklendi
        const soundId = this.dataset.sound; //getAttribute
        const soundElement = document.getElementById(soundId);
        if (soundElement) {
          soundElement.play();
        }
      });
    }
  };

  const keyEvents = function () {
    document.addEventListener("keydown", function (event) {
      if (event.key.toLocaleLowerCase() === 'r') {
        document.getElementById('roar').play();
      }
      if (event.key.toLocaleLowerCase() === 't') {
        document.getElementById('trumpet').play();
      }
      if (event.key.toLocaleLowerCase() === 'w') {
        document.getElementById('woof').play();
      }
      if (event.key.toLocaleLowerCase() === 'm') {
        document.getElementById('meow').play();
      }
      if (event.key.toLocaleLowerCase() === 'b') {
        document.getElementById('bark').play();
      }
            
    });
  };
  const bindBackgroundColor = function () {
    const trs = getTrs();
    for (let i = 0; i < trs.length; i++) {
      trs[i].addEventListener("click", function (event) {
        if (_tmpTarget != null) {
          _tmpTarget.classList.remove("click-bg-color");
        }
        _tmpTarget = trs[i];
        trs[i].classList.add("click-bg-color");
        const _tmpImg = _tmpTarget.querySelector("img").cloneNode();
        const $mainImg = document.querySelector(".main-image");
        _tmpImg.setAttribute("class", "main-image");

        const d = $mainImg.parentElement;
        d.innerHTML = "";
        d.appendChild(_tmpImg);
      });
    }
  };

  const init = function () {
    putPetsInHtml();
    bindEvents();
    keyEvents();
    bindBackgroundColor();
  };

  return {
    init: init,
  };
})();
petsModule.init();