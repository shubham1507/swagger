import { Component, OnInit } from '@angular/core';

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-internal-user',
  templateUrl: './internal-user.component.html',
  styleUrls: ['./internal-user.component.css']
})
export class InternalUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'BaseLayout',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      plugins: [
			  SwaggerUIBundle.plugins.DownloadUrl
			],
      url: window.location.protocol + '//' + window.location.host + '/assets/API.yaml',
      docExpansion: 'none',
      operationsSorter: 'alpha'
    });
  }

}
