import { HospitalPage } from './app.po';

describe('hospital App', function() {
  let page: HospitalPage;

  beforeEach(() => {
    page = new HospitalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
