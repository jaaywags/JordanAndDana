import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.sass']
})
export class RegistryComponent implements OnInit {
  registries = [{
    name: 'Amazon',
    link: 'https://www.amazon.com/wedding/dana-brangaitis-jordan-wagner--june-2021/registry/251174NWQ5GQJ'
  }, {
    name: 'Create & Barrel',
    link: 'https://www.crateandbarrel.com/gift-registry/jordan-wagner-and-dana-brangaitis/r6204559'
  }, {
    name: 'Williams Sonoma',
    link: 'https://www.williams-sonoma.com/registry/tj55xznmbn/registry-list.html'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
