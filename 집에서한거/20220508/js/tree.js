
'use strict';
var tree_custom = {
    init: function() {
        $('#dragTree').jstree({
    		'core' : {
    			'check_callback' : true,
    			'themes' : {
    				'responsive': false
    			}
    		},
            'types' : {
                'default' : {
                    'icon' : 'icofont icofont-folder  font-theme'
                },
                'file' : {
                    'icon' : 'icofont icofont-file-alt font-dark'
                }
            },
            'plugins' : ['types', 'dnd']
        }).bind("select_node.jstree", function (e, data) {
            var href = data.node.a_attr.href;
            document.location.href = href;
          });
    }
};
(function($) {
    "use strict";
    tree_custom.init()
})(jQuery);

