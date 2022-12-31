import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listTechnologies'
})
export class ListTechnologiesPipe implements PipeTransform {

  transform(techList: string): unknown {
    return this.listTech(techList);
  }

  listTech(techList:string){
    let technologies = JSON.parse(techList);
    let finalString = '';
    technologies.map((tech:string, index:number) => {
      if(index == technologies.length-1){
        finalString += tech
      }else{
        finalString += tech+" - "
      }
       
    })
    return finalString;
  }

}
