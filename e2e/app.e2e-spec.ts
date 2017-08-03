import { CollectibleClericsPage } from './app.po';

describe('collectible-clerics App', () => {
  let page: CollectibleClericsPage;

  beforeEach(() => {
    page = new CollectibleClericsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
