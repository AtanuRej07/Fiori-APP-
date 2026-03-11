sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("nwproductsdata.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // 1. Create the settings model for the layout
            var oSettingsModel = new JSONModel({
                layout: "OneColumn" 
            });
            
            // 2. Set the model to the component with the name "settings"
            this.setModel(oSettingsModel, "settings");

            // create the views based on the url/hash
            this.getRouter().initialize();
        }
    });
});