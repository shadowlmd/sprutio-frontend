// Generated by CoffeeScript 1.11.1
Ext.define('FM.view.forms.CreateArchiveForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.create-archive-form',
  cls: 'fm-create-archive-form',
  items: [],
  bodyStyle: {
    background: 'none'
  },
  requires: ['Ext.form.RadioGroup', 'Ext.form.field.Text', 'Ext.form.field.Radio'],
  initComponent: function() {
    FM.Logger.log('FM.view.forms.CreateArchiveForm init');
    this.items = [];
    this.items.push({
      xtype: 'textfield',
      name: 'archive-file-name',
      cls: 'archive-file-name',
      fieldLabel: t("Archive Name"),
      labelAlign: 'top',
      allowBlank: false,
      minLength: 1,
      maxLength: 255,
      enforceMaxLength: 255,
      regex: /^[a-zA-Za-яА-ЯйЙёЁ.0-9\-_]{1,64}$/,
      regexText: t("Incorrect archive name"),
      anchor: '100%',
      listeners: {
        change: (function(_this) {
          return function(field, newValue, oldValue) {
            return _this.formFieldHandler(field, newValue, oldValue);
          };
        })(this)
      }
    });
    this.items.push({
      xtype: 'textfield',
      name: 'archive-path-name',
      cls: 'archive-path-name',
      fieldLabel: t("Archive Path"),
      labelAlign: 'top',
      allowBlank: false,
      minLength: 1,
      maxLength: 255,
      enforceMaxLength: 255,
      regex: /^[a-zA-Za-яА-ЯйЙёЁ.0-9\-_\/]{1,255}$/,
      regexText: t("Incorrect archive directory"),
      anchor: '100%',
      listeners: {
        change: (function(_this) {
          return function(field, newValue, oldValue) {
            return _this.formFieldHandler(field, newValue, oldValue);
          };
        })(this)
      }
    });
    this.items.push({
      xtype: 'radiogroup',
      cls: 'fm-archive-type',
      layout: {
        type: 'hbox',
        align: 'middle',
        pack: 'center'
      },
      bodyStyle: {
        background: 'none'
      },
      padding: '15 0 8 0',
      items: [
        {
          boxLabel: t("Zip"),
          name: 'type',
          inputValue: 'zip',
          checked: true,
          padding: '3 20 3 20'
        }, {
          boxLabel: t("Tar.GZ"),
          name: 'type',
          inputValue: 'gzip',
          padding: '3 20 3 20'
        }, {
          boxLabel: t("Tar.BZ2"),
          name: 'type',
          inputValue: 'bz2',
          padding: '3 20 3 20'
        }, {
          boxLabel: t("Tar"),
          name: 'type',
          inputValue: 'tar',
          padding: '3 20 3 20'
        }
      ]
    });
    return this.callParent(arguments);
  },
  formFieldHandler: function(field, newValue, oldValue) {
    FM.Logger.debug('formFieldHandler() called', arguments, this);
    if (field.regex.test(newValue)) {
      return this.ownerCt.create_btn.setDisabled(false);
    } else {
      return this.ownerCt.create_btn.setDisabled(true);
    }
  }
});
