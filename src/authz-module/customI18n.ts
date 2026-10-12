import { getMessages } from '@edx/frontend-platform/i18n';
import {
  libraryResourceTypes, libraryPermissions, courseResourceTypes, coursePermissions, rolesObject,
} from './constants';
import * as legacyLibrary from './libraries/constants';
import * as courseMetadata from './roles-permissions/course/constants';
import * as libraryMetadata from './roles-permissions/library/constants';
import constantsMessages from './customConstantsMessages';

// English text -> message id of the metadata literals (see customConstantsMessages.ts).
const idByEnglish: Record<string, string> = {};
Object.values(constantsMessages).forEach((message) => {
  idByEnglish[String(message.defaultMessage)] = message.id;
});

/**
 * Translation of a metadata literal (role name, permission label, description...) in the
 * language of the page; the English text itself when there is none.
 * The texts have no placeholders, so the translated message is used as it is.
 */
export const translateConstant = (text?: string): string => {
  if (!text) { return text ?? ''; }
  const id = idByEnglish[text.trim()];
  const translated = id ? getMessages()?.[id] : undefined;
  return typeof translated === 'string' && translated ? translated : text;
};

const TRANSLATED_FIELDS = ['label', 'description', 'name'];
let localized = false;

/**
 * Translates the texts of the metadata lists in place. Called once, when the application is
 * ready (the messages of the page language are loaded by then, and the language only changes
 * with a page reload). MAP_ROLE_KEY_TO_LABEL is left alone: the stylesheet matches its English
 * values (`data-role`), so its texts are translated where they are displayed.
 */
export const localizeAuthzConstants = (): void => {
  if (localized) { return; }
  localized = true;
  const lists: object[][] = [
    libraryResourceTypes, libraryPermissions, courseResourceTypes, coursePermissions, rolesObject,
    legacyLibrary.libraryRolesMetadata, legacyLibrary.libraryResourceTypes,
    legacyLibrary.libraryPermissions, legacyLibrary.rolesLibraryObject,
    courseMetadata.courseResourceTypes, courseMetadata.coursePermissions,
    courseMetadata.rolesObject, courseMetadata.courseRolesMetadata,
    libraryMetadata.libraryRolesMetadata, libraryMetadata.libraryResourceTypes,
    libraryMetadata.libraryPermissions, libraryMetadata.rolesLibraryObject,
  ];
  lists.forEach((list) => list.forEach((item) => {
    const entry = item as Record<string, unknown>;
    TRANSLATED_FIELDS.forEach((field) => {
      if (typeof entry[field] === 'string') {
        entry[field] = translateConstant(entry[field] as string);
      }
    });
  }));
};
