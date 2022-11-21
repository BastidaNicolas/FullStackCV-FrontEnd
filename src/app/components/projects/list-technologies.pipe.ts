import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listTechnologies'
})
export class ListTechnologiesPipe implements PipeTransform {

  transform(techList: Array<any>): unknown {
    return this.listTech(techList);
  }

  listTech(techList:Array<any>){
    let finalString = '';
    techList.map((tech, index) => {
      if(index == techList.length-1){
        finalString += tech.name
      }else{
        finalString += tech.name+" - "
      }
       
    })
    return finalString;
  }

}
