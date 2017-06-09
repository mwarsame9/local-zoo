import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';


@Pipe({
  name: "maturity",
  pure: false
})


export class MaturityPipe implements PipeTransform {


  transform(input: Animal[], maturityLevel) {
    var output: Animal[] = [];
    if(maturityLevel === "mature") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(maturityLevel === "young") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
