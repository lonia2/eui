Ext.define('Eui.sample.view.template.tmp002.TMP002V02', {
    extend: 'eui.grid.Panel',
    xtype: 'TMP002V02',
    margin: 10,
    height: 400,
    plugins: {
        ptype: 'cellediting',   // 셀에디터를 추가.
        clicksToEdit: 2         // 더블클릭을 통해 에디터로 변환됨.
    },
    selModel: {     // 그리로우를 클릭시 체크박스를 통해 선택되며 체크와 체크해제
        selType: 'checkboxmodel'
    },

    listeners: {                // ViewController클래스에 정의됨.
        select: 'onGridSelect'
    },

    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '사용자',
            dataIndex: 'USEPRSN_NM',
            editor: {
                bind: "{customerRecord.USEPRSN_NM}",
                xtype: 'euitext'
            }
        },
        {
            text: 'To-do List항목',
            dataIndex: 'ITEM',
            editor: {
                xtype: 'euitext'
            }
        },
        {
            xtype: 'euicheckcolumn',
            text: 'To-do List항목',
            dataIndex: 'CHK_ITEM'
        },
        {
            text: '조건',
            dataIndex: 'CNDT',
            editor: {
                xtype: 'euitext'
            }
        },
        {
            text: '기준일자',
            dataIndex: 'STD_DT',
            editor: {
                xtype: 'euinumber'
            }
        },
        {
            text: '메시지',
            dataIndex: 'MSG',
            editor: {
                xtype: 'euitext'
            }
        },
        {
            // "OUTPUT_DT" : "20101011",
            text: 'OUTPUT_DT',
//            format: 'Y.m.d',
            xtype: 'euidatecolumn',
            dataIndex: 'OUTPUT_DT',
            editor: {
                xtype: 'euidate'
            }
        },
        {
//            "INPUT_DT" : "10/12/2012",
            text: '입력',
            xtype: 'euidatecolumn',
            dataIndex: 'INPUT_DT',
            editor: {
                allowBlank: false,
                xtype: 'euidate'
            }
        },
        {
            // "UPDATE_DT" : "2012-02-19",
            text: '수정',
            xtype: 'euidatecolumn',
            dataIndex: 'UPDATE_DT',
            editor: {
                xtype: 'euidate'
            }
        },
        {
            // "RELEASE_DT" : "2012-01-10 13:12:34"
            text: '수정',
            format: 'Y-m-d H:i:s',
            xtype: 'euidatecolumn',
            dataIndex: 'RELEASE_DT',
            editor: {
                xtype: 'euidate'
            }
        }
    ]
});