import { Pipe, PipeTransform } from '@angular/core';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Pipe({
  name: 'searchList'
})
export class SearchListPipe implements PipeTransform {

  transform(value: any, searchValue: any): any {
    // console.log(value);
    // console.log(searchValue);
    if(!searchValue)
    {
      return value
    }
    
    let originalsearchvalue=searchValue.toString().toLowerCase();
     return value.filter((item:any) =>{
      console.log(item.ownername);
    
        return JSON.stringify(item).toLowerCase().includes(originalsearchvalue);
      
     })
    
    
 
  }

}
