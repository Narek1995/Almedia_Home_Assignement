import { Offer2Deserializer } from '../../../../../src/data/factory/offer2/offer2.deserializer';

const MAX_FIELD_LENGTH = 255;
const deserializer = new Offer2Deserializer();
export default [
  {
    name: 'Offer 2 Valid Offer',
    deserializer: deserializer,
    payload: {
      status: 'success',
      data: {
        '3': {
          Offer: {
            campaign_id: 1,
            name: 'Name',
            icon: 'https://offer3.some.image.url',
            tracking_url: 'https://offer3.some.url',
            instructions: 'Offer 3 Instructions',
            description: 'Description',
          },
          OS: {
            android: false,
            ios: true,
            web: true,
          },
        },
      },
    },
    expected: {
      logsCount: 0,
      consoleLog: [],
      result: [
        {
          providerName: 'offer2',
          boxSize: 'small',
          description: 'Description',
          externalOfferId: 1,
          isAndroid: 0,
          isDesktop: 1,
          isIos: 1,
          name: 'Name',
          offerUrlTemplate: 'https://offer3.some.url',
          requirements: 'Offer 3 Instructions',
          thumbnail: 'https://offer3.some.image.url',
        },
      ],
    },
  },
  {
    name: 'Offer 2 No Offer Id field',
    deserializer: deserializer,
    payload: {
      status: 'success',
      data: {
        '3': {
          Offer: {
            name: 'Offer 1',
            icon: 'https://offer3.some.image.url',
            tracking_url: 'https://offer3.some.url',
            instructions: 'Offer 3 Instructions',
            description: 'Offer 3 description',
          },
          OS: {
            android: false,
            ios: true,
            web: true,
          },
        },
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.Offer',
            keyword: 'required',
            message: "should have required property 'campaign_id'",
            params: { missingProperty: 'campaign_id' },
            schemaPath: '#/properties/Offer/required',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 2 Offer Id is NULL',
    deserializer: deserializer,
    payload: {
      status: 'success',
      data: {
        '3': {
          Offer: {
            campaign_id: null,
            name: 'Offer 1',
            icon: 'https://offer3.some.image.url',
            tracking_url: 'https://offer3.some.url',
            instructions: 'Offer 3 Instructions',
            description: 'Offer 3 description',
          },
          OS: {
            android: false,
            ios: true,
            web: true,
          },
        },
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.Offer.campaign_id',
            keyword: 'type',
            message: 'should be integer',
            params: { type: 'integer' },
            schemaPath: '#/properties/Offer/properties/campaign_id/type',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 2 No Offer Name field',
    deserializer: deserializer,
    payload: {
      status: 'success',
      data: {
        '3': {
          Offer: {
            campaign_id: 1,
            icon: 'https://offer3.some.image.url',
            tracking_url: 'https://offer3.some.url',
            instructions: 'Offer 3 Instructions',
            description: 'Offer 3 description',
          },
          OS: {
            android: false,
            ios: true,
            web: true,
          },
        },
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.Offer',
            keyword: 'required',
            message: "should have required property 'name'",
            params: { missingProperty: 'name' },
            schemaPath: '#/properties/Offer/required',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 2 Offer Name is NULL',
    deserializer: deserializer,
    payload: {
      status: 'success',
      data: {
        '3': {
          Offer: {
            campaign_id: 1,
            name: null,
            icon: 'https://offer3.some.image.url',
            tracking_url: 'https://offer3.some.url',
            instructions: 'Offer 3 Instructions',
            description: 'Offer 3 description',
          },
          OS: {
            android: false,
            ios: true,
            web: true,
          },
        },
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.Offer.name',
            keyword: 'type',
            message: 'should be string',
            params: { type: 'string' },
            schemaPath: '#/properties/Offer/properties/name/type',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 2 Offer Name is Empty',
    deserializer: deserializer,
    payload: {
      status: 'success',
      data: {
        '3': {
          Offer: {
            campaign_id: 1,
            name: '',
            icon: 'https://offer3.some.image.url',
            tracking_url: 'https://offer3.some.url',
            instructions: 'Offer 3 Instructions',
            description: 'Offer 3 description',
          },
          OS: {
            android: false,
            ios: true,
            web: true,
          },
        },
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.Offer.name',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/Offer/properties/name/minLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 2 MAX Offer Name length ',
    deserializer: deserializer,
    payload: {
      status: 'success',
      data: {
        '3': {
          Offer: {
            campaign_id: 1,
            name: '1'.repeat(MAX_FIELD_LENGTH) + '1',
            icon: 'https://offer3.some.image.url',
            tracking_url: 'https://offer3.some.url',
            instructions: 'Offer 3 Instructions',
            description: 'Offer 3 description',
          },
          OS: {
            android: false,
            ios: true,
            web: true,
          },
        },
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.Offer.name',
            keyword: 'maxLength',
            message: 'should NOT be longer than 255 characters',
            params: { limit: 255 },
            schemaPath: '#/properties/Offer/properties/name/maxLength',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 2 No Offer Description field',
    deserializer: deserializer,
    payload: {
      status: 'success',
      data: {
        '3': {
          Offer: {
            campaign_id: 1,
            name: 'Name',
            icon: 'https://offer3.some.image.url',
            tracking_url: 'https://offer3.some.url',
            instructions: 'Offer 3 Instructions',
          },
          OS: {
            android: false,
            ios: true,
            web: true,
          },
        },
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.Offer',
            keyword: 'required',
            message: "should have required property 'description'",
            params: { missingProperty: 'description' },
            schemaPath: '#/properties/Offer/required',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 2 Offer Description is NULL',
    deserializer: deserializer,
    payload: {
      status: 'success',
      data: {
        '3': {
          Offer: {
            campaign_id: 1,
            name: 'Name',
            icon: 'https://offer3.some.image.url',
            tracking_url: 'https://offer3.some.url',
            instructions: 'Offer 3 Instructions',
            description: null,
          },
          OS: {
            android: false,
            ios: true,
            web: true,
          },
        },
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.Offer.description',
            keyword: 'type',
            message: 'should be string',
            params: { type: 'string' },
            schemaPath: '#/properties/Offer/properties/description/type',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 2 Offer Name is Empty',
    deserializer: deserializer,
    payload: {
      status: 'success',
      data: {
        '3': {
          Offer: {
            campaign_id: 1,
            name: 'Name',
            icon: 'https://offer3.some.image.url',
            tracking_url: 'https://offer3.some.url',
            instructions: 'Offer 3 Instructions',
            description: '',
          },
          OS: {
            android: false,
            ios: true,
            web: true,
          },
        },
      },
    },
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '.Offer.description',
            keyword: 'minLength',
            message: 'should NOT be shorter than 1 characters',
            params: { limit: 1 },
            schemaPath: '#/properties/Offer/properties/description/minLength',
          },
        ],
      ],
      result: [],
    },
  },
];
