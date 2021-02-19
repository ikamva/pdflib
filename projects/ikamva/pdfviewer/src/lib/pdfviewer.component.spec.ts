import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PdfviewerComponent } from './pdfviewer.component';

describe('PdfviewerComponent', () => {
  let spectator: Spectator<PdfviewerComponent>;
  const createComponent = createComponentFactory(PdfviewerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
