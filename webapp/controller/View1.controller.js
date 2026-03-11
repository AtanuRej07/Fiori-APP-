sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/m/MessageToast",
    ],
    function (Controller, Filter, FilterOperator, MessageToast) {
        "use strict";

        return Controller.extend("nwproductsdata.controller.View1", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData(sap.ui.require.toUrl("nwproductsdata/model/demoData.json"));
                
                // Attach to component so Detail view can access it
                this.getOwnerComponent().setModel(oModel);
            },

            onFilterPress: function () {
                var sKey = this.byId("idMainTabBar").getSelectedKey();
                var sTableId, sStatusId, sTypeId;

                // Determine which controls to use based on the active tab
                if (sKey === "employee") {
                    sTableId = "idTableEmployee";
                    sStatusId = "idStatusFilterEmployee";
                    sTypeId = "idTypeFilterEmployee";
                } else if (sKey === "sbu") {
                    sTableId = "idTableSBU";
                    sStatusId = "idStatusFilterSBU";
                    sTypeId = "idTypeFilterSBU";
                } else {
                    MessageToast.show("Filtering not available for this tab.");
                    return;
                }

                var oTable = this.byId(sTableId);
                var oBinding = oTable.getBinding("items");
                var aFilters = [];

                var sStatus = this.byId(sStatusId).getSelectedKey();
                var sType = this.byId(sTypeId).getSelectedKey();

                if (sStatus !== "All") {
                    aFilters.push(new Filter("Status", FilterOperator.EQ, sStatus));
                }
                if (sType !== "All") {
                    aFilters.push(new Filter("PropertyType", FilterOperator.EQ, sType));
                }

                oBinding.filter(aFilters);
            },

            onRowPress: function (oEvent) {
                var oCtx = oEvent.getSource().getBindingContext();
                var sPath = oCtx.getPath();
                var sId = sPath.split("/").pop();

                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("detail", {
                    requestId: sId
                });
            }
        });
    }
);