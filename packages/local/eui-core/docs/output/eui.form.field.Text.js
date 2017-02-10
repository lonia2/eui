Ext.data.JsonP.eui_form_field_Text({"tagname":"class","name":"eui.form.field.Text","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Text.js","href":"Text.html#eui-form-field-Text"}],"aliases":{"widget":["euitext"]},"alternateClassNames":[],"extends":"Ext.form.field.Text","mixins":[],"requires":[],"uses":[],"members":[{"name":"cellCls","tagname":"property","owner":"eui.form.field.Text","id":"property-cellCls","meta":{"private":true}},{"name":"fieldStyle","tagname":"property","owner":"eui.form.field.Text","id":"property-fieldStyle","meta":{"private":true}},{"name":"width","tagname":"property","owner":"eui.form.field.Text","id":"property-width","meta":{"private":true}}],"code_type":"ext_define","id":"class-eui.form.field.Text","short_doc":"Summary\n\nExt.form.field.Text 확장. ...","component":false,"superclasses":["Ext.form.field.Text"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.form.field.Text<div class='subclass '><strong>eui.form.field.Text</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Text.html#eui-form-field-Text' target='_blank'>Text.js</a></div></pre><div class='doc-contents'><h2>Summary</h2>\n\n<p>Ext.form.field.Text 확장. 스타일 적용</p>\n\n<h2>사용예</h2>\n\n<pre><code> fieldLabel: '텍스트',\n xtype: 'euitext',\n bind: '{RECORD.TEXTFIELD}'\n</code></pre>\n\n<h1>Sample</h1>\n\n<p>Ext.form.field.Checkbox를 확장했다. 기존 클래스가 true, false, 1, on을 사용한다면\n이 클래스는 Y와 N 두가지를 사용한다.</p>\n\n<pre class='inline-example '><code>Ext.define('Panel', {\n     extend: '<a href=\"#!/api/eui.form.Panel\" rel=\"eui.form.Panel\" class=\"docClass\">eui.form.Panel</a>',\n     defaultListenerScope: true,\n     viewModel: {\n\n     },\n     tableColumns: 1,\n     items: [\n        {\n          fieldLabel: '텍스트',\n          itemId: 'formfield',\n          xtype: 'euitext',\n          bind: '{RECORD.TEXTFIELD}'\n        },\n        {\n         fieldLabel: '비밀번호',\n         xtype: 'euitext',\n         inputType: 'password',\n         bind: '{RECORD.TEXTFIELD}'\n        }\n     ],\n     bbar: [\n         {\n             text: '서버로전송',\n             xtype: 'euibutton',\n             handler: 'onSaveMember'\n         }\n    ],\n\n    listeners : {\n         render: 'setRecord'\n    },\n\n    setRecord: function () {\n         this.getViewModel().set('RECORD', Ext.create('Ext.data.Model', {\n             TEXTFIELD : '대한민국'\n          }));\n    },\n\n    onSaveMember: function () {\n         var data = this.getViewModel().get('RECORD').getData();\n         <a href=\"#!/api/eui.Util-method-CommonAjax\" rel=\"eui.Util-method-CommonAjax\" class=\"docClass\">Util.CommonAjax</a>({\n             method: 'POST',\n             url: 'resources/data/success.json',\n             params: {\n                 param: data\n             },\n             pCallback: function (v, params, result) {\n                 if (result.success) {\n                     Ext.Msg.alert('저장성공', '정상적으로 저장되었습니다.');\n                 } else {\n                     Ext.Msg.alert('저장실패', '저장에 실패했습니다...');\n                 }\n             }\n        });\n     }\n });\n\n Ext.create('Panel',{\n     width: 300,\n     renderTo: Ext.getBody()\n });\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cellCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.Text'>eui.form.field.Text</span><br/><a href='source/Text.html#eui-form-field-Text-property-cellCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.Text-property-cellCls' class='name expandable'>cellCls</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;fo-table-row-td&#39;</code></p></div></div></div><div id='property-fieldStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.Text'>eui.form.field.Text</span><br/><a href='source/Text.html#eui-form-field-Text-property-fieldStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.Text-property-fieldStyle' class='name expandable'>fieldStyle</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{display: &#39;inherit&#39;}</code></p></div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.Text'>eui.form.field.Text</span><br/><a href='source/Text.html#eui-form-field-Text-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.Text-property-width' class='name expandable'>width</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;100%&#39;</code></p></div></div></div></div></div></div></div>","meta":{}});