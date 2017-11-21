import { HoplaModalPage } from './app.po';

describe('hopla-modal App', () => {
  let page: HoplaModalPage;

  beforeEach(() => {
    page = new HoplaModalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
