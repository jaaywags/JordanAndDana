import { Pipe, PipeTransform } from '@angular/core';
import { WeddingPartyMember } from '../models/wedding-party-member';

@Pipe({
    name: 'bridesmaidsFilter',
    pure: false
})
export class BridesmaidsPipe implements PipeTransform {
    transform(items: WeddingPartyMember[]): any {
        if (!items) {
            return items;
        }

        return items.filter(item => !!item.bridesmaid);
    }
}