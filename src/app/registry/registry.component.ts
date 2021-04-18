import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.sass']
})
export class RegistryComponent implements OnInit {
  registries = [{
    name: 'MyRegistry.com',
    link: 'https://www.myregistry.com/wedding-registry/dana-jane-brangaitis-and-jordan-wagner-katy-tx/2746659/giftlist'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
