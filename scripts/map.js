let myMap;

const init = () => {                                            // центр карты, настройки зума, отключить все кнопки
    myMap = new ymaps.Map('map', {
        center: [55.160028, 61.402590],
        zoom: 13,
        controls: []
    });

    const coords = [                                              // координаты собственных точек
        [55.152320, 61.388858],
        [55.169214, 61.387146],
        [55.163565, 61.414419],
        [55.176060, 61.397218]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {      // настройки иконок коллекции
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './images/symbol/marker.svg',
        iconImageSize: [58, 74],
        iconImageOffset: [0, 0]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));             // перебрали и добавили координаты для своих точек
    });

    myMap.geoObjects.add(myCollection);                           // добавили свою коллекцию

    myMap.behaviors.disable('scrollZoom');                        // отключен зум колёсиком
}

ymaps.ready(init);