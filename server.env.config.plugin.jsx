from tutor import hooks

hooks.Filters.ENV_PATCHES.add_item(
    (
        "mfe-env-config-runtime-definitions-admin-console",
        """
// Runtime plugin configuration injected by Tutor (same as the fork's env.config.jsx)
const { PLUGIN_OPERATIONS } = await import('@openedx/frontend-plugin-framework');

const { default: CustomLayout } = await import('./src/CustomLayout');

{% raw %}

const getPluginSlots = () => {
  return {
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
  };
};

config.pluginSlots = getPluginSlots();

{% endraw %}
""",
    )
)
