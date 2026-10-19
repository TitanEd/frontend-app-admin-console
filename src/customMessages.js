import { defineMessages } from '@edx/frontend-platform/i18n';

// Texts of the custom layout (same ids as in the other TitanEd MFE forks, so their
// translations apply).
const messages = defineMessages({
  sidebarDashboardTitle: {
    id: 'sidebar.dashboard.title',
    defaultMessage: 'Dashboard',
    description: 'Title of the dashboard sidebar item',
  },
  sidebarMyAssessmentsTitle: {
    id: 'sidebar.my-assessments.title',
    defaultMessage: 'My Assessments',
    description: 'Title of the my assessments sidebar item',
  },
  sidebarMyMeetingsTitle: {
    id: 'sidebar.my-meetings.title',
    defaultMessage: 'My Meetings',
    description: 'Title of the my meetings (Zoom live classes) sidebar item',
  },
  sidebarMyCalendarTitle: {
    id: 'sidebar.my-calendar.title',
    defaultMessage: 'My Calendar',
    description: 'Title of the my calendar sidebar item',
  },
  sidebarMyAchievementsTitle: {
    id: 'sidebar.my-achievements.title',
    defaultMessage: 'My Achievements',
    description: 'Title of the my achievements sidebar item',
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
