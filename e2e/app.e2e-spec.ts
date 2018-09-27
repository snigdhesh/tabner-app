import { TabnerAppPage } from './app.po';

describe('tabner-app App', () => {
  let page: TabnerAppPage;

  beforeEach(() => {
    page = new TabnerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
