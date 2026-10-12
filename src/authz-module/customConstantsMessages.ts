import { defineMessages } from '@edx/frontend-platform/i18n';

// Texts of the role, resource and permission metadata in the constants files of this module
// (constants.ts, libraries/constants.ts, roles-permissions/*/constants.ts, components/constants.ts).
// Those files hold plain English literals; customI18n.ts looks the literals up here by their
// English text. When a literal changes there, change the matching defaultMessage here.
const messages = defineMessages({
  'authz.tels.label.library': {
    id: 'authz.tels.label.library',
    defaultMessage: 'Library',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-related-to-the-library-as-a': {
    id: 'authz.tels.description.permissions-related-to-the-library-as-a',
    defaultMessage: 'Permissions related to the library as a whole.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.content': {
    id: 'authz.tels.label.content',
    defaultMessage: 'Content',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-to-create-edit-delete-and-publish': {
    id: 'authz.tels.description.permissions-to-create-edit-delete-and-publish',
    defaultMessage: 'Permissions to create, edit, delete, and publish individual content items within the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.collection': {
    id: 'authz.tels.label.collection',
    defaultMessage: 'Collection',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-to-create-edit-and-delete-content': {
    id: 'authz.tels.description.permissions-to-create-edit-and-delete-content',
    defaultMessage: 'Permissions to create, edit, and delete content collections within the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.team': {
    id: 'authz.tels.label.team',
    defaultMessage: 'Team',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-to-manage-user-access-and-roles': {
    id: 'authz.tels.description.permissions-to-manage-user-access-and-roles',
    defaultMessage: 'Permissions to manage user access and roles within the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.allows-the-user-to-delete-the-library': {
    id: 'authz.tels.description.allows-the-user-to-delete-the-library',
    defaultMessage: 'Allows the user to delete the library and all its contents.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.add-or-remove-tags-from-content': {
    id: 'authz.tels.description.add-or-remove-tags-from-content',
    defaultMessage: 'Add or remove tags from content.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.view-content-search-filter-and-sort-within': {
    id: 'authz.tels.description.view-content-search-filter-and-sort-within',
    defaultMessage: 'View content, search, filter, and sort within the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.edit-content-in-draft-mode': {
    id: 'authz.tels.description.edit-content-in-draft-mode',
    defaultMessage: 'Edit content in draft mode',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.publish-content-making-it-available-for-reuse': {
    id: 'authz.tels.description.publish-content-making-it-available-for-reuse',
    defaultMessage: 'Publish content, making it available for reuse',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.reuse-published-content-within-a-course': {
    id: 'authz.tels.description.reuse-published-content-within-a-course',
    defaultMessage: 'Reuse published content within a course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.create-new-collections-within-a-library': {
    id: 'authz.tels.description.create-new-collections-within-a-library',
    defaultMessage: 'Create new collections within a library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.add-or-remove-content-from-existing-collections': {
    id: 'authz.tels.description.add-or-remove-content-from-existing-collections',
    defaultMessage: 'Add or remove content from existing collections.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.delete-entire-collections-from-the-library': {
    id: 'authz.tels.description.delete-entire-collections-from-the-library',
    defaultMessage: 'Delete entire collections from the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.view-the-list-of-users-who-have': {
    id: 'authz.tels.description.view-the-list-of-users-who-have',
    defaultMessage: 'View the list of users who have access to the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.add-remove-and-assign-roles-to-users': {
    id: 'authz.tels.description.add-remove-and-assign-roles-to-users',
    defaultMessage: 'Add, remove, and assign roles to users within the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.tags-taxonomies': {
    id: 'authz.tels.label.tags-taxonomies',
    defaultMessage: 'Tags & taxonomies',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-for-managing-tags-and-taxonomies-used': {
    id: 'authz.tels.description.permissions-for-managing-tags-and-taxonomies-used',
    defaultMessage: 'Permissions for managing tags and taxonomies used to organize course content.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.course-updates-handouts': {
    id: 'authz.tels.label.course-updates-handouts',
    defaultMessage: 'Course updates & handouts',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-for-viewing-and-managing-course-updates': {
    id: 'authz.tels.description.permissions-for-viewing-and-managing-course-updates',
    defaultMessage: 'Permissions for viewing and managing course updates and handouts that are visible to learners.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.advanced-certificates': {
    id: 'authz.tels.label.advanced-certificates',
    defaultMessage: 'Advanced & certificates',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-for-managing-advanced-course-settings-and': {
    id: 'authz.tels.description.permissions-for-managing-advanced-course-settings-and',
    defaultMessage: 'Permissions for managing advanced course settings and course certificates.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.course-access-content': {
    id: 'authz.tels.label.course-access-content',
    defaultMessage: 'Course Access & content',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-related-to-accessing-the-course-and': {
    id: 'authz.tels.description.permissions-related-to-accessing-the-course-and',
    defaultMessage: 'Permissions related to accessing the course and managing core course content, including creating, editing, and publishing materials.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.files': {
    id: 'authz.tels.label.files',
    defaultMessage: 'Files',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-for-viewing-and-managing-course-pages': {
    id: 'authz.tels.description.permissions-for-viewing-and-managing-course-pages',
    defaultMessage: 'Permissions for viewing and managing course pages and additional learning resources.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.schedule-details': {
    id: 'authz.tels.label.schedule-details',
    defaultMessage: 'Schedule & details',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-for-viewing-and-editing-the-course': {
    id: 'authz.tels.description.permissions-for-viewing-and-editing-the-course',
    defaultMessage: 'Permissions for viewing and editing the course schedule and course information.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.library-updates': {
    id: 'authz.tels.label.library-updates',
    defaultMessage: 'Library updates',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-for-reviewing-and-managing-updates-made': {
    id: 'authz.tels.description.permissions-for-reviewing-and-managing-updates-made',
    defaultMessage: 'Permissions for reviewing and managing updates made to content libraries connected to the course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.grading': {
    id: 'authz.tels.label.grading',
    defaultMessage: 'Grading',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-related-to-viewing-and-managing-grading': {
    id: 'authz.tels.description.permissions-related-to-viewing-and-managing-grading',
    defaultMessage: 'Permissions related to viewing and managing grading configuration and grading policies.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.pages-resources': {
    id: 'authz.tels.label.pages-resources',
    defaultMessage: 'Pages & resources',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.label.other': {
    id: 'authz.tels.label.other',
    defaultMessage: 'Other',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.additional-permissions-not-included-in-other-categories': {
    id: 'authz.tels.description.additional-permissions-not-included-in-other-categories',
    defaultMessage: 'Additional permissions not included in other categories, such as viewing checklists and platform-level course roles.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.import-export': {
    id: 'authz.tels.label.import-export',
    defaultMessage: 'Import / export',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-for-importing-and-exporting-course-content': {
    id: 'authz.tels.description.permissions-for-importing-and-exporting-course-content',
    defaultMessage: 'Permissions for importing and exporting course content and related data.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.course-team-groups': {
    id: 'authz.tels.label.course-team-groups',
    defaultMessage: 'Course team & groups',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permissions-for-viewing-and-managing-the-course': {
    id: 'authz.tels.description.permissions-for-viewing-and-managing-the-course',
    defaultMessage: 'Permissions for viewing and managing the course team, learner groups, and group configurations.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.view-course-see-the-course-in-the': {
    id: 'authz.tels.description.view-course-see-the-course-in-the',
    defaultMessage: 'View course: See the course in the Studio home and access the course outline in read-only mode. Includes the "View Live" option to preview the course as a learner in the LMS.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-course': {
    id: 'authz.tels.label.view-course',
    defaultMessage: 'View course',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.create-a-new-course-in-studio': {
    id: 'authz.tels.description.create-a-new-course-in-studio',
    defaultMessage: 'Create a new course in Studio.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.create-course': {
    id: 'authz.tels.label.create-course',
    defaultMessage: 'Create course',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.publish-course-content': {
    id: 'authz.tels.description.publish-course-content',
    defaultMessage: 'Publish course content.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.publish-content': {
    id: 'authz.tels.label.publish-content',
    defaultMessage: 'Publish content',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.edit-the-course-outline-units-and-components': {
    id: 'authz.tels.description.edit-the-course-outline-units-and-components',
    defaultMessage: 'Edit the course outline, units, and components.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.edit-content': {
    id: 'authz.tels.label.edit-content',
    defaultMessage: 'Edit content',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.accept-or-reject-pending-updates-from-content': {
    id: 'authz.tels.description.accept-or-reject-pending-updates-from-content',
    defaultMessage: 'Accept or reject pending updates from content libraries linked to this course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.review-library-updates': {
    id: 'authz.tels.label.review-library-updates',
    defaultMessage: 'Review library updates',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.see-course-announcements-and-handouts-visible-to': {
    id: 'authz.tels.description.see-course-announcements-and-handouts-visible-to',
    defaultMessage: 'See course announcements and handouts visible to learners.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-updates': {
    id: 'authz.tels.label.view-updates',
    defaultMessage: 'View updates',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.create-edit-and-delete-course-announcements-and': {
    id: 'authz.tels.description.create-edit-and-delete-course-announcements-and',
    defaultMessage: 'Create, edit, and delete course announcements and handouts.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.manage-course-updates': {
    id: 'authz.tels.label.manage-course-updates',
    defaultMessage: 'Manage course updates',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.see-the-pages-resources-section-in-studio': {
    id: 'authz.tels.description.see-the-pages-resources-section-in-studio',
    defaultMessage: 'See the Pages & Resources section in Studio.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-pages-and-resources': {
    id: 'authz.tels.label.view-pages-and-resources',
    defaultMessage: 'View pages and resources',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.enable-or-disable-course-features-such-as': {
    id: 'authz.tels.description.enable-or-disable-course-features-such-as',
    defaultMessage: 'Enable or disable course features such as Discussions, the Wiki, Notes, Calculator, and Live. Create and edit Textbooks and Custom pages, and manage their configurations.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.manage-pages-resources': {
    id: 'authz.tels.label.manage-pages-resources',
    defaultMessage: 'Manage pages & resources',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.see-the-list-of-files-and-assets': {
    id: 'authz.tels.description.see-the-list-of-files-and-assets',
    defaultMessage: 'See the list of files and assets uploaded to the course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-files': {
    id: 'authz.tels.label.view-files',
    defaultMessage: 'View files',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.upload-new-files-and-assets-to-the': {
    id: 'authz.tels.description.upload-new-files-and-assets-to-the',
    defaultMessage: 'Upload new files and assets to the course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.create-files': {
    id: 'authz.tels.label.create-files',
    defaultMessage: 'Create files',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permanently-remove-files-and-assets-from-the': {
    id: 'authz.tels.description.permanently-remove-files-and-assets-from-the',
    defaultMessage: 'Permanently remove files and assets from the course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.edit-files': {
    id: 'authz.tels.label.edit-files',
    defaultMessage: 'Edit files',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.delete-files': {
    id: 'authz.tels.description.delete-files',
    defaultMessage: 'Delete files.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.delete-files': {
    id: 'authz.tels.label.delete-files',
    defaultMessage: 'Delete files',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.see-the-course-start-and-end-dates': {
    id: 'authz.tels.description.see-the-course-start-and-end-dates',
    defaultMessage: 'See the course start and end dates, enrollment dates, and pacing settings.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-schedule': {
    id: 'authz.tels.label.view-schedule',
    defaultMessage: 'View schedule',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.update-course-start-and-end-dates-enrollment': {
    id: 'authz.tels.description.update-course-start-and-end-dates-enrollment',
    defaultMessage: 'Update course start and end dates, enrollment dates, and pacing settings.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.edit-schedule': {
    id: 'authz.tels.label.edit-schedule',
    defaultMessage: 'Edit schedule',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.see-course-information-including-the-course-summary': {
    id: 'authz.tels.description.see-course-information-including-the-course-summary',
    defaultMessage: 'See course information including the course summary, pacing, and prerequisites.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-details': {
    id: 'authz.tels.label.view-details',
    defaultMessage: 'View details',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.update-course-information-including-the-course-summary': {
    id: 'authz.tels.description.update-course-information-including-the-course-summary',
    defaultMessage: 'Update course information including the course summary, pacing, and prerequisites.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.edit-details': {
    id: 'authz.tels.label.edit-details',
    defaultMessage: 'Edit details',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.see-the-grading-configuration-for-the-course': {
    id: 'authz.tels.description.see-the-grading-configuration-for-the-course',
    defaultMessage: 'See the grading configuration for the course, including assignment types and grading scale.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-grading': {
    id: 'authz.tels.label.view-grading',
    defaultMessage: 'View grading',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.update-the-grading-configuration-for-the-course': {
    id: 'authz.tels.description.update-the-grading-configuration-for-the-course',
    defaultMessage: 'Update the grading configuration for the course, including assignment types and grading scale.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.edit-grading-settings': {
    id: 'authz.tels.label.edit-grading-settings',
    defaultMessage: 'Edit grading settings',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.see-the-list-of-users-with-a': {
    id: 'authz.tels.description.see-the-list-of-users-with-a',
    defaultMessage: 'See the list of users with a role assigned to this course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-course-team': {
    id: 'authz.tels.label.view-course-team',
    defaultMessage: 'View course team',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.create-and-manage-content-groups-used-to': {
    id: 'authz.tels.description.create-and-manage-content-groups-used-to',
    defaultMessage: 'Create and manage content groups used to target course content to specific learners.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.manage-group-config': {
    id: 'authz.tels.label.manage-group-config',
    defaultMessage: 'Manage group config',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.add-change-or-remove-role-assignments-for': {
    id: 'authz.tels.description.add-change-or-remove-role-assignments-for',
    defaultMessage: 'Add, change, or remove role assignments for this course from the Roles and Permissions console.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.manage-course-team': {
    id: 'authz.tels.label.manage-course-team',
    defaultMessage: 'Manage course team',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.create-edit-and-delete-tags-on-this': {
    id: 'authz.tels.description.create-edit-and-delete-tags-on-this',
    defaultMessage: 'Create, edit, and delete tags on this course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.manage-tags': {
    id: 'authz.tels.label.manage-tags',
    defaultMessage: 'Manage tags',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.create-edit-and-delete-taxonomies-used-to': {
    id: 'authz.tels.description.create-edit-and-delete-taxonomies-used-to',
    defaultMessage: 'Create, edit, and delete taxonomies used to organize course content.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.manage-taxonomies': {
    id: 'authz.tels.label.manage-taxonomies',
    defaultMessage: 'Manage taxonomies',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.access-and-edit-the-advanced-settings-page': {
    id: 'authz.tels.description.access-and-edit-the-advanced-settings-page',
    defaultMessage: 'Access and edit the Advanced Settings page in Studio. This covers a wide range of technical course configurations, including proctoring, timed exams, LTI tools, enrollment limits, and custom display options.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.manage-advanced-settings': {
    id: 'authz.tels.label.manage-advanced-settings',
    defaultMessage: 'Manage advanced settings',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.label.manage-certificates': {
    id: 'authz.tels.label.manage-certificates',
    defaultMessage: 'Manage certificates',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.import-course-content-from-a-file-this': {
    id: 'authz.tels.description.import-course-content-from-a-file-this',
    defaultMessage: 'Import course content from a file. This is a high-privilege action that can overwrite most course content and settings.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.import-course': {
    id: 'authz.tels.label.import-course',
    defaultMessage: 'Import course',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.download-the-course-content-as-a-file': {
    id: 'authz.tels.description.download-the-course-content-as-a-file',
    defaultMessage: 'Download the course content as a file for backup or reuse in another platform.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.export-course': {
    id: 'authz.tels.label.export-course',
    defaultMessage: 'Export course',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.download-the-tag-data-associated-with-this': {
    id: 'authz.tels.description.download-the-tag-data-associated-with-this',
    defaultMessage: 'Download the tag data associated with this course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.export-tags': {
    id: 'authz.tels.label.export-tags',
    defaultMessage: 'Export tags',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.see-the-course-launch-checklist-in-studio': {
    id: 'authz.tels.description.see-the-course-launch-checklist-in-studio',
    defaultMessage: 'See the course launch checklist in Studio.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-checklists': {
    id: 'authz.tels.label.view-checklists',
    defaultMessage: 'View checklists',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.see-the-list-of-users-with-platform': {
    id: 'authz.tels.description.see-the-list-of-users-with-platform',
    defaultMessage: 'See the list of users with platform-wide roles such as Global Staff and Super Admin.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-global-staff-super-admins': {
    id: 'authz.tels.label.view-global-staff-super-admins',
    defaultMessage: 'View global staff & super admins',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.role.course-admin': {
    id: 'authz.tels.role.course-admin',
    defaultMessage: 'Course Admin',
    description: 'Name of a role',
  },
  'authz.tels.description.course-level-administration-including-access-and-role': {
    id: 'authz.tels.description.course-level-administration-including-access-and-role',
    defaultMessage: 'course level administration, including access and role management for the course team, plus all Staff capabilities.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.role.course-staff': {
    id: 'authz.tels.role.course-staff',
    defaultMessage: 'Course Staff',
    description: 'Name of a role',
  },
  'authz.tels.description.operating-the-course-lifecycle-in-studio-publishing': {
    id: 'authz.tels.description.operating-the-course-lifecycle-in-studio-publishing',
    defaultMessage: 'operating the course lifecycle in Studio, publishing content, handling scheduling, and managing high impact configuration for the course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.role.course-editor': {
    id: 'authz.tels.role.course-editor',
    defaultMessage: 'Course Editor',
    description: 'Name of a role',
  },
  'authz.tels.description.building-and-maintaining-course-content-and-supporting': {
    id: 'authz.tels.description.building-and-maintaining-course-content-and-supporting',
    defaultMessage: 'building and maintaining course content and supporting assets, without operational controls or high impact actions that can affect a live course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.role.course-auditor': {
    id: 'authz.tels.role.course-auditor',
    defaultMessage: 'Course Auditor',
    description: 'Name of a role',
  },
  'authz.tels.description.qa-compliance-review-content-review-and-general': {
    id: 'authz.tels.description.qa-compliance-review-content-review-and-general',
    defaultMessage: 'QA, compliance review, content review, and general oversight, no changes in Studio.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.role.library-admin': {
    id: 'authz.tels.role.library-admin',
    defaultMessage: 'Library Admin',
    description: 'Name of a role',
  },
  'authz.tels.role.library-author': {
    id: 'authz.tels.role.library-author',
    defaultMessage: 'Library Author',
    description: 'Name of a role',
  },
  'authz.tels.role.library-contributor': {
    id: 'authz.tels.role.library-contributor',
    defaultMessage: 'Library Contributor',
    description: 'Name of a role',
  },
  'authz.tels.role.library-user': {
    id: 'authz.tels.role.library-user',
    defaultMessage: 'Library User',
    description: 'Name of a role',
  },
  'authz.tels.role.super-admin': {
    id: 'authz.tels.role.super-admin',
    defaultMessage: 'Super Admin',
    description: 'Name of a role',
  },
  'authz.tels.role.global-staff': {
    id: 'authz.tels.role.global-staff',
    defaultMessage: 'Global Staff',
    description: 'Name of a role',
  },
  'authz.tels.description.the-library-admin-has-full-control-over': {
    id: 'authz.tels.description.the-library-admin-has-full-control-over',
    defaultMessage: 'The Library Admin has full control over the library, including managing users, modifying content, and handling publishing workflows. They ensure content is properly maintained and accessible as needed.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.the-library-author-is-responsible-for-creating': {
    id: 'authz.tels.description.the-library-author-is-responsible-for-creating',
    defaultMessage: 'The Library Author is responsible for creating, editing, and publishing content within a library. They can manage tags and collections but cannot delete libraries or manage users.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.the-library-contributor-can-create-and-edit': {
    id: 'authz.tels.description.the-library-contributor-can-create-and-edit',
    defaultMessage: 'The Library Contributor can create and edit content within a library but cannot publish it. They support the authoring process while leaving final publishing to Authors or Admins.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.the-library-user-can-view-and-reuse': {
    id: 'authz.tels.description.the-library-user-can-view-and-reuse',
    defaultMessage: 'The Library User can view and reuse content but cannot edit or delete any resource.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.permissions-related-to-viewing-managing-and-publishing': {
    id: 'authz.tels.description.permissions-related-to-viewing-managing-and-publishing',
    defaultMessage: 'Permissions related to viewing, managing, and publishing the library structure and metadata.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.permissions-for-creating-editing-deleting-and-publishing': {
    id: 'authz.tels.description.permissions-for-creating-editing-deleting-and-publishing',
    defaultMessage: 'Permissions for creating, editing, deleting, and publishing content within the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.permissions-for-viewing-and-managing-users-who': {
    id: 'authz.tels.description.permissions-for-viewing-and-managing-users-who',
    defaultMessage: 'Permissions for viewing and managing users who have access to the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.permissions-for-creating-and-managing-content-collections': {
    id: 'authz.tels.description.permissions-for-creating-and-managing-content-collections',
    defaultMessage: 'Permissions for creating and managing content collections within the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view': {
    id: 'authz.tels.label.view',
    defaultMessage: 'View',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.view-see-the-library-in-studio-and': {
    id: 'authz.tels.description.view-see-the-library-in-studio-and',
    defaultMessage: 'View: See the library in Studio and access its content in read-only mode.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.manage-tag': {
    id: 'authz.tels.label.manage-tag',
    defaultMessage: 'Manage tag',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.create-edit-and-delete-tags-on-this-2': {
    id: 'authz.tels.description.create-edit-and-delete-tags-on-this-2',
    defaultMessage: 'Create, edit, and delete tags on this library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.publish': {
    id: 'authz.tels.label.publish',
    defaultMessage: 'Publish',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.publish-the-library-to-make-it-available': {
    id: 'authz.tels.description.publish-the-library-to-make-it-available',
    defaultMessage: 'Publish the library to make it available for use in courses.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.create': {
    id: 'authz.tels.label.create',
    defaultMessage: 'Create',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.create-new-content-items-in-the-library': {
    id: 'authz.tels.description.create-new-content-items-in-the-library',
    defaultMessage: 'Create new content items in the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.edit': {
    id: 'authz.tels.label.edit',
    defaultMessage: 'Edit',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.edit-existing-content-items-in-the-library': {
    id: 'authz.tels.description.edit-existing-content-items-in-the-library',
    defaultMessage: 'Edit existing content items in the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.delete': {
    id: 'authz.tels.label.delete',
    defaultMessage: 'Delete',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.permanently-remove-content-items-from-the-library': {
    id: 'authz.tels.description.permanently-remove-content-items-from-the-library',
    defaultMessage: 'Permanently remove content items from the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.publish-individual-content-items-to-make-them': {
    id: 'authz.tels.description.publish-individual-content-items-to-make-them',
    defaultMessage: 'Publish individual content items to make them available for reuse in courses.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.reuse': {
    id: 'authz.tels.label.reuse',
    defaultMessage: 'Reuse',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.add-published-content-from-this-library-to': {
    id: 'authz.tels.description.add-published-content-from-this-library-to',
    defaultMessage: 'Add published content from this library to a course.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.import-content-from-course': {
    id: 'authz.tels.label.import-content-from-course',
    defaultMessage: 'Import Content from Course',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.import-content-from-an-existing-course-into': {
    id: 'authz.tels.description.import-content-from-an-existing-course-into',
    defaultMessage: 'Import content from an existing course into this library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.see-the-list-of-users-with-a-2': {
    id: 'authz.tels.description.see-the-list-of-users-with-a-2',
    defaultMessage: 'See the list of users with a role assigned to this library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.manage': {
    id: 'authz.tels.label.manage',
    defaultMessage: 'Manage',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.add-change-or-remove-role-assignments-for-2': {
    id: 'authz.tels.description.add-change-or-remove-role-assignments-for-2',
    defaultMessage: 'Add, change, or remove role assignments for this library from the Roles and Permissions console.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.create-new-collections-to-organize-content-within': {
    id: 'authz.tels.description.create-new-collections-to-organize-content-within',
    defaultMessage: 'Create new collections to organize content within the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.update-the-name-and-contents-of-existing': {
    id: 'authz.tels.description.update-the-name-and-contents-of-existing',
    defaultMessage: 'Update the name and contents of existing collections.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.permanently-remove-collections-from-the-library': {
    id: 'authz.tels.description.permanently-remove-collections-from-the-library',
    defaultMessage: 'Permanently remove collections from the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.the-library-user-can-view-and-reuse-2': {
    id: 'authz.tels.description.the-library-user-can-view-and-reuse-2',
    defaultMessage: 'The Library User can view and reuse content but cannot edit or delete anything.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.view-course-in-the-course-list-access': {
    id: 'authz.tels.description.view-course-in-the-course-list-access',
    defaultMessage: 'View course in the course list, access the course outline in read only mode, includes the "View Live" entry point.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.edit-course-content-outline-units-components': {
    id: 'authz.tels.description.edit-course-content-outline-units-components',
    defaultMessage: 'Edit course content, outline, units, components.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.edit-course-content': {
    id: 'authz.tels.label.edit-course-content',
    defaultMessage: 'Edit course content',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.label.publish-course-content': {
    id: 'authz.tels.label.publish-course-content',
    defaultMessage: 'Publish course content',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.accept-or-reject-library-updates-in-studio': {
    id: 'authz.tels.description.accept-or-reject-library-updates-in-studio',
    defaultMessage: 'Accept or reject library updates in Studio.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.view-course-updates-and-handouts': {
    id: 'authz.tels.description.view-course-updates-and-handouts',
    defaultMessage: 'View course updates and handouts.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-course-updates': {
    id: 'authz.tels.label.view-course-updates',
    defaultMessage: 'View course updates',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.manage-course-updates-and-handouts-create-edit': {
    id: 'authz.tels.description.manage-course-updates-and-handouts-create-edit',
    defaultMessage: 'Manage course updates and handouts, create, edit, delete.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.view-pages-and-resources': {
    id: 'authz.tels.description.view-pages-and-resources',
    defaultMessage: 'View Pages and Resources.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-pages-resources': {
    id: 'authz.tels.label.view-pages-resources',
    defaultMessage: 'View pages & resources',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.edit-pages-and-resources-including-toggles-and': {
    id: 'authz.tels.description.edit-pages-and-resources-including-toggles-and',
    defaultMessage: 'Edit Pages and Resources, including toggles and content managed from that section.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.view-the-files-page': {
    id: 'authz.tels.description.view-the-files-page',
    defaultMessage: 'View the Files page.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.upload-files': {
    id: 'authz.tels.description.upload-files',
    defaultMessage: 'Upload files.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.non-destructive-file-actions-for-example-lock': {
    id: 'authz.tels.description.non-destructive-file-actions-for-example-lock',
    defaultMessage: 'Non destructive file actions, for example lock or unlock, exact actions depend on implementation.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.view-course-schedule': {
    id: 'authz.tels.description.view-course-schedule',
    defaultMessage: 'View course schedule.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.edit-course-schedule': {
    id: 'authz.tels.description.edit-course-schedule',
    defaultMessage: 'Edit course schedule.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.view-course-details': {
    id: 'authz.tels.description.view-course-details',
    defaultMessage: 'View course details.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-course-details': {
    id: 'authz.tels.label.view-course-details',
    defaultMessage: 'View course details',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.edit-course-details-includes-course-summary-course': {
    id: 'authz.tels.description.edit-course-details-includes-course-summary-course',
    defaultMessage: 'Edit course details, includes Course Summary, Course Pacing, Course Details, Course Pre requisite.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.edit-course-details': {
    id: 'authz.tels.label.edit-course-details',
    defaultMessage: 'Edit course details',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.view-grading-settings-page': {
    id: 'authz.tels.description.view-grading-settings-page',
    defaultMessage: 'View grading settings page.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.view-grading-settings': {
    id: 'authz.tels.label.view-grading-settings',
    defaultMessage: 'View grading settings',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.edit-grading-settings': {
    id: 'authz.tels.description.edit-grading-settings',
    defaultMessage: 'Edit grading settings.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.view-the-course-team-roster': {
    id: 'authz.tels.description.view-the-course-team-roster',
    defaultMessage: 'View the course team roster.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.edit-course-team-membership-and-roles': {
    id: 'authz.tels.description.edit-course-team-membership-and-roles',
    defaultMessage: 'Edit course team membership and roles.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.manage-content-groups': {
    id: 'authz.tels.description.manage-content-groups',
    defaultMessage: 'Manage content groups.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.manage-group-configuration': {
    id: 'authz.tels.label.manage-group-configuration',
    defaultMessage: 'Manage group configuration',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.create-edit-delete-tags': {
    id: 'authz.tels.description.create-edit-delete-tags',
    defaultMessage: 'Create, edit, delete tags.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.create-edit-delete-taxonomies': {
    id: 'authz.tels.description.create-edit-delete-taxonomies',
    defaultMessage: 'Create, edit, delete taxonomies.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.access-and-edit-advanced-settings': {
    id: 'authz.tels.description.access-and-edit-advanced-settings',
    defaultMessage: 'Access and edit Advanced Settings.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.access-and-edit-certificates': {
    id: 'authz.tels.description.access-and-edit-certificates',
    defaultMessage: 'Access and edit Certificates.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.show-import-in-studio-this-is-treated': {
    id: 'authz.tels.description.show-import-in-studio-this-is-treated',
    defaultMessage: 'Show Import in Studio, this is treated as a high privilege action and effectively implies most authoring permissions.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.show-export-in-studio': {
    id: 'authz.tels.description.show-export-in-studio',
    defaultMessage: 'Show Export in Studio.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.export-tags': {
    id: 'authz.tels.description.export-tags',
    defaultMessage: 'Export tags.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.view-checklists': {
    id: 'authz.tels.description.view-checklists',
    defaultMessage: 'View checklists.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.allow-course-or-library-admins-to-view': {
    id: 'authz.tels.description.allow-course-or-library-admins-to-view',
    defaultMessage: 'Allow course or library admins to view the list of global Staff and Super Admin users.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.can-manage-the-course-team-and-all': {
    id: 'authz.tels.description.can-manage-the-course-team-and-all',
    defaultMessage: 'Can manage the course team and all course settings.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.can-publish-content-and-manage-the-course': {
    id: 'authz.tels.description.can-publish-content-and-manage-the-course',
    defaultMessage: 'Can publish content and manage the course lifecycle in Studio.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.can-create-and-edit-course-content-but': {
    id: 'authz.tels.description.can-create-and-edit-course-content-but',
    defaultMessage: 'Can create and edit course content, but cannot publish or change critical course settings.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.can-view-course-content-and-settings-but': {
    id: 'authz.tels.description.can-view-course-content-and-settings-but',
    defaultMessage: 'Can view course content and settings, but cannot make changes.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.label.manage-tags-2': {
    id: 'authz.tels.label.manage-tags-2',
    defaultMessage: 'Manage Tags',
    description: 'Name of a permission or of a group of permissions',
  },
  'authz.tels.description.allows-the-user-to-publish-the-library': {
    id: 'authz.tels.description.allows-the-user-to-publish-the-library',
    defaultMessage: 'Allows the user to publish the library and all its contents.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.create-content-within-the-library': {
    id: 'authz.tels.description.create-content-within-the-library',
    defaultMessage: 'Create content within the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.delete-content-within-the-library': {
    id: 'authz.tels.description.delete-content-within-the-library',
    defaultMessage: 'Delete content within the library.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
  'authz.tels.description.import-content-from-courses': {
    id: 'authz.tels.description.import-content-from-courses',
    defaultMessage: 'Import content from courses.',
    description: 'Explanation of a role, a permission or a group of permissions',
  },
});

export default messages;
