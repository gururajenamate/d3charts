/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "d3charts/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("d3charts.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");


                var url = "/proxy/http/<server>:<port>/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
//		var oModel = new sap.ui.model.odata.ODataModel(url, true, "<user>", "<password>");
//		oView.setModel(oModel);

		// Using a local model for offline development
		var oModel = new sap.ui.model.json.JSONModel("model/hana-rpt-nav.json");
		sap.ui.getCore().setModel(oModel, "reports");
		
		var gModel = new sap.ui.model.json.JSONModel("model/minigauges.json");
		sap.ui.getCore().setModel(gModel, "gauges");
		var gModel = new sap.ui.model.json.JSONModel("model/performance-comparison.json");
		sap.ui.getCore().setModel(gModel, "comparison");
		
		
		gModel = new sap.ui.model.json.JSONModel("model/growth-regions-scatter.json");
		sap.ui.getCore().setModel(gModel, "growth-regions-scatter");
		
		gModel = new sap.ui.model.json.JSONModel("model/growth-segment-scatter.json");
		sap.ui.getCore().setModel(gModel, "growth-segment-scatter");
		
		gModel = new sap.ui.model.json.JSONModel("model/growth-regions-details.json");
		sap.ui.getCore().setModel(gModel, "growth-regions-details");
		
		gModel = new sap.ui.model.json.JSONModel("model/inprocess.json");
		sap.ui.getCore().setModel(gModel, "inprocess");
		
		gModel = new sap.ui.model.json.JSONModel("model/top20deals.json");
		sap.ui.getCore().setModel(gModel, "top20deals");
		
		gModel = new sap.ui.model.json.JSONModel("model/top10-regions-details.json");
		sap.ui.getCore().setModel(gModel, "top10-regions-details");
		
		
            }
        });
    }
);