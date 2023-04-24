import { OfferDeserializer } from '../../../../../src/data/factory/offer.deserializer';
import { Offer1Deserializer } from '../../../../../src/data/factory/offer1/offer1.deserializer';

const MAX_FIELD_LENGTH = 255;
const deserializer: OfferDeserializer = new Offer1Deserializer();
export default [
  {
    name: 'Offer 1 Valid Schema',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 0,
      consoleLog: [],
      result: [
        {
          providerName: 'offer1',
          boxSize: 'large',
          description: 'Description',
          externalOfferId: '1',
          isAndroid: 0,
          isDesktop: 0,
          isIos: 1,
          name: 'Offer name',
          offerUrlTemplate: 'https://offer1.some.url',
          requirements: 'Test Offer 1',
          thumbnail: 'https://offer1.image.some.url',
        },
      ],
    },
  },
  {
    name: 'Offer 1 No Offer Id field',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_name: 'Offer 1',
            offer_desc: 'Offer 1 description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '',
            keyword: 'required',
            message: "should have required property 'offer_id'",
            params: { missingProperty: 'offer_id' },
            schemaPath: '#/required',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Empty Offer Id',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '',
            offer_name: 'Offer 1',
            offer_desc: 'Offer 1 description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_id',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/offer_id/minLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Offer Id is NULL',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: null,
            offer_name: 'Offer 1',
            offer_desc: 'Offer 1 description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_id',
            keyword: 'type',
            message: 'should be string',
            params: { type: 'string' },
            schemaPath: '#/properties/offer_id/type',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 MAX Offer Id length ',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1'.repeat(MAX_FIELD_LENGTH + 1),
            offer_name: 'Offer 1',
            offer_desc: 'Offer 1 description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_id',
            keyword: 'maxLength',
            message: 'should NOT be longer than 255 characters',
            params: { limit: 255 },
            schemaPath: '#/properties/offer_id/maxLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 No Offer Name',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_desc: 'Offer 1 description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '',
            keyword: 'required',
            message: "should have required property 'offer_name'",
            params: { missingProperty: 'offer_name' },
            schemaPath: '#/required',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Empty Offer Name',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: '',
            offer_desc: 'Offer 1 description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_name',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/offer_name/minLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Offer Id is NULL',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: null,
            offer_desc: 'Offer 1 description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_name',
            keyword: 'type',
            message: 'should be string',
            params: { type: 'string' },
            schemaPath: '#/properties/offer_name/type',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 MAX Offer Name length ',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name:
              'Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 1Offer 11',
            offer_desc: 'Offer 1 description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_name',
            keyword: 'maxLength',
            message: 'should NOT be longer than 255 characters',
            params: { limit: 255 },
            schemaPath: '#/properties/offer_name/maxLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 No Offer Description Field',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'name',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '',
            keyword: 'required',
            message: "should have required property 'offer_desc'",
            params: { missingProperty: 'offer_desc' },
            schemaPath: '#/required',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Empty Offer Description',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: '',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_desc',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/offer_desc/minLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Offer Description is NULL',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Name',
            offer_desc: null,
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_desc',
            keyword: 'type',
            message: 'should be string',
            params: { type: 'string' },
            schemaPath: '#/properties/offer_desc/type',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 No call to action field',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '',
            keyword: 'required',
            message: "should have required property 'call_to_action'",
            params: { missingProperty: 'call_to_action' },
            schemaPath: '#/required',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Empty Call to Action Field',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: '',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.call_to_action',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/call_to_action/minLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Call to action is null',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: null,
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.call_to_action',
            keyword: 'type',
            message: 'should be string',
            params: { type: 'string' },
            schemaPath: '#/properties/call_to_action/type',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 No platform Field',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '',
            keyword: 'required',
            message: "should have required property 'platform'",
            params: { missingProperty: 'platform' },
            schemaPath: '#/required',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Platform field is empty',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: '',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.platform',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/platform/minLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Platform Field is null',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: null,
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.platform',
            keyword: 'type',
            message: 'should be string',
            params: { type: 'string' },
            schemaPath: '#/properties/platform/type',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Platform Field Max Size',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: '1'.repeat(MAX_FIELD_LENGTH + 1),
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.platform',
            keyword: 'maxLength',
            message: 'should NOT be longer than 255 characters',
            params: { limit: 255 },
            schemaPath: '#/properties/platform/maxLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 device field not exists',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '',
            keyword: 'required',
            message: "should have required property 'device'",
            params: { missingProperty: 'device' },
            schemaPath: '#/required',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Device Field is Empty',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: '',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.device',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/device/minLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Device Field is null',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: null,
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.device',
            keyword: 'type',
            message: 'should be string',
            params: { type: 'string' },
            schemaPath: '#/properties/device/type',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Device field max size',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: '1'.repeat(MAX_FIELD_LENGTH + 1),
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.device',
            keyword: 'maxLength',
            message: 'should NOT be longer than 255 characters',
            params: { limit: 255 },
            schemaPath: '#/properties/device/maxLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 offer url empty',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: '',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_url',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/offer_url/minLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 offer url Max length',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: '1'.repeat(MAX_FIELD_LENGTH + 1),
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_url',
            keyword: 'maxLength',
            message: 'should NOT be longer than 255 characters',
            params: { limit: 255 },
            schemaPath: '#/properties/offer_url/maxLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Offer url easy empty',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: '',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_url',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/offer_url/minLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Offer url easy max length',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: '1'.repeat(MAX_FIELD_LENGTH + 1),
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.offer_url',
            keyword: 'maxLength',
            message: 'should NOT be longer than 255 characters',
            params: { limit: 255 },
            schemaPath: '#/properties/offer_url/maxLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 image url empty',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: '',
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.image_url',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/image_url/minLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 image url max length',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: '1'.repeat(MAX_FIELD_LENGTH + 1),
            image_url_220x124: 'https://offer1.image.small.some.url',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.image_url',
            keyword: 'maxLength',
            message: 'should NOT be longer than 255 characters',
            params: { limit: 255 },
            schemaPath: '#/properties/image_url/maxLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 image url small empty',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: '',
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.image_url_220x124',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/image_url_220x124/minLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 image url small Max length',
    deserializer,
    payload: {
      query: { pubid: '1', appid: 1, country: '', platform: 'all' },
      response: {
        currency_name: 'Coins',
        offers_count: 2729,
        offers: [
          {
            offer_id: '1',
            offer_name: 'Offer name',
            offer_desc: 'Description',
            call_to_action: 'Test Offer 1',
            offer_url: 'https://offer1.some.url',
            offer_url_easy: 'https://offer1.easy.some.url',
            image_url: 'https://offer1.image.some.url',
            image_url_220x124: '1'.repeat(MAX_FIELD_LENGTH + 1),
            platform: 'mobile',
            device: 'iphone_ipad',
          },
        ],
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.image_url_220x124',
            keyword: 'maxLength',
            message: 'should NOT be longer than 255 characters',
            params: { limit: 255 },
            schemaPath: '#/properties/image_url_220x124/maxLength',
          },
        ],
      ],
      result: [],
    },
  },
];
