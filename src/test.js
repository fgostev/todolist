import queretaro from './queretaro.jpeg'

function test (){
    const content = document.getElementById('content');
    const img = document.createElement('img');
    img.src = queretaro;
    content.appendChild(img);
}

export default test;