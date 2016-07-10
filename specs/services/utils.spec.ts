import { fetchForecast } from '../../src/services/utils';
const expect = chai.expect;

describe('In Utils module', () => {
    describe('the fetchForecast', () => {
        it('should transform the data', done => {
            fetchForecast().then((data: any) => {
                expect(data.city).to.equal('London');
                expect(data.entries).to.have.length(5);
                expect(data.entries[0][0].date).not.to.be.undefined;
                expect(data.entries[0][0].temp).not.to.be.undefined;
                expect(data.entries[0][0].humidity).not.to.be.undefined;
                expect(data.entries[0][0].icon).not.to.be.undefined;
                expect(data.entries[0][0].wind).not.to.be.undefined;
                done();
            });
        });
    });
});
