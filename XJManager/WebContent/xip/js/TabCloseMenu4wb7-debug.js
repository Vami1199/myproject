/**
 * Plugin for adding a close context menu to tabs. Note that the menu respects
 * the closable configuration on the tab. As such, commands like remove others
 * and remove all will not remove items that are not closable.
 */
Ext.define('Ext.ux.TabCloseMenu', {
    alias: 'plugin.tabclosemenu',

    mixins: {
        observable: 'Ext.util.Observable'
    },

    /**
     * @cfg {String} closeTabText
     * The text for closing the current tab.
     */
    closeTabText: XipLang.tab_close_current,

    /**
     * @cfg {Boolean} showCloseOthers
     * Indicates whether to show the 'Close Others' option.
     */
    showCloseOthers: true,

    /**
     * @cfg {String} closeOthersTabsText
     * The text for closing all tabs except the current one.
     */
    closeOthersTabsText: XipLang.tab_close_other,

    /**
     * @cfg {Boolean} showCloseAll
     * Indicates whether to show the 'Close All' option.
     */
    showCloseAll: true,

    /**
     * @cfg {String} closeAllTabsText
     * <p>The text for closing all tabs.
     */
    closeAllTabsText:XipLang.tab_close_all,

    /**
     * @cfg {Array} extraItemsHead
     * An array of additional context menu items to add to the front of the context menu.
     */
    extraItemsHead: null,

    /**
     * @cfg {Array} extraItemsTail
     * An array of additional context menu items to add to the end of the context menu.
     */
    extraItemsTail: null,

    //public
    constructor: function (config) {
        this.addEvents(
            'aftermenu',
            'beforemenu');

        this.mixins.observable.constructor.call(this, config);
    },

    init : function(tabpanel){
        this.tabPanel = tabpanel;
        this.tabBar = tabpanel.down("tabbar");

        this.mon(this.tabPanel, {
            scope: this,
            afterlayout: this.onAfterLayout,
            single: true
        });
    },

    onAfterLayout: function() {
        this.mon(this.tabBar.el, {
            scope: this,
            contextmenu: this.onContextMenu,
            delegate: '.x-tab'
        });
    },

    onBeforeDestroy : function(){
        Ext.destroy(this.menu);
        this.callParent(arguments);
    },

    // private
    onContextMenu : function(event, target){
        var me = this,
            menu = me.createMenu(),
            disableAll = true,
            disableOthers = true,
            tab = me.tabBar.getChildByElement(target),
            index = me.tabBar.items.indexOf(tab);

        this.item = me.tabPanel.getComponent(index);
        me.selectedTab = me.tabPanel.getComponent(index);
        menu.child('*[text="' + me.closeTabText + '"]').setDisabled(!me.item.closable);

        if (me.showCloseAll || me.showCloseOthers) {
            me.tabPanel.items.each(function(item) {
                if (item.closable) {
                    disableAll = false;
                    if (item != me.item) {
                        disableOthers = false;
                        return false;
                    }
                }
                return true;
            });

            if (me.showCloseAll) {
                menu.child('*[text="' + me.closeAllTabsText + '"]').setDisabled(disableAll);
            }

            if (me.showCloseOthers) {
                menu.child('*[text="' + me.closeOthersTabsText + '"]').setDisabled(disableOthers);
            }
        }

        event.preventDefault();
        me.fireEvent('beforemenu', menu, me.item, me);

        menu.showAt(event.getXY());
    },

    createMenu : function() {
        var me = this;

        if (!me.menu) {
            var items = [{
                text: me.closeTabText,
                scope: me,
                handler: me.onClose
            }];

            if (me.showCloseAll || me.showCloseOthers) {
                items.push('-');
            }

            if (me.showCloseOthers) {
                items.push({
                    text: me.closeOthersTabsText,
                    scope: me,
                    handler: me.onCloseOthers
                });
            }

            if (me.showCloseAll) {
                items.push({
                    text: me.closeAllTabsText,
                    scope: me,
                    handler: me.onCloseAll
                });
            }
            
            items.push('-');
            items.push({
                text: XipLang.tab_colse_collect,
                scope: me,
                handler: me.onCollectFunctions
            });
            
            items.push({
                text: XipLang.portal_refresh_btn,
                scope: me,
                handler: me.onTabRefresh
            });
            
            items.push('-');
            items.push({
                text: XipLang.tab_close_function_help,
                scope: me,
                handler: me.onShowFuncHelp
            });

            if (me.extraItemsHead) {
                items = me.extraItemsHead.concat(items);
            }

            if (me.extraItemsTail) {
                items = items.concat(me.extraItemsTail);
            }

            me.menu = Ext.create('Ext.menu.Menu', {
                items: items,
                listeners: {
                    hide: me.onHideMenu,
                    scope: me
                }
            });
        }

        return me.menu;
    },

    onHideMenu: function () {
        var me = this;

        me.item = null;
        me.fireEvent('aftermenu', me.menu, me);
    },

    onClose : function(){
        this.tabPanel.remove(this.selectedTab);
    },

    onCloseOthers : function(){
        this.doClose(true);
    },

    onCloseAll : function(){
        this.doClose(false);
    },

	doClose : function(excludeActive){
         var items = [];

         this.tabPanel.items.each(function(item){
             if(item.closable){
                 if(!excludeActive || item != this.selectedTab){
                     items.push(item);
                 }
             }
         }, this);

         Ext.each(items, function(item){
             this.tabPanel.remove(item);
         }, this);
     },
     
	onCollectFunctions : function(){
		try{
			var funId = '';
			
			var funUrl = this.selectedTab.bindFile;
			
			if(Ext.isEmpty(funUrl)){
				funId = '';
			}
			
			if(funUrl.indexOf('funId')!=-1){
				var tempArray = funUrl.split('funId=');
				funId = tempArray[1].split('&')[0];
			}
			
			if(Ext.isEmpty(funId) || funId=='undefined' || funId==undefined){
				Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.tab_close_not_collect);
				return;
			}
			
			Wb.request({
				url : 'm?xwl=xip/pub/favorite/data/saveFavorite',
				params:{funTreeId:funId, funName:this.selectedTab.title},
				success: function(response) {
				    Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.tab_close_collect_success,function(){
				    	app.indexPanel.items.items[0].refreshPorlet('favorite');
				    });
				}
			});
         	
    	 }catch(e){
    	 }
	},
	
	onTabRefresh:function(){
		var funUrl = this.selectedTab.bindFile;
	    if (Ext.String.endsWith(funUrl, ".xwl")) {
	    	Wb.open({
	    		url:"m?xwl=" + funUrl.slice(0, -4),
	    		title:this.selectedTab.title,
	    		reload:true,
	    		container:this.tabPanel});
	    } else {
	    	Wb.open({
		    	  url:funUrl,
		    	  title:this.selectedTab.title,
		    	  reload:true,
		    	  container:this.tabPanel});
	    }
	},
     
	onShowFuncHelp:function(){
		var funId = '';
		
		var funUrl = this.selectedTab.bindFile;
		
		if(Ext.isEmpty(funUrl)){
			funId = '';
		}
		
		if(funUrl.indexOf('funId')!=-1){
			var tempArray = funUrl.split('funId=');
			funId = tempArray[1].split('&')[0];
		}
		
		Xip.showFunHelpWin(funId, 'r', this.selectedTab.title);
	}
});
