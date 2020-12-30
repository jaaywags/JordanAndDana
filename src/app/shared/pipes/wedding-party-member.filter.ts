import { Pipe, PipeTransform } from '@angular/core';
import { WeddingPartyMember } from '../models/wedding-party-member';

@Pipe({
    name: 'weddingPartyMemberFilter',
    pure: false
})
export class WeddingPartyMemberPipe implements PipeTransform {
    transform(items: WeddingPartyMember[], target: number[]): any {
        if (!items) {
            return items;
        }

        return items.filter(item => target.indexOf(item.memberType) >= 0);
    }
}