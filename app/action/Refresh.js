// Generated by CoffeeScript 1.9.3
Ext.define('FM.action.Refresh', {
  extend: 'FM.overrides.Action',
  config: {
    scale: "large",
    iconAlign: "top",
    iconCls: "fm-action-refresh",
    text: t("Refresh"),
    handler: function(panels) {
      var i, len, panel, results;
      if (panels == null) {
        panels = [FM.Left, FM.Right];
      }
      FM.Logger.info('Run Action FM.action.Refresh', arguments);
      results = [];
      for (i = 0, len = panels.length; i < len; i++) {
        panel = panels[i];
        results.push((function(panel) {
          FM.Logger.info("Refreshing ", panel);
          FM.helpers.SetLoading(panel.body, t("Loading..."));
          if (panel.session == null) {
            panel.session = {
              type: FM.Session.HOME,
              path: "/"
            };
          }
          if (panel.session.type === FM.Session.LOCAL_APPLET) {
            try {
              return panel.applet.listdir(panel.session.path, panel.toString());
            } catch (_error) {
              FM.helpers.ShowError(t("Error during operation. Please contact Support."));
              return FM.helpers.UnsetLoading(panel.body);
            }
          } else {
            return FM.backend.ajaxSend('/actions/main/init_session', {
              params: {
                session: panel.session
              },
              success: function(response) {
                var listing, response_data;
                response_data = Ext.util.JSON.decode(response.responseText).data;
                listing = response_data.listing;
                if (listing.path !== '/') {
                  listing.items.unshift({
                    name: "..",
                    is_dir: true
                  });
                }
                FM.Logger.info("Start event ", panel);
                return FM.getApplication().fireEvent(FM.Events.main.initSession, response_data, [panel]);
              },
              error: function() {
                FM.helpers.ShowError(t("Error during operation. Please contact Support."));
                return FM.helpers.UnsetLoading(panel.body);
              }
            });
          }
        })(panel));
      }
      return results;
    }
  }
});