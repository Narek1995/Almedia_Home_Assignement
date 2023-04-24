import offer1InvalidSchemaPayload from '../../fixtures/offer1/payloads/offer1/offer1.invalid.schema.payload';
import offer2InvalidSchemaPayload from '../../fixtures/offer1/payloads/offer2/offer2.invalid.schema.payload';
import { Offer } from '../../../src/data/model/offer.entity';

describe('offer.deserializer validation test', () => {
  describe('Offer Validation Field Deserialization tests', () => {
    const testData = [offer1InvalidSchemaPayload, offer2InvalidSchemaPayload];
    testData.forEach((data) => {
      data.forEach((td) => {
        it(`Deserialize response containing invalid offers | ${td.name}`, () => {
          const logSpy = jest.spyOn(global.console, 'log');
          logSpy.mockClear();
          const result: Offer[] = td.deserializer.deserializeBulk(td.payload);
          expect(logSpy).toHaveBeenCalledTimes(td.expected.logsCount);
          if (td.expected.logsCount > 0) {
            expect(logSpy.mock.calls).toContainEqual(td.expected.consoleLog);
          }
          expect(result).toEqual(td.expected.result);
        });
      });
    });
  });
});
