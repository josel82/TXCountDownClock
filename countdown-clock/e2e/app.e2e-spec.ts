import { CountdownClockPage } from './app.po';

describe('countdown-clock App', () => {
  let page: CountdownClockPage;

  beforeEach(() => {
    page = new CountdownClockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
