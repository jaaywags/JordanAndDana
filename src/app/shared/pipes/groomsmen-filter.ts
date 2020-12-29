import { Pipe, PipeTransform } from '@angular/core';
import { WeddingPartyMember } from '../models/wedding-party-member';

@Pipe({
    name: 'groomsmenFilter',
    pure: false
})
export class GroomsmenPipe implements PipeTransform {
    transform(items: WeddingPartyMember[]): any {
        if (!items) {
            return items;
        }

        return items.filter(item => !item.bridesmaid);
    }
}