Ext.define 'FM.model.File',
  extend: 'Ext.data.Model'
  fields: [
    { name: "is_dir", type: "boolean", defaultValue: false },
    { name: "is_link", type: "boolean", defaultValue: false },
    { name: "is_share", type: "boolean", defaultValue: false },
    { name: "is_share_write", type: "boolean", defaultValue: false },
    { name: "loaded", type: "boolean", defaultValue: false },
    { name: "name" },
    { name: "path" },
    { name: "src", defaultValue: undefined },
    { name: "ext", defaultValue: '' },
    { name: "owner" },
    { name: "base64", defaultValue: '' },
    { name: "color", defaultValue: false },
    { name: "mode" },
    { name: "size", type: "int", defaultValue: 0 },
    { name: "mtime", type: "date", dateFormat: "timestamp" },
    { name: "mtime_str" },
    { name: "pid" }
  ]