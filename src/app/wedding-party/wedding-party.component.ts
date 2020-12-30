import { Component, OnInit } from '@angular/core';
import { WeddingPartyMember, WeddingPartyMemberTypes } from '../shared/models/wedding-party-member';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.sass']
})
export class WeddingPartyComponent implements OnInit {
  weddingPartyMemberTypes = WeddingPartyMemberTypes;
  weddingParty: WeddingPartyMember[] = [{
    name: "Olivia",
    picture: "olivia01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    memberType: WeddingPartyMemberTypes.maidOfHonor,
  } as WeddingPartyMember, {
    name: "Jenna",
    picture: "jenna01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    memberType: WeddingPartyMemberTypes.bridesmaid,
  } as WeddingPartyMember, {
    name: "April",
    picture: "april01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    memberType: WeddingPartyMemberTypes.bridesmaid,
  } as WeddingPartyMember, {
    name: "Caitlin",
    picture: "caitlin01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    memberType: WeddingPartyMemberTypes.bridesmaid,
  } as WeddingPartyMember, {
    name: "Elizabeth",
    picture: "elizabeth01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    memberType: WeddingPartyMemberTypes.bridesmaid,
  } as WeddingPartyMember, {
    name: "Tiffany",
    picture: "tiffany01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    memberType: WeddingPartyMemberTypes.bridesmaid,
  } as WeddingPartyMember, {
    name: "Danielle",
    picture: "imageNotFound_750x400.png",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    memberType: WeddingPartyMemberTypes.bridesmaid,
  } as WeddingPartyMember, {
    name: "Vaibhav",
    picture: "vaibhav01.jpg",
    description: "A man of great intelligence and wisdom. He can hold an amazing and fun conversation with anyone for hours.",
    memberType: WeddingPartyMemberTypes.bestMan,
  } as WeddingPartyMember, {
    name: "Luke",
    picture: "imageNotFound_750x400.png",
    description: "Luke is the light of the party. He makes sure everyone is having a good time, no one is left out, and that everyone is safe. He's got your back.",
    memberType: WeddingPartyMemberTypes.ordainedMinister,
  } as WeddingPartyMember, {
    name: "Stephen",
    picture: "stephen01.jpg",
    description: "Has walked a road no man wants to walked. Made the best of what he had and has made it a long way. With a bright future ahead, he is destined to accomplish greatness.",
    memberType: WeddingPartyMemberTypes.groomsman,
  } as WeddingPartyMember, {
    name: "Nick",
    picture: "nick01.jpg",
    description: "Nick brings the games. He will make sure conversations are flowing and people are having fun. He always has a deck of cards and some change in his pockets.",
    memberType: WeddingPartyMemberTypes.groomsman,
  } as WeddingPartyMember, {
    name: "Dustin",
    picture: "imageNotFound_750x400.png",
    description: "Just about the nicest person you will ever meet. Always looking to do the right thing and help anyone he can.",
    memberType: WeddingPartyMemberTypes.groomsman,
  } as WeddingPartyMember, {
    name: "Matt",
    picture: "matt01.jpg",
    description: "Full of complexity and straight answers. He is driven to find truth in chaos and will go to great lengths to find it. Under all that is a kind person and a great friend.",
    memberType: WeddingPartyMemberTypes.groomsman,
  } as WeddingPartyMember, {
    name: "Zach",
    picture: "imageNotFound_750x400.png",
    description: "I thought I was goofy, then I met this guy. A warm heart and a big smile. He will always brighten my day.",
    memberType: WeddingPartyMemberTypes.groomsman,
  } as WeddingPartyMember, {
    name: "Aaaa",
    picture: "imageNotFound_750x400.png",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    memberType: WeddingPartyMemberTypes.flowerGirl,
  } as WeddingPartyMember, {
    name: "Bbbb",
    picture: "imageNotFound_750x400.png",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    memberType: WeddingPartyMemberTypes.ringBearer,
  } as WeddingPartyMember]

  constructor() { }

  ngOnInit(): void {
  }

}