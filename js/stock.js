// creando el stock de productos

// vacunos 1 
let stockProductosVacunos1 = [
    {id:1, nombre: 'asado', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/asado.jpg', alt: 'asado'},
    {id:2, nombre: 'bife ancho', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/bife-ancho.jpg', alt: 'bife ancho'},
    {id:3, nombre: 'bife angosto', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/bife-angosto.jpg', alt: 'bife angosto'},
    {id:4, nombre: 'bife de chorizo', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/bife-de-chorizo.jpg', alt: 'bife de chorizo'},
    {id:5, nombre: 'bola de lomo', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/bola-de-lomo.jpg', alt: 'bola de lomo'},
    {id:6, nombre: 'colita de cuadril', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/colita-de-cuadril.jpg', alt: 'colita de cuadril'},
    {id:7, nombre: 'cuadrada', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/cuadrada.jpg', alt: 'cuadrada'},
    {id:8, nombre: 'cuadril', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/cuadril.jpg', alt: 'cuadril'},
    {id:9, nombre: 'entraña', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/entraña.jpg', alt: 'entraña'},
    {id:10, nombre: 'hamburguesa de carne', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/hamburguesas-de-carne.jpg', alt: 'hamburguesa de carne'}
]

// vacunos 2
let stockProductosVacunos2 = [
    {id:11, nombre: 'lomo', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/lomojpg.jpg', alt: 'lomo'},
    {id:12, nombre: 'matambre', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/matambre.jpg', alt: 'matambre'},
    {id:13, nombre: 'milanesa de carne', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/milanesas-carne.jpg', alt: 'milanesa de carne'},
    {id:14, nombre: 'nalga', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/nalga.jpg', alt: 'nalga'},
    {id:15, nombre: 'ojo de bife', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/ojo-de-bife.jpg', alt: 'ojo de bife'},
    {id:16, nombre: 'osobuco', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/osobuco.jpg', alt: 'osobuco'},
    {id:17, nombre: 'paleta', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/paleta.jpg', alt: 'paleta'},
    {id:18, nombre: 'peceto', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/peceto.jpg', alt: 'peceto'},
    {id:19, nombre: 'picada', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/picada.jpg', alt: 'picada'},
    {id:20, nombre: 'roast beef', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/roast-beef.jpg', alt: 'roast beef'},
    {id:21, nombre: 'tapa de asado', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/tapa-de-asado.jpg', alt: 'tapa de asado'},
    {id:22, nombre: 'tapa de nalga', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/tapa-de-nalga.jpg', alt: 'tapa de nalga'},
    {id:23, nombre: 'vacio', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_vacuno/vacio.jpg', alt: 'vacio'}
]

// aves
let stockProductosAves = [
    {id:24, nombre: 'milanesa de pollo', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_aves/milanesas-pollo.jpg', alt: 'milanesa de pollo'},
    {id:25, nombre: 'pata y muslo', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_aves/pata-muslo.jpg', alt: 'pata muslo'},
    {id:26, nombre: 'pollo entero', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_aves/pollo-entero.jpg', alt: 'pollo entero'},
    {id:27, nombre: 'supremas', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_aves/supremas.jpg', alt: 'supremas'}
]

// cerdo
let stockProductosCerdo = [
    {id:28, nombre: 'bondiola', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_cerdo/bondiola.jpg', alt: 'bondiola'},
    {id:29, nombre: 'carre deshuesado', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_cerdo/carre-deshuesado.jpg', alt: 'carre deshuesado'},
    {id:30, nombre: 'chuleta de pernil', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_cerdo/chuleta-pernil.jpg', alt: 'chuleta de pernil'},
    {id:32, nombre: 'chuleta', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_cerdo/chuleta.jpg', alt: 'chuleta'},
    {id:33, nombre: 'costillitas de cerdo', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_cerdo/costillita-cerdo.jpg', alt: 'costillitas de cerdo'},
    {id:34, nombre: 'matambrito', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_cerdo/matambrito.jpg', alt: 'matambrito'},
    {id:35, nombre: 'milanesa de cerdo', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_cerdo/milanesas-de-cerdo.jpg', alt: 'milanesa de cerdo'},
    {id:36, nombre: 'pechito', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_cerdo/pechito.jpg', alt: 'pechito'}
]

// embutidos
let stockProductosEmbutidos = [
    {id:37, nombre: 'chinchulin', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_achuras_embutidos/chinchulin.jpg', alt: 'chinchulin'},
    {id:38, nombre: 'chorizo', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_achuras_embutidos/chorizo.jpg', alt: 'chorizo'},
    {id:39, nombre: 'higado', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_achuras_embutidos/higado.jpg', alt: 'higado'},
    {id:40, nombre: 'lengua', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_achuras_embutidos/lengua.jpg', alt: 'lengua'},
    {id:41, nombre: 'molleja', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_achuras_embutidos/molleja.jpg', alt: 'molleja'},
    {id:42, nombre: 'morcilla rosca', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_achuras_embutidos/morcilla-rosca.jpg', alt: 'morcilla rosca'},
    {id:43, nombre: 'morcilla', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_achuras_embutidos/morcilla.jpg', alt: 'morcilla'},
    {id:44, nombre: 'riñon', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_achuras_embutidos/riñon.jpg', alt: 'riñon'},
    {id:45, nombre: 'salchicha parrillera', precio: 1049.90, aviso: 'minimo de compra 0,5 kg', img: '../img/img_achuras_embutidos/salchicha-parrillera.jpg', alt: 'salchicha parrillera'}
]