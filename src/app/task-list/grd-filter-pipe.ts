import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grdFilter'
})
export class GrdFilterPipe implements PipeTransform {
 
  transform(items: any[], value: string, label:string): any[] {
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter((e) =>{
    
   if(e[label]!=null){

    return e[label].toLowerCase().indexOf(value) > -1;     
    }
    
    })

     
    
    
  }
  }