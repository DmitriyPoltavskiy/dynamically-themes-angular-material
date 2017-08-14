import { CustomizeThemesPage } from './app.po';

describe('customize-themes App', function() {
  let page: CustomizeThemesPage;

  beforeEach(() => {
    page = new CustomizeThemesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
