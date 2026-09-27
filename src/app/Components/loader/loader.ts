import { Component, inject } from '@angular/core';
import { LoaderService } from '../../Services/loader-service';

@Component({
  imports: [],
  selector: 'app-loader',
  styleUrl: './loader.css',
  templateUrl: './loader.html',
})
export class Loader {
  protected readonly loaderService = inject(LoaderService);
}
