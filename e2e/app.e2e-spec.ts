import { BootstrapingNgxAdminLtePage } from './app.po';

describe('bootstraping-ngx-admin-lte App', function() {
  let page: BootstrapingNgxAdminLtePage;

  beforeEach(() => {
    page = new BootstrapingNgxAdminLtePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
