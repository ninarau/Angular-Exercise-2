import { Ex2Page } from './app.po';

describe('ex2 App', function() {
  let page: Ex2Page;

  beforeEach(() => {
    page = new Ex2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
