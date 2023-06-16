/*global QUnit*/

sap.ui.define([
	"studentsgames/controller/studentsgames.controller"
], function (Controller) {
	"use strict";

	QUnit.module("studentsgames Controller");

	QUnit.test("I should test the studentsgames controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
