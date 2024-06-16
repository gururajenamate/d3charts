jQuery.sap.registerModulePath("d3charts.StackedBarChart", "controls/StackedBarChart");
jQuery.sap.require("d3charts.StackedBarChart");
jQuery.sap.registerModulePath("d3charts.StackedBarChartItem", "controls/StackedBarChart");
jQuery.sap.require("d3charts.StackedBarChartItem");
jQuery.sap.registerModulePath("d3charts.ScatterPlot", "controls/ScatterPlot");
jQuery.sap.require("d3charts.ScatterPlot");
jQuery.sap.registerModulePath("d3charts.ScatterPlotItem", "controls/StackedBarChart");
jQuery.sap.require("d3charts.ScatterPlotItem");

sap.ui.controller("d3charts.controller.Main", {
	
	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},
	
	handleNavBack : function (evt) { 
		this.nav.back("Master"); 
	},

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Growth
*/
	onInit: function() {
		this._rebindAll();
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Growth
*/
	onBeforeRendering: function() {
		console.log("d3charts.view.Growth.onBeforeRendering()");
	},
	
	
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Growth
*/
	onAfterRendering: function() {
		//this._rebindAll();
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Growth
*/
//	onExit: function() {
//
//	}
	
	
	_rebindAll : function() {
		console.log("d3charts.view.Growth._rebindAll");
		var oStackedBarHolder = this.byId("RegionStackedBarChartHolder");
		var oStackedBarItem = new d3charts.StackedBarChartItem({quarter:"{quarter}", values:"{values}"});
		/* new  chart */
		var oStackedBar = new d3charts.StackedBarChart({
			items: {path : "/buckets", template : oStackedBarItem}
		});
		
		//console.log("d3charts.views.launchPad._rebindAll: setting model");
		var oModel = sap.ui.getCore().getModel("growth-regions-scatter");
		
		oStackedBar.setModel(oModel);
		oStackedBarHolder.addItem(oStackedBar);
		
		var oScatterPlotHolder = this.byId("RegionScatterPlotHolder");
		var oScatterPlotItem = new d3charts.ScatterPlotItem({quarter:"{quarter}", values:"{values}"});
		/* new  chart */
		var oScatterPlot = new d3charts.ScatterPlot({
			items: {path : "/buckets", template : oScatterPlotItem}
		});
		
		//var oModel = sap.ui.getCore().getModel("growth-regions-scatter");
		
		oScatterPlot.setModel(oModel);
		oScatterPlotHolder.addItem(oScatterPlot);
		
		
		oStackedBarHolder = this.byId("SegmentStackedBarChartHolder");
		oStackedBarItem = new d3charts.StackedBarChartItem({quarter:"{quarter}", values:"{values}"});
		/* new  chart */
		oStackedBar = new d3charts.StackedBarChart({
			items: {path : "/buckets", template : oStackedBarItem}
		});
		
		var oModel = sap.ui.getCore().getModel("growth-segment-scatter");
		
		oStackedBar.setModel(oModel);
		oStackedBarHolder.addItem(oStackedBar);
		
		oScatterPlotHolder = this.byId("SegmentScatterPlotHolder");
		oScatterPlotItem = new d3charts.ScatterPlotItem({quarter:"{quarter}", values:"{values}"});
		/* new  chart */
		oScatterPlot = new d3charts.ScatterPlot({
			items: {path : "/buckets", template : oScatterPlotItem}
		});
		
		//oModel = sap.ui.getCore().getModel("growth-segment-scatter");
		
		oScatterPlot.setModel(oModel);
		oScatterPlotHolder.addItem(oScatterPlot);

		

	},

});