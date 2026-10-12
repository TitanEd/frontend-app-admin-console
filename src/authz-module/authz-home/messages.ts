import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'authz.manage.page.title': {
    id: 'authz.manage.page.title',
    defaultMessage: 'Roles and Permissions Management',
    description: 'AuthZ home page title',
  },
  'authz.breadcrumb.root': {
    id: 'authz.breadcrumb.root',
    defaultMessage: 'Manage Access',
    description: 'AuthZ root breadcrumb',
  },
  'authz.tabs.team': {
    id: 'authz.tabs.team',
    defaultMessage: 'Team Members',
    description: 'AuthZ title for the team management tab',
  },
  'authz.tabs.permissionsRoles': {
    id: 'authz.tabs.permissionsRoles',
    defaultMessage: 'Roles and Permissions',
    description: 'AuthZ title for the roles tab',
  },
  'authz.tabs.more': {
    id: 'authz.tabs.more',
    defaultMessage: 'More...',
    description: 'Label of the menu that holds the tabs that do not fit in the tab bar',
  },
});

export default messages;
