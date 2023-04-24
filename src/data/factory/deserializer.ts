import { Offer } from '../model/offer.entity';

export interface Deserializer {
  deserializeBulk(data: any): Offer[];
}
