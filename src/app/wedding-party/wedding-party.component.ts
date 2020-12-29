import { Component, OnInit } from '@angular/core';
import { WeddingPartyMember } from '../shared/models/wedding-party-member';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.sass']
})
export class WeddingPartyComponent implements OnInit {
  weddingParty: WeddingPartyMember[] = [{
    name: "Olvia Brangaitis - Maid of Honor & Sister",
    picture: "olivia01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Jenna Hess",
    picture: "jenna01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "April Panzenbeck",
    picture: "april01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Caitlin Grace",
    picture: "caitlin01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Elizabeth Marie",
    picture: "elizabeth01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Tiffany Spano",
    picture: "tiffany01.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Danielle Kertyzack",
    picture: "danielle.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    bridesmaid: true
  } as WeddingPartyMember, {
    name: "Vaibhav Arya - Best Man",
    picture: "vaibhav01.jpg",
    description: "A man of great intelligence and wisdom. He can hold an intelligiant and fun conversation with anyone for hours.",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Stephen LeMont - Brother",
    picture: "stephen01.jpg",
    description: "Has walked a road no man wants to walked. Made the best of what he had and has made it a long way. With a bright future ahead, he is destined to accomplish a lot.",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Luke Sanders - Ordained Minister",
    picture: "luke01.jpg",
    description: "",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Nick Hagen",
    picture: "nick01.jpg",
    description: "",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Dustin Collins",
    picture: "dustin01.jpg",
    description: "Just about the nicest person you will ever meet. Always looking to do the right thing and help anyone he can.",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Matt Handzel",
    picture: "matt01.jpg",
    description: "Full of complexity and straight answers. He is driven to find truth in chaos and will go to great lengths to find it. Under all that is a kind person and a great friend.",
    bridesmaid: false
  } as WeddingPartyMember, {
    name: "Zach Handzel",
    picture: "zach01.jpg",
    description: "I thought I was goofy, then I met this guy. A warm heart and a big smile. He will always brighten my day.",
    bridesmaid: false
  }]

  constructor() { }

  ngOnInit(): void {
  }

}