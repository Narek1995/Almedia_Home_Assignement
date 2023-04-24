import { Deserializer } from './deserializer';
import { Offer } from '../model/offer.entity';
import Ajv = require('ajv');

const ajv = new Ajv();

export abstract class OfferDeserializer implements Deserializer {
  private validate: Ajv.ValidateFunction;
  constructor() {
    this.loadValidationSchema();
  }

  private loadValidationSchema() {
    this.validate = ajv.compile(this.getSchema());
  }

  protected abstract parse(data: any): Offer;
  protected abstract getSchema(): any;

  private deserialize(data: any): Offer {
    const isValid = this.validate(data);
    if (!isValid) {
      console.log('Unsupported Schema', this.validate.errors);
      return undefined;
    }
    return this.parse(data);
  }

  protected abstract generateOfferList(data: any): any[];
  deserializeBulk(data: any): Offer[] {
    const offerList: any = this.generateOfferList(data);
    const res: Offer[] = [];
    offerList.forEach((o) => {
      const offer: Offer = this.deserialize(o);
      if (offer) {
        res.push(offer);
      }
    });
    return res;
  }
}
