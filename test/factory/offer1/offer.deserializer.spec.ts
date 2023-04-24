import offer1PayloadValid from '../../fixtures/offer1/payloads/offer1/offer1.valid_offers.response';
import offer1PayloadInvalidItems from '../../fixtures/offer1/payloads/offer1/offer1.invalid_offers.response';
import offer2PayloadValid from '../../fixtures/offer1/payloads/offer2/offer2.valid_offers.response';
import offer2PayloadInValidItems from '../../fixtures/offer1/payloads/offer2/offer2.invalid_offers.response';
import { Offer } from '../../../src/data/model/offer.entity';

describe('offer.deserializer test', () => {
  describe('Offer deserializer valid input', () => {
    const testData = [offer1PayloadValid, offer2PayloadValid];
    testData.forEach((data) => {
      data.forEach((td) => {
        it(`Deserialize response | ${td.name}`, () => {
          const result: Offer[] = td.deserializer.deserializeBulk(td.payload);
          console.log(result);
          expect(result).toEqual(td.expectedResult);
        });
      });
    });
  });
  describe('Offer deserializer containing invalid inputs', () => {
    const testData = [offer1PayloadInvalidItems, offer2PayloadInValidItems];
    testData.forEach((data) => {
      data.forEach((td) => {
        it(`Deserialize response containing invalid offers | ${td.name}`, () => {
          const logSpy = jest.spyOn(global.console, 'log');
          logSpy.mockClear();
          const result: Offer[] = td.deserializer.deserializeBulk(td.payload);
          expect(logSpy).toHaveBeenCalledTimes(td.expected.logsCount);
          expect(logSpy.mock.calls).toContainEqual(td.expected.consoleLog);
          expect(result).toEqual(td.expected.result);
        });
      });
    });
  });
});
