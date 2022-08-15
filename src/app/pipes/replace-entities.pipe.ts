import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceEntities'
})
export class ReplaceEntitiesPipe implements PipeTransform {

  transform(str: string | undefined): string {
    return !str ? "" : str
      .replaceAll("&lt;","<")
      .replaceAll("&gt;",">");
  }

}
