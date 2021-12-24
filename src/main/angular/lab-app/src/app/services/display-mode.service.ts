import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayModeService {
  mode?: string;
  renderer: Renderer2;

  constructor(private rendererFactory2: RendererFactory2) {
    this.updateMode();
    this.renderer = this.rendererFactory2.createRenderer(null, null);
    this.renderer.listen('window', 'resize', () => {
      console.log('resize detected');
      this.updateMode();
    });
  }

  updateMode() {
    let width = window.innerWidth;
    if (width >= 1041) {
      this.mode = 'desktop';
    } else if (width > 710) {
      this.mode = 'tablet';
    } else {
      this.mode = 'mobile';
    }
  }
}
