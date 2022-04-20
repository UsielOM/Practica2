import { Component, OnInit } from '@angular/core';
import { Cell, ITable, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';


 var name1 :string
 var name2:string
 var hola:string

@Component({
  selector: 'app-pdfmake',
  templateUrl: './pdfmake.component.html',
  styleUrls: ['./pdfmake.component.css']
})
export class PdfmakeComponent implements OnInit {
 
 generarpdf()
 {

const pdf = new PdfMakeWrapper();
pdf.add("Hello")

pdf.add(this.gnerarTablas())
pdf.create().open()

 }

 gnerarTablas(): ITable{

  return new Table([
     [ 'TITULO  1', 'TITULO 2'],
     [ '01', 'USIEL']
 ]).end;
  }

  fetchPokemon  ()  {
   
    var pokeInput = "pikachu";
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;  
    fetch(url).then((res) => {
    
            return res.json();      
    
    }).then((data) => {
    
        console.log(data);
         name1 = data.species.name;   
         console.log(name1)
        console.log(name2.substring)
   
  
      
   
        const pkname = document.getElementById("#hola") as HTMLAnchorElement;
        pkname.innerHTML = `${name1}`;
  
  
    })
    
  
  }
 

 





  constructor() { }

  ngOnInit(): void {
  }

}
