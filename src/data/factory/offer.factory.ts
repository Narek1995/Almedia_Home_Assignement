import { Offer1Deserializer } from './offer1/offer1.deserializer';
import { Offer2Deserializer } from './offer2/offer2.deserializer';
import { Offer } from '../model/offer.entity';
import { OfferDeserializer } from './offer.deserializer';

export enum OfferType {
  offer_1 = 'offer1',
  offer_2 = 'offer2',
}

export default class OfferFactory {
  private getOfferDeserializer(type: OfferType): OfferDeserializer {
    switch (type) {
      case OfferType.offer_1:
        return new Offer1Deserializer();
      case OfferType.offer_2:
        return new Offer2Deserializer();
      default:
        console.log('Wrong offer type');
        return undefined;
    }
  }

  parseOffer(data: any, type: OfferType): Offer[] {
    const deserializer: OfferDeserializer = this.getOfferDeserializer(type);
    return deserializer.deserializeBulk(data);
  }
}
