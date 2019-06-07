describe('Detection - dataset', () => {
    it('login', () => {
      browser.url('http://evaluation-staging.visenze.com')
      browser.getTitle().should.be.equal('Login - Evaluation System');
      $('#login-page > div > div > div:nth-child(3) > a').click()
      browser.waitForExist("#identifierId",50000);
      $('#identifierId').setValue('siyu.yan@visenze.com');
      $('span.RveJvd.snByac').click()
      browser.waitForVisible("#passwordNext",50000);
      $("[name='password']").setValue(process.env.PASSWORD);
      $('#passwordNext').click()
      browser.getTitle().should.be.equal('ViSenze Evaluation');

      browser.waitForExist('#brand');
      browser.waitForVisible('#brand',50000);
      browser.waitUntil(() => {
        return browser.getUrl() === 'http://evaluation-staging.visenze.com/#/home'
         }, 50000, 'expected jump to evaluation system within 5s');

    });

});