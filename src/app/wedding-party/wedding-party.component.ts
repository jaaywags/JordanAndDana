import { Component, OnInit } from '@angular/core';
import { WeddingPartyMember } from '../shared/models/wedding-party-member';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.sass']
})
export class WeddingPartyComponent implements OnInit {
  weddingParty: WeddingPartyMember[] = [{
    name: "Olvia - Maid of Honor",
    picture: "olivia01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Jenna - Bridesmaid",
    picture: "jenna01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "April - Bridesmaid",
    picture: "april01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Caitlin - Bridesmaid",
    picture: "caitlin01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Elizabeth - Bridesmaid",
    picture: "elizabeth01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Tiffany - Bridesmaid",
    picture: "tiffany01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Danielle - Bridesmaid",
    picture: "danielle.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Vaibhav - Best Man",
    picture: "vaibhav01.jpg",
    description: "A man of great intelligence and wisdom. He can hold an amazing and fun conversation with anyone for hours.",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Luke - Ordained Minister",
    picture: "luke01.jpg",
    description: "Luke is the light of the party. He makes sure everyone is having a good time, no one is left out, and that everyone is safe. He's got your back.",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Stephen - Groomsmen",
    picture: "stephen01.jpg",
    description: "Has walked a road no man wants to walked. Made the best of what he had and has made it a long way. With a bright future ahead, he is destined to accomplish greatness.",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Nick - Groomsmen",
    picture: "nick01.jpg",
    description: "Nick brings the games. He will make sure conversations are flowing and people are having fun. He always has a deck of cards and some change in his pockets.",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Dustin - Groomsmen",
    picture: "dustin01.jpg",
    description: "Just about the nicest person you will ever meet. Always looking to do the right thing and help anyone he can.",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Matt - Groomsmen",
    picture: "matt01.jpg",
    description: "Full of complexity and straight answers. He is driven to find truth in chaos and will go to great lengths to find it. Under all that is a kind person and a great friend.",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Zach - Groomsmen",
    picture: "zach01.jpg",
    description: "I thought I was goofy, then I met this guy. A warm heart and a big smile. He will always brighten my day.",
    bridesmaid: false
  }]

  constructor() { }

  ngOnInit(): void {
  }

}