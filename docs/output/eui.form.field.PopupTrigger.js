Ext.data.JsonP.eui_form_field_PopupTrigger({"tagname":"class","name":"eui.form.field.PopupTrigger","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"PopupTrigger.js","href":"PopupTrigger.html#eui-form-field-PopupTrigger"}],"aliases":{"widget":["sppopup"]},"alternateClassNames":[],"extends":"Ext.form.field.Text","mixins":[],"requires":[],"uses":[],"members":[{"name":"tempTitle","tagname":"cfg","owner":"eui.form.field.PopupTrigger","id":"cfg-tempTitle","meta":{"private":true}},{"name":"callBack","tagname":"property","owner":"eui.form.field.PopupTrigger","id":"property-callBack","meta":{"private":true}},{"name":"cellCls","tagname":"property","owner":"eui.form.field.PopupTrigger","id":"property-cellCls","meta":{"private":true}},{"name":"config","tagname":"property","owner":"eui.form.field.PopupTrigger","id":"property-config","meta":{}},{"name":"displayField","tagname":"property","owner":"eui.form.field.PopupTrigger","id":"property-displayField","meta":{"private":true}},{"name":"hideLabel","tagname":"property","owner":"eui.form.field.PopupTrigger","id":"property-hideLabel","meta":{"private":true}},{"name":"pConfigs","tagname":"property","owner":"eui.form.field.PopupTrigger","id":"property-pConfigs","meta":{"private":true}},{"name":"triggers","tagname":"property","owner":"eui.form.field.PopupTrigger","id":"property-triggers","meta":{"private":true}},{"name":"valueField","tagname":"property","owner":"eui.form.field.PopupTrigger","id":"property-valueField","meta":{"private":true}},{"name":"checkSingleResult","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-checkSingleResult","meta":{}},{"name":"getTempTitle","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-getTempTitle","meta":{}},{"name":"initComponent","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-initComponent","meta":{"private":true}},{"name":"onBlurHandler","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-onBlurHandler","meta":{}},{"name":"onTriggerCallback","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-onTriggerCallback","meta":{"private":true}},{"name":"onTriggerClick","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-onTriggerClick","meta":{"private":true}},{"name":"resetNextEditField","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-resetNextEditField","meta":{}},{"name":"resetValues","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-resetValues","meta":{"private":true}},{"name":"selectedRecord","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-selectedRecord","meta":{}},{"name":"setSingleRowCondition","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-setSingleRowCondition","meta":{}},{"name":"setSpecialKey","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-setSpecialKey","meta":{}},{"name":"setTempTitle","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-setTempTitle","meta":{}},{"name":"setValues","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-setValues","meta":{"private":true}},{"name":"setpopupConfig","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-setpopupConfig","meta":{}},{"name":"validateConfig","tagname":"method","owner":"eui.form.field.PopupTrigger","id":"method-validateConfig","meta":{}}],"code_type":"ext_define","id":"class-eui.form.field.PopupTrigger","component":false,"superclasses":["Ext.form.field.Text"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.form.field.Text<div class='subclass '><strong>eui.form.field.PopupTrigger</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger' target='_blank'>PopupTrigger.js</a></div></pre><div class='doc-contents'><p>팝업을 호출하고 선택된 값을 설정한다.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-tempTitle' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-cfg-tempTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-cfg-tempTitle' class='name expandable'>tempTitle</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-callBack' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-property-callBack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-property-callBack' class='name expandable'>callBack</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;onTriggerCallback&#39;</code></p></div></div></div><div id='property-cellCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-property-cellCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-property-cellCls' class='name expandable'>cellCls</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;fo-table-row-td&#39;</code></p></div></div></div><div id='property-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-property-config' class='name expandable'>config</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Custom Config Start ** ...</div><div class='long'><p><strong> Custom Config Start </strong>**</p>\n<p>Defaults to: <code>{tempTitle: null}</code></p></div></div></div><div id='property-displayField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-property-displayField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-property-displayField' class='name expandable'>displayField</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;ENG_VALUE&#39;</code></p></div></div></div><div id='property-hideLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-property-hideLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-property-hideLabel' class='name expandable'>hideLabel</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-pConfigs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-property-pConfigs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-property-pConfigs' class='name expandable'>pConfigs</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-triggers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-property-triggers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-property-triggers' class='name expandable'>triggers</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{search: {cls: &#39;x-form-search-trigger&#39;, handler: &#39;onTriggerClick&#39;, scope: &#39;this&#39;}}</code></p></div></div></div><div id='property-valueField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-property-valueField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-property-valueField' class='name expandable'>valueField</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;DT_CODE&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-checkSingleResult' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-checkSingleResult' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-checkSingleResult' class='name expandable'>checkSingleResult</a>( <span class='pre'>field</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>팝업 호출 전 한건인 경우 바로 설정한다. ...</div><div class='long'><p>팝업 호출 전 한건인 경우 바로 설정한다.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTempTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-cfg-tempTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-getTempTitle' class='name expandable'>getTempTitle</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of tempTitle. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/eui.form.field.PopupTrigger-cfg-tempTitle\" rel=\"eui.form.field.PopupTrigger-cfg-tempTitle\" class=\"docClass\">tempTitle</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onBlurHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-onBlurHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-onBlurHandler' class='name expandable'>onBlurHandler</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>검색어를 수정하고 떠나면 리셋한다. ...</div><div class='long'><p>검색어를 수정하고 떠나면 리셋한다.</p>\n</div></div></div><div id='method-onTriggerCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-onTriggerCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-onTriggerCallback' class='name expandable'>onTriggerCallback</a>( <span class='pre'>trigger, record, valueField, displayField</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>trigger</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>record</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>valueField</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>displayField</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-onTriggerClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-onTriggerClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-onTriggerClick' class='name expandable'>onTriggerClick</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-resetNextEditField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-resetNextEditField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-resetNextEditField' class='name expandable'>resetNextEditField</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>연계 설정된 컴포넌트를 찾아 리셋한다. ...</div><div class='long'><p>연계 설정된 컴포넌트를 찾아 리셋한다.</p>\n</div></div></div><div id='method-resetValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-resetValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-resetValues' class='name expandable'>resetValues</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-selectedRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-selectedRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-selectedRecord' class='name expandable'>selectedRecord</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Custom Config End ** ...</div><div class='long'><p><strong> Custom Config End </strong>**</p>\n</div></div></div><div id='method-setSingleRowCondition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-setSingleRowCondition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-setSingleRowCondition' class='name expandable'>setSingleRowCondition</a>( <span class='pre'></span> ) : {}<span class=\"signature\"></span></div><div class='description'><div class='short'>*\n트리거에 입력된 값을 params에 포함시킨다. ...</div><div class='long'><p>*\n트리거에 입력된 값을 params에 포함시킨다.\nsingleRowCheckParamName 는 외부에서 입력할 수 있고 기본값도 가진다.\n기본값은\nparams {\n     SEARCH_VALUE = \"입력된값\"\n}</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>{}</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSpecialKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-setSpecialKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-setSpecialKey' class='name expandable'>setSpecialKey</a>( <span class='pre'>field, e, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>엔터키 입력 처리. ...</div><div class='long'><p>엔터키 입력 처리.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>eOpts</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setTempTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-cfg-tempTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-setTempTitle' class='name expandable'>setTempTitle</a>( <span class='pre'>tempTitle</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of tempTitle. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/eui.form.field.PopupTrigger-cfg-tempTitle\" rel=\"eui.form.field.PopupTrigger-cfg-tempTitle\" class=\"docClass\">tempTitle</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tempTitle</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-setValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-setValues' class='name expandable'>setValues</a>( <span class='pre'>code, name, records</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>code</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>records</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li>select</li></ul></div></div></div><div id='method-setpopupConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-setpopupConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-setpopupConfig' class='name expandable'>setpopupConfig</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>*\n클래스 내부 기본 설정과 외부 설정을 합쳐야한다. ...</div><div class='long'><p>*\n클래스 내부 기본 설정과 외부 설정을 합쳐야한다.</p>\n</div></div></div><div id='method-validateConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.PopupTrigger'>eui.form.field.PopupTrigger</span><br/><a href='source/PopupTrigger.html#eui-form-field-PopupTrigger-method-validateConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.PopupTrigger-method-validateConfig' class='name expandable'>validateConfig</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>config의 유효성 체크. ...</div><div class='long'><p>config의 유효성 체크.</p>\n</div></div></div></div></div></div></div>","meta":{}});