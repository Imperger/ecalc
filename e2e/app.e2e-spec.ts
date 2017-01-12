import { EcalcPage } from './app.po';

describe('ecalc App', function() {
  let page: EcalcPage;

  beforeEach(() => {
    page = new EcalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
