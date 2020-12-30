export interface WeddingPartyMember {
    name: string;
    picture: string;
    description: string;
    memberType: number
}

export enum WeddingPartyMemberTypes {
    bridesmaid = 1,
    groomsman = 2,
    ordainedMinister = 3,
    maidOfHonor = 4,
    bestMan = 5,
    flowerGirl = 6,
    ringBearer = 7,
}