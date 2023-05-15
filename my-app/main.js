const result = document.getElementById('result');
const btn = document.getElementById('btn');
const fortune =['大','中','吉','小','凶','大凶'];

function resultshow(){
result.textContent = fortune [Math.floor(Math.random() * fortune.length)];
};
btn.addEventListener('click',() =>{
resultshow();
});

