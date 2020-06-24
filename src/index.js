import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class EditorText extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      texto:'',
    }
  }

  pegarTexto = (event) =>{
    let meutexto = event.target.value
    this.setState({texto:meutexto})
  }

  converteMaiuscula = () =>{
    // método que converte o texto digitado para maiusculo
    let meutexto = this.state.texto
    let txt2 = meutexto.toUpperCase()
    this.setState({texto: txt2})
  }

  converteMinuscula = () =>{
    let meutexto = this.state.texto
    let txt2 = meutexto.toLowerCase()
    this.setState({texto: txt2})
  }

  converteCapital = () =>{
    let meutexto = this.state.texto
    let txt2 = meutexto.toLowerCase().split('')

    for(var i=0; i<txt2.length;i++){
      if(txt2[i] === txt2[0]||txt2[i-1] === ','||txt2[i-1] === '.'||txt2[i-1] === ' ')
      txt2[i] = txt2[i].charAt(0).toUpperCase() + txt2[i].slice(1)
    }
    this.setState({texto: txt2.join('')})
  }

  sentenceCase = () =>{
      let meutexto = this.state.texto
      let txt2 = meutexto.toLowerCase().split('')

      for(var i=0; i<txt2.length;i++){
        if((txt2[i] === txt2[0]||txt2[i-1] === '.')
        ||(txt2[i-2] === '.' && txt2[i-1] === ' '))
        txt2[i] = txt2[i].charAt(0).toUpperCase() + txt2[i].slice(1)
      }
      this.setState({texto: txt2.join('')})
    }
  

  clearText = () =>{
      this.setState({texto: ' '})
  }

  wordCounter = () =>{
    let txt = this.state.texto
    let count = txt.split(' ').length
    return count
  }
  
  letterCounter = () =>{
    let txt = this.state.texto
    let count = txt.replace(/\s/g, '') 
    let newcount = count.replaceAll('\.','')
    let ncount = newcount.replaceAll('\,','')
    return ncount.length
  }
    
  render(){
    return(
      <div>
        <h1>Troca Texto</h1>
        <p id="p1">Digitou um texto completo de forma errada?
          O Troca Texto permite você editar o seu texto todo!</p>
        <p id="p2">Insira o seu texto no box abaixo e escolha o formato</p>
        <textarea onChange={this.pegarTexto} value={this.state.texto} 
        placeholder="Digite o seu texto aqui" id="textarea_inicial"></textarea>
        <p>Quantidade de palavras: {this.wordCounter()}
           | Letras: {this.letterCounter()}</p>
        <div id="botoes"> 
          <button type="button" onClick={this.converteMaiuscula}>Maiúsculo</button>
          <button type="button" onClick={this.converteMinuscula}>Minúsculo</button>
          <button type="button" onClick={this.converteCapital}>Capital Case</button>
          <button type="button" onClick={this.sentenceCase}>Formato Frase</button>
          <button type="button" onClick={this.clearText}>Limpar</button>
        </div>
      <div id="descricao">
        <div class="desc1">Maiúsculo
          <p  class="ptext">Maiúsculo. Deixa todo o texto com as letras maiúsculas.</p>
        </div>
        <div class="desc1">Minúsculo
          <p  class="ptext">Minúsculo. Deixa todo o texto com as letras minúsculas.</p>
        </div>
        <div class="desc1">Capital Case
          <p  class="ptext">Capital Case. Deixa a primeira letra de cada palavra
            em maiúsculo</p>
        </div>
        <div class="desc1">Formato Frase
          <p class="ptext">Formato Frase. Deixa a primeira letra de 
            cada sentença em maiúsculo
          </p>
        </div>
      </div>
      
      <div id="div2"></div>

      </div>
    )
  }
}
ReactDOM.render(<EditorText />,document.getElementById('div1'))


serviceWorker.unregister();
