Ext.data.JsonP.eui_form_RadioGroup({"tagname":"class","name":"eui.form.RadioGroup","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"RadioGroup.js","href":"RadioGroup.html#eui-form-RadioGroup"}],"aliases":{"widget":["euiradiogroup"]},"alternateClassNames":[],"extends":"Ext.form.RadioGroup","mixins":["eui.mixin.FormField"],"requires":[],"uses":[],"members":[{"name":"cellCls","tagname":"property","owner":"eui.form.RadioGroup","id":"property-cellCls","meta":{"private":true}},{"name":"defaultListenerScope","tagname":"property","owner":"eui.form.RadioGroup","id":"property-defaultListenerScope","meta":{"private":true}},{"name":"listeners","tagname":"property","owner":"eui.form.RadioGroup","id":"property-listeners","meta":{"private":true}},{"name":"mixinConfig","tagname":"property","owner":"eui.mixin.FormField","id":"property-mixinConfig","meta":{"private":true}},{"name":"width","tagname":"property","owner":"eui.form.RadioGroup","id":"property-width","meta":{"private":true}},{"name":"initComponent","tagname":"method","owner":"eui.form.RadioGroup","id":"method-initComponent","meta":{"private":true}},{"name":"setAllowBlank","tagname":"method","owner":"eui.mixin.FormField","id":"method-setAllowBlank","meta":{}},{"name":"setCheckboxGroupRadioGroupBindVar","tagname":"method","owner":"eui.mixin.FormField","id":"method-setCheckboxGroupRadioGroupBindVar","meta":{}},{"name":"setCustomDefaultValue","tagname":"method","owner":"eui.mixin.FormField","id":"method-setCustomDefaultValue","meta":{}}],"code_type":"ext_define","id":"class-eui.form.RadioGroup","short_doc":"Summary\n\nExt.form.RadioGroup 확장. ...","component":false,"superclasses":["Ext.form.RadioGroup"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.form.RadioGroup<div class='subclass '><strong>eui.form.RadioGroup</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/eui.mixin.FormField' rel='eui.mixin.FormField' class='docClass'>eui.mixin.FormField</a></div><h4>Files</h4><div class='dependency'><a href='source/RadioGroup.html#eui-form-RadioGroup' target='_blank'>RadioGroup.js</a></div></pre><div class='doc-contents'><h2>Summary</h2>\n\n<p>Ext.form.RadioGroup 확장. 스타일 적용</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cellCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.RadioGroup'>eui.form.RadioGroup</span><br/><a href='source/RadioGroup.html#eui-form-RadioGroup-property-cellCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.RadioGroup-property-cellCls' class='name expandable'>cellCls</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;fo-table-row-td&#39;</code></p></div></div></div><div id='property-defaultListenerScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.RadioGroup'>eui.form.RadioGroup</span><br/><a href='source/RadioGroup.html#eui-form-RadioGroup-property-defaultListenerScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.RadioGroup-property-defaultListenerScope' class='name expandable'>defaultListenerScope</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-listeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.RadioGroup'>eui.form.RadioGroup</span><br/><a href='source/RadioGroup.html#eui-form-RadioGroup-property-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.RadioGroup-property-listeners' class='name expandable'>listeners</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{afterrender: &#39;setCheckboxGroupRadioGroupBindVar&#39;}</code></p></div></div></div><div id='property-mixinConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/eui.mixin.FormField' rel='eui.mixin.FormField' class='defined-in docClass'>eui.mixin.FormField</a><br/><a href='source/FormField.html#eui-mixin-FormField-property-mixinConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.mixin.FormField-property-mixinConfig' class='name expandable'>mixinConfig</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.RadioGroup'>eui.form.RadioGroup</span><br/><a href='source/RadioGroup.html#eui-form-RadioGroup-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.RadioGroup-property-width' class='name expandable'>width</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;100%&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initComponent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.RadioGroup'>eui.form.RadioGroup</span><br/><a href='source/RadioGroup.html#eui-form-RadioGroup-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.RadioGroup-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setAllowBlank' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/eui.mixin.FormField' rel='eui.mixin.FormField' class='defined-in docClass'>eui.mixin.FormField</a><br/><a href='source/FormField.html#eui-mixin-FormField-method-setAllowBlank' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.mixin.FormField-method-setAllowBlank' class='name expandable'>setAllowBlank</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>폼필드의 allowBlank:false일 경우\n*를 표시하도록한다. ...</div><div class='long'><p>폼필드의 allowBlank:false일 경우\n*를 표시하도록한다.</p>\n</div></div></div><div id='method-setCheckboxGroupRadioGroupBindVar' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/eui.mixin.FormField' rel='eui.mixin.FormField' class='defined-in docClass'>eui.mixin.FormField</a><br/><a href='source/FormField.html#eui-mixin-FormField-method-setCheckboxGroupRadioGroupBindVar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.mixin.FormField-method-setCheckboxGroupRadioGroupBindVar' class='name expandable'>setCheckboxGroupRadioGroupBindVar</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>체크박스그룹과 라디오그룹에 바인드변수\n사용 편의를 위한 메소드. ...</div><div class='long'><p>체크박스그룹과 라디오그룹에 바인드변수\n사용 편의를 위한 메소드.</p>\n</div></div></div><div id='method-setCustomDefaultValue' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/eui.mixin.FormField' rel='eui.mixin.FormField' class='defined-in docClass'>eui.mixin.FormField</a><br/><a href='source/FormField.html#eui-mixin-FormField-method-setCustomDefaultValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.mixin.FormField-method-setCustomDefaultValue' class='name expandable'>setCustomDefaultValue</a>( <span class='pre'>value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>numberfield 등 폼필드\nbind설정에 경우 클래스 내부 기본값을 지워버리는 현상\n을 해결하기 위함. ...</div><div class='long'><p>numberfield 등 폼필드\nbind설정에 경우 클래스 내부 기본값을 지워버리는 현상\n을 해결하기 위함.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});