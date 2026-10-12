import React from 'react';

import {
  DIRECT_PLUGIN,
  PLUGIN_OPERATIONS,
} from '@openedx/frontend-plugin-framework';

import CustomLayout from './src/CustomLayout';

const getPluginSlots = () => ({
  // Puts the pages of this MFE (src/index.tsx) in the custom shell: header and left navigation.
  app_layout_plugin_slot: {
    keepDefault: true,
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Wrap,
        widgetId: 'default_contents',
        wrapper: ({ component }) => <CustomLayout>{component}</CustomLayout>,
      },
    ],
  },
  // The stock header of the pages (StudioHeader in AuthZLayout) is replaced by the shell's.
  page_header_plugin_slot: {
    keepDefault: false,
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Hide,
        widgetId: 'default_contents',
      },
    ],
  },
});

// Load environment variables from .env file
const config = {
  ...process.env,
  get pluginSlots() {
    return getPluginSlots();
  },
};

export default config;
