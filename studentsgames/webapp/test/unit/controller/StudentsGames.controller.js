/*global QUnit*/

sap.ui.define([
	"studentsgames/controller/StudentsGames.controller"
], function (Controller) {
	"use strict";

	QUnit.module("StudentsGames Controller");

	QUnit.test("I should test the StudentsGames controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
