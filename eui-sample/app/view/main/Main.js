/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Eui.sample.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',
    requires: [
        'Eui.sample.view.grid.MergeGrid2'
//        'Eui.sample.view.grid.MergeGrid',
//        'Ext.plugin.Viewport',
//        'Ext.window.MessageBox',
//        'Eui.sample.view.main.MainController',
//        'Eui.sample.view.main.MainModel',
//        'Eui.sample.view.frame.Header',
//        'Eui.sample.view.frame.SideBar',
//        'Eui.sample.view.template.tmp008.TMP008V'
    ],

    controller: 'main',
    viewModel: {
        type:'main'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'simheader'
        },
        {
            flex: 1,
            xtype: 'container',
            layout: 'border',
            items: [
                {
                    xtype: 'sidebar',
                    region: 'west',
                    plugins: 'responsive',
                    responsiveConfig: {
                        'width < 800': {
                            width: 50
                        },

                        'width >= 800': {
                            width: 230
                        }
                    }
                },
                {
                    xtype: 'tabpanel',
                    id : 'contentPanel',
                    region: 'center',
                    items: [
                        {
                            title: 'HOME',
                            closable: true,
//                            xtype: 'sample-basic-grid'
                            xtype: 'sample-mergegrid2'
                        }
                    ]
                }
            ]
        }
    ]
});
