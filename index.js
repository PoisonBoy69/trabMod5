let armazenar = [];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt('Insira a propriedade css: ');
rl.prompt()
rl.on('line', (age) => {
  if(age == 'sair'){
    console.log(armazenar.sort().join(''))
    rl.close;
  }else{
    armazenar.push(`${age}\n`); 
    rl.setPrompt('Insira a propriedade css: ');
    rl.prompt()
  }
});