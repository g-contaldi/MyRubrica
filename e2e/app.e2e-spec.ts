import { MyRubricaPage } from './app.po';

describe('my-rubrica App', () => {
  let page: MyRubricaPage;

  beforeEach(() => {
    page = new MyRubricaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
