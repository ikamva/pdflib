import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { PdfviewerService } from './pdfviewer.service';

describe('PdfviewerService', () => {
  let spectator: SpectatorService<PdfviewerService>;
  const createService = createServiceFactory(PdfviewerService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
