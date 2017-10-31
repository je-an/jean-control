// jscs:disable
// jshint ignore:start
define([
    "Control"
], function (Control) {
    describe('Control.spec.js', function () {
        var instance, containerId = "container-id";
        describe("Control", function () {
            it("Is defined", function () {
                expect(Control).not.toBeUndefined();
            });
            it("Provides a private variable <this._options> for all inheriting classes", function () {
                var c = new Control({}, { containerId: containerId });
                expect(c._options).not.toBeUndefined();
            });
            it("Provides a private variable <this._element> for all inheriting classes", function () {
                var c = new Control({}, { containerId: containerId });
                expect(c._element).not.toBeUndefined();
            });
            it("Provides a private variable <this._container> for all inheriting classes", function () {
                var c = new Control({}, { containerId: containerId });
                expect(c._container).not.toBeUndefined();
            });
            it("Merges the user provided options which the default options", function () {
                var instance = new Control({ id: "id" }, { containerId: containerId, name: "name" });
                expect(instance._options.id).toEqual("id");
                expect(instance._options.name).toEqual("name");
            });
            it("Throws exception, if constructor is called without parameters", function () {
                try {
                    instance = new Control();
                } catch (e) {
                    expect(e instanceof Error).toBe(true);
                }
            });
            it("Throws exception, if options are not an object", function () {
                try {
                    instance = new Control("", {});
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("Throws exception, if defaultOptions are not an object", function () {
                try {
                    instance = new Control({}, "");
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("Throws exception, if no containerId is passed", function () {
                try {
                    instance = new Control({}, {});
                } catch (e) {
                    expect(e instanceof Error).toBe(true);
                }
            });
            afterEach(function () {
                $("#" + containerId).remove();
            });
        });
        describe("After creation,", function () {
            it("the container element is part of the DOM", function () {
                var instance = new Control({}, { containerId: containerId });
                instance.create();
                expect($("#" + containerId).length).toEqual(1);
            });
            it("the control element is part of the DOM", function () {
                var instance = new Control({}, { containerId: containerId });
                instance._element = $("<div id='dummy'></div>");
                instance.create();
                expect($("#dummy").length).toEqual(1);
            });
            afterEach(function () {
                $("#" + containerId).remove();
            });
        });
    });
});

