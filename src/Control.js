define(["jquery", "TypeCheck"], function ($, TypeCheck) {
    /**
     * Abstract class for all html controls within jean environment
     * Constructor gets two parameters: options and defaultOptions.
     * This parameters will be merged and provided to the inheriting
     * class as this._options.
     * @alias Control 
     * @constructor
     * @abstract 
     * @throws {TypeError} - If options or defaultOptions are undefined
     * @throws {TypeError} - If options.containerId is not provided
     * @throws {Error} - If control is not appended to page
     * @param {Object} options - options object
     * @param {Object} defaultOptions - default options object
     * @param {Object} defaultOptions.containerId - Id of the container, which shall contain the control
     */
    var Control = function (options, defaultOptions) {
        if (!TypeCheck.isObject(options) && !TypeCheck.isObject(defaultOptions)) {
            throw new TypeError("options or defaultOptions are not vaild");
        }
        if (!TypeCheck.isString(defaultOptions.containerId)) {
            throw new TypeError("defaultOptions.containerId must be provided!");
        };
        // Fuses the user provided options with the default options of the control
        this._options = $.extend(true, defaultOptions, options);
        // Contains the html markup, which will be injected into document
        this._element = null;
        // The container element
        this._container = null;
    };
    /**
     * Creates the inheriting control element
     * @returns {Boolean} - True if control is created and appended to DOM, false otherwise
     */
    Control.prototype.create = function () {
        // Inserts the container element to the DOM
        var isAppended = this._insertContainer();
        if (!isAppended) {
            throw new Error("Control is not appended to page");
        }
        this._container.append(this._element);
        return isAppended;
    };
    /**
     * Inserts the control container element to the DOM
     * @private
     * @returns {Boolean} - True if the container element is appended, false otherwise
     */
    Control.prototype._insertContainer = function () {
        var id = this._options.containerId, isInserted = false, container = $("#" + id), element;
        if (container.length === 1) {
            isInserted = true;
            this._container = container;
        } else {
            this._container = $("<section id='" + id + "'></section>");
            element = $(document.body).append(this._container);
            isInserted = (element.length === 1) ? true : false;
        }
        return isInserted;
    };
    return Control;
});