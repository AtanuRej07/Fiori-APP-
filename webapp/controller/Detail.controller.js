sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(Controller) {
"use strict";

return Controller.extend("nwproductsdata.controller.Detail", {

handleClose: function () {
    window.location.hash = "";
},
onPropertyTypeChange: function(oEvent){

var key = oEvent.getSource().getSelectedKey();

this.byId("idImmovableSection").setVisible(false);

if(key === "Immovable"){
this.byId("idImmovableSection").setVisible(true);
}

},

onAcquireDisposeChange: function(oEvent){

var key = oEvent.getSource().getSelectedKey();

this.byId("idAcquiredSection").setVisible(false);
this.byId("idDisposedSection").setVisible(false);

if(key === "Acquire"){
this.byId("idAcquiredSection").setVisible(true);
}

if(key === "Dispose"){
this.byId("idDisposedSection").setVisible(true);
}

}

});
});