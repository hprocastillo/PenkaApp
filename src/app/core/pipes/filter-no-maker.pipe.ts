import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterNoUser'
})
export class FilterNoMakerPipe implements PipeTransform {

    transform(items: Array<any>, makerId: string): any {
        return items.filter(item => item.makerId !== makerId);
    }
}
