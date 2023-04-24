import {
  defaultTextRule,
  defaultVarcharRule,
} from '../offer.schema.validation.rules';

export default {
  type: 'object',
  properties: {
    Offer: {
      type: 'object',
      properties: {
        campaign_id: { type: 'integer' },
        icon: defaultVarcharRule,
        name: defaultVarcharRule,
        tracking_url: defaultVarcharRule,
        instructions: defaultTextRule,
        description: defaultTextRule,
      },
      required: [
        'campaign_id',
        'icon',
        'name',
        'tracking_url',
        'instructions',
        'description',
      ],
    },
    OS: {
      type: 'object',
      properties: {
        web: { type: 'boolean' },
        ios: { type: 'boolean' },
        android: { type: 'boolean' },
      },
      anyOf: [
        { required: ['web'] },
        { required: ['ios'] },
        { required: ['android'] },
      ],
    },
  },
  required: ['Offer', 'OS'],
};
