(function($){
var myflow = $.myflow;
	$.extend(true,myflow.config.tools.states,{
	 start: {
	    type: 'start',
	    name: {
	        text: '<<start>>'
	    },
	    text: {
	        text: '开始'
	    },
	    img: {
	        src: 'workflow/raphaelwf/script/layout/img/16/start.png',
	        width: 16,
	        height: 16
	    },
	    props: {
	        text: {
	            name: 'text',
	            label: '显示',
	            value: '',
	            editor: function(){
	                returnnewmyflow.editors.textEditor();
	            },
	            value: '开始'
	        },
	        wfdata: {
	            
	        }
	    }
	},
	end: {
	    type: 'end',
	    name: {
	        text: '<<end>>'
	    },
	    text: {
	        text: '结束'
	    },
	    img: {
	        src: 'workflow/raphaelwf/script/layout/img/16/end.png',
	        width: 16,
	        height: 16
	    },
	    props: {
	        text: {
	            name: 'text',
	            label: '显示',
	            value: '',
	            editor: function(){
	                returnnewmyflow.editors.textEditor();
	            },
	            value: '结束'
	        },
	        wfdata: {
	            
	        }
	    }
	},
	assign: {
	    type: 'assign',
	    name: {
	        text: '<<counter-sign>>'
	    },
	    text: {
	        text: '会签'
	    },
	    img: {
	        src: 'workflow/raphaelwf/script/layout/img/16/persons.png',
	        width: 16,
	        height: 16
	    },
	    props: {
	        text: {
	            name: 'text',
	            label: '显示',
	            value: '',
	            editor: function(){
	                returnnewmyflow.editors.textEditor();
	            },
	            value: '取消'
	        },
	        wfdata: {
	            
	        }
	    }
	},
	'copy': {
	    type: 'copy',
	    name: {
	        text: '<<copy>>'
	    },
	    text: {
	        text: '抄送'
	    },
	    img: {
	        src: 'workflow/raphaelwf/script/layout/img/16/copy.png',
	        width: 16,
	        height: 16
	    },
	    props: {
	        text: {
	            name: 'text',
	            label: '显示',
	            value: '',
	            editor: function(){
	                returnnewmyflow.editors.textEditor();
	            },
	            value: '错误'
	        },
	        wfdata: {
	            
	        }
	    }
	},
	'function': {
	    type: 'function',
	    name: {
	        text: '<<function>>'
	    },
	    text: {
	        text: '功能'
	    },
	    img: {
	        src: 'workflow/raphaelwf/script/layout/img/16/function.png',
	        width: 16,
	        height: 16
	    },
	    props: {
	        text: {
	            name: 'text',
	            label: '显示',
	            value: '',
	            editor: function(){
	                returnnewmyflow.editors.textEditor();
	            },
	            value: '功能'
	        },
	        wfdata: {
	            
	        }
	    }
	},
	fork: {
	    type: 'fork',
	    name: {
	        text: '<<fork>>'
	    },
	    text: {
	        text: '判断'
	    },
	    img: {
	        src: 'workflow/raphaelwf/script/layout/img/16/switch.png',
	        width: 16,
	        height: 16
	    },
	    props: {
	        text: {
	            name: 'text',
	            label: '显示',
	            value: '',
	            editor: function(){
	                returnnewmyflow.editors.textEditor();
	            },
	            value: '判断'
	        },
	        wfdata: {
	            
	        }
	    }
	},
	join: {
	    type: 'join',
	    name: {
	        text: '<<join>>'
	    },
	    text: {
	        text: '合并'
	    },
	    img: {
	        src: 'workflow/raphaelwf/script/layout/img/16/gateway_parallel.png',
	        width: 16,
	        height: 16
	    },
	    props: {
	        text: {
	            name: 'text',
	            label: '显示',
	            value: '',
	            editor: function(){
	                returnnewmyflow.editors.textEditor();
	            },
	            value: '合并'
	        },
	        wfdata: {
	            
	        }
	    }
	},
	task: {
	    type: 'task',
	    name: {
	        text: '<<task>>'
	    },
	    text: {
	        text: '任务'
	    },
	    img: {
	        src: 'workflow/raphaelwf/script/layout/img/16/person.png',
	        width: 16,
	        height: 16
	    },
	    props: {
	        text: {
	            name: 'text',
	            label: '显示',
	            value: '',
	            editor: function(){
	                returnnewmyflow.editors.textEditor();
	            },
	            value: '任务'
	        },
	        wfdata: {
	            
	        }
	    }
	}});
})(jQuery);