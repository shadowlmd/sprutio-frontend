Ext.define 'FM.action.RemoteWebDav',
  extend: 'FM.overrides.Action'
  requires: [
    'FM.view.windows.WebDavConnectionsWindow'
  ]
  config:
    scale: "large"
    iconAlign: "top"
    iconCls: "fm-action-remote-webdav"
    text: t("Remote WebDav")
    handler: () ->
      FM.Logger.info('Run Action FM.action.RemoteWebDav', arguments)

      bottom_toolbar = Ext.ComponentQuery.query("bottom-panel")[0].getDockedItems("toolbar[dock='top']")[0]

      win = Ext.create "FM.view.windows.WebDavConnectionsWindow",
        taskBar: bottom_toolbar

      win.show()