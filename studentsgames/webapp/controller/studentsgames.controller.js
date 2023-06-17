sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox) {
        "use strict";

        return Controller.extend("studentsgames.controller.studentsgames", {
            onInit: function () {
                var oModel = new sap.ui.model.odata.ODataModel("https://a03z.2.ucc.md:443/sap/opu/odata/sap/ZAS_13_GAMES_GW_SRV/");
            }
        });
    });
