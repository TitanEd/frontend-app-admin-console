import { defineMessages } from '@edx/frontend-platform/i18n';

// Texts of the custom layout (same ids as in the other TitanEd MFE forks, so their
// translations apply).
const messages = defineMessages({
  sidebarDashboardTitle: {
    id: 'sidebar.dashboard.title',
    defaultMessage: 'Dashboard',
    description: 'Title of the dashboard sidebar item',
  },
  sidebarMyCoursesTitle: {
    id: 'sidebar.my-courses.title',
    defaultMessage: 'My Courses',
    description: 'Title of the my courses sidebar item',
  },
  sidebarLoading: {
    id: 'sidebar.loading',
    defaultMessage: 'Loading...',
    description: 'Screen reader text while the sidebar menu loads',
  },
});

export default messages;
