import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize, mergeConfig,
} from '@edx/frontend-platform';
import AuthZModule from '@src/authz-module';
import { localizeAuthzConstants } from '@src/authz-module/customI18n';

import messages from './i18n';

import './index.scss';

const queryClient = new QueryClient();

subscribe(APP_READY, () => {
  // Role and permission texts of the constants files, in the language of the page.
  localizeAuthzConstants();
  const root = createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Routes>
            <Route
              path="/authz/*"
              element={(
                <PluginSlot id="app_layout_plugin_slot">
                  <AuthZModule />
                </PluginSlot>
              )}
            />
            {/* The console has no page of its own at its root: open the roles page. */}
            <Route path="*" element={<Navigate to="/authz" replace />} />
          </Routes>
        </AppProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  const root = createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <StrictMode>
      <ErrorPage message={error.message} />
    </StrictMode>,
  );
});

initialize({
  messages,
  requireAuthenticatedUser: true,
  handlers: {
    config: () => {
      mergeConfig({
        COURSE_AUTHORING_MICROFRONTEND_URL: process.env.COURSE_AUTHORING_MICROFRONTEND_URL || null,
      }, 'AdminConsoleAppConfig');
    },
  },
});
