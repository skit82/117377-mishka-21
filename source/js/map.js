function init() {
    var e = new ymaps.Map("map",{
        center: [59.93863106, 30.3230545],
        zoom: 16
    },{
        searchControlProvider: "yandex#search"
    })
      , a = new ymaps.Placemark([59.93863106, 30.3230545],{
        hintContent: "Мишка"
    },{
        iconLayout: "default#image",
        iconImageHref: "img/icon-map-pin.svg",
        iconImageSize: [67, 100],
        iconImageOffset: [-40, -100]
    });
    e.geoObjects.add(a)
}
ymaps.ready(init)
