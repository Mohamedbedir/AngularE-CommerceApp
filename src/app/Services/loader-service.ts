import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoaderService {
	readonly isLoading = signal(false);
	private activeRequests = 0;

	show(): void {
		this.activeRequests += 1;
		this.isLoading.set(true);
	}

	hide(): void {
		this.activeRequests = Math.max(0, this.activeRequests - 1);
		this.isLoading.set(this.activeRequests > 0);
	}
}
