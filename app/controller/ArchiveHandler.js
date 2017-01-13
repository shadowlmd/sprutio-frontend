// Generated by CoffeeScript 1.11.1
Ext.define('FM.controller.ArchiveHandler', {
  extend: 'Ext.app.Controller',
  views: [],
  init: function() {
    FM.Logger.log('ArchiveHandler init!');
    return this.listen({
      controller: {
        '*': {
          eventArchiveCreate: 'createArchive',
          eventArchiveExtract: 'extractArchive'
        }
      }
    });
  },
  onLaunch: function() {},
  createArchive: function(status, session, progress_window, params) {
    FM.Logger.log('Event createArchive run in ArchiveHandler! data = ', arguments);
    if ((status.status != null) && (status.status === FM.Status.STATUS_SUCCESS || status.status === FM.Status.STATUS_ABORT)) {
      progress_window.close();
      FM.helpers.ApplySession(session, function(panel) {
        panel.filelist.clearListCache();
        if (panel.session.path === session.path) {
          return FM.Actions.Refresh.execute([panel]);
        }
      });
      if (status.status === FM.Status.STATUS_ABORT) {
        return FM.Logger.info('createArchive Operation Aborted', status);
      } else {
        return FM.Logger.info('createArchive Operation success', status);
      }
    } else if ((status.status != null) && status.status === FM.Status.STATUS_ERROR) {
      progress_window.close();
      FM.Logger.info('Operation error', status);
      FM.helpers.ShowError(t("Error during operation. Please contact Support."));
    } else {
      FM.helpers.ShowError(t("Unknown operation status. Please contact Support."));
    }
  },
  extractArchive: function(status, session, progress_window, params) {
    FM.Logger.log('Event extractArchive run in ArchiveHandler! data = ', arguments);
    if ((status.status != null) && (status.status === FM.Status.STATUS_SUCCESS || status.status === FM.Status.STATUS_ABORT)) {
      progress_window.close();
      FM.helpers.ApplySession(session, function(panel) {
        panel.filelist.clearListCache();
        if (panel.session.path === session.path) {
          return FM.Actions.Refresh.execute([panel]);
        }
      });
      if (status.status === FM.Status.STATUS_ABORT) {
        return FM.Logger.info('extractArchive Operation Aborted', status);
      } else {
        return FM.Logger.info('Operation success', status);
      }
    } else if ((status.status != null) && status.status === FM.Status.STATUS_ERROR) {
      progress_window.close();
      FM.Logger.info('Operation error', status);
      FM.helpers.ShowError(t("Error during operation. Please contact Support."));
    } else {
      FM.helpers.ShowError(t("Unknown operation status. Please contact Support."));
    }
  }
});
