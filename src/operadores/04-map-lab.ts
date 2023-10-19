import { fromEvent, map } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML =
    `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex erat, hendrerit at malesuada ac, bibendum sit amet enim. Donec egestas, urna id rutrum pellentesque, nisi enim dictum tortor, non fermentum sapien odio ut orci. Praesent varius dignissim dolor eu tristique. Integer elementum mattis lorem quis pulvinar. In ut ante sit amet quam feugiat luctus. Ut et imperdiet libero, posuere elementum libero. Duis vel ex ut dolor pretium varius et vel massa. Fusce faucibus dolor a sem elementum mollis. Integer sit amet sagittis turpis. Vivamus iaculis neque et facilisis lacinia.
    <br><br>
    Proin tempor nulla tempor, scelerisque odio sit amet, tempus eros. Nulla vitae pretium orci, vulputate ornare nibh. Nulla ac venenatis elit. Mauris dolor lacus, condimentum congue pulvinar vel, consectetur et felis. Duis congue urna a sapien consectetur, id pellentesque neque ultricies. Curabitur volutpat commodo leo. Aenean ut porta nunc, in interdum neque. Donec at felis ut nulla tempus laoreet vel faucibus orci. Vivamus sapien nunc, venenatis quis consectetur commodo, feugiat sed nulla. Fusce in arcu at magna tempor gravida.
    <br><br>
    Suspendisse a ligula mi. Morbi elit ipsum, laoreet sit amet erat nec, congue consectetur magna. Aenean vel mattis nisi, et fermentum nisi. Vestibulum at nibh arcu. Ut blandit porttitor nulla, eget posuere leo interdum a. Pellentesque euismod feugiat sem in maximus. Vestibulum ultricies finibus ipsum, sed pulvinar ante ultricies eget. Nunc elit lacus, ornare a mauris vel, tempor convallis neque. Vivamus interdum elit neque, et efficitur augue porttitor vel. Vestibulum luctus, justo quis interdum imperdiet, mauris urna fermentum justo, eget tristique turpis tortor at ante. Donec volutpat nunc ligula, sed egestas nulla suscipit in.
    <br><br>
    Maecenas tristique turpis ac varius scelerisque. Integer vel convallis dui, ac rhoncus nisi. In mollis purus et turpis faucibus vulputate. Nulla ultrices laoreet tempus. Mauris a enim est. Ut dignissim neque at mi ultrices finibus. Suspendisse molestie magna ut sollicitudin laoreet. Sed suscipit nec metus eu venenatis.
    <br><br>
    Quisque et justo sit amet nunc varius consequat ut ac metus. Donec sed venenatis nibh. Nunc faucibus lectus quis lacus suscipit, quis lobortis nibh efficitur. Fusce ullamcorper imperdiet elementum. Maecenas consequat feugiat lorem in imperdiet. Praesent facilisis, est et accumsan euismod, leo ex egestas ipsum, eu viverra sapien arcu eget urna. Ut non enim in ante commodo aliquet at id orci.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);


const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}


const scroll$ = fromEvent(document,'scroll');
// scroll$.subscribe(console.log);
const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event))
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})





