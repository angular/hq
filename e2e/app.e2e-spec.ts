import { NgHqPage } from './app.po';

describe('ng-hq App', () => {
  let page: NgHqPage;

  beforeEach(() => {
    page = new NgHqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
