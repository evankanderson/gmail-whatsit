/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.whatsit = (function() {

    /**
     * Namespace whatsit.
     * @exports whatsit
     * @namespace
     */
    var whatsit = {};

    whatsit.gmail = (function() {

        /**
         * Namespace gmail.
         * @memberof whatsit
         * @namespace
         */
        var gmail = {};

        gmail.Email = (function() {

            /**
             * Properties of an Email.
             * @memberof whatsit.gmail
             * @interface IEmail
             * @property {Array.<string>|null} [from] Email from
             * @property {Array.<string>|null} [to] Email to
             * @property {string|null} [subject] Email subject
             * @property {string|null} [listId] Email listId
             * @property {string|null} [body] Email body
             */

            /**
             * Constructs a new Email.
             * @memberof whatsit.gmail
             * @classdesc Represents an Email.
             * @implements IEmail
             * @constructor
             * @param {whatsit.gmail.IEmail=} [properties] Properties to set
             */
            function Email(properties) {
                this.from = [];
                this.to = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Email from.
             * @member {Array.<string>} from
             * @memberof whatsit.gmail.Email
             * @instance
             */
            Email.prototype.from = $util.emptyArray;

            /**
             * Email to.
             * @member {Array.<string>} to
             * @memberof whatsit.gmail.Email
             * @instance
             */
            Email.prototype.to = $util.emptyArray;

            /**
             * Email subject.
             * @member {string} subject
             * @memberof whatsit.gmail.Email
             * @instance
             */
            Email.prototype.subject = "";

            /**
             * Email listId.
             * @member {string} listId
             * @memberof whatsit.gmail.Email
             * @instance
             */
            Email.prototype.listId = "";

            /**
             * Email body.
             * @member {string} body
             * @memberof whatsit.gmail.Email
             * @instance
             */
            Email.prototype.body = "";

            /**
             * Creates a new Email instance using the specified properties.
             * @function create
             * @memberof whatsit.gmail.Email
             * @static
             * @param {whatsit.gmail.IEmail=} [properties] Properties to set
             * @returns {whatsit.gmail.Email} Email instance
             */
            Email.create = function create(properties) {
                return new Email(properties);
            };

            /**
             * Encodes the specified Email message. Does not implicitly {@link whatsit.gmail.Email.verify|verify} messages.
             * @function encode
             * @memberof whatsit.gmail.Email
             * @static
             * @param {whatsit.gmail.IEmail} message Email message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Email.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.from != null && message.from.length)
                    for (var i = 0; i < message.from.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.from[i]);
                if (message.to != null && message.to.length)
                    for (var i = 0; i < message.to.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.to[i]);
                if (message.subject != null && message.hasOwnProperty("subject"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.subject);
                if (message.listId != null && message.hasOwnProperty("listId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.listId);
                if (message.body != null && message.hasOwnProperty("body"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.body);
                return writer;
            };

            /**
             * Encodes the specified Email message, length delimited. Does not implicitly {@link whatsit.gmail.Email.verify|verify} messages.
             * @function encodeDelimited
             * @memberof whatsit.gmail.Email
             * @static
             * @param {whatsit.gmail.IEmail} message Email message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Email.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Email message from the specified reader or buffer.
             * @function decode
             * @memberof whatsit.gmail.Email
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {whatsit.gmail.Email} Email
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Email.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.whatsit.gmail.Email();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.from && message.from.length))
                            message.from = [];
                        message.from.push(reader.string());
                        break;
                    case 2:
                        if (!(message.to && message.to.length))
                            message.to = [];
                        message.to.push(reader.string());
                        break;
                    case 3:
                        message.subject = reader.string();
                        break;
                    case 4:
                        message.listId = reader.string();
                        break;
                    case 5:
                        message.body = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Email message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof whatsit.gmail.Email
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {whatsit.gmail.Email} Email
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Email.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Email message.
             * @function verify
             * @memberof whatsit.gmail.Email
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Email.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.from != null && message.hasOwnProperty("from")) {
                    if (!Array.isArray(message.from))
                        return "from: array expected";
                    for (var i = 0; i < message.from.length; ++i)
                        if (!$util.isString(message.from[i]))
                            return "from: string[] expected";
                }
                if (message.to != null && message.hasOwnProperty("to")) {
                    if (!Array.isArray(message.to))
                        return "to: array expected";
                    for (var i = 0; i < message.to.length; ++i)
                        if (!$util.isString(message.to[i]))
                            return "to: string[] expected";
                }
                if (message.subject != null && message.hasOwnProperty("subject"))
                    if (!$util.isString(message.subject))
                        return "subject: string expected";
                if (message.listId != null && message.hasOwnProperty("listId"))
                    if (!$util.isString(message.listId))
                        return "listId: string expected";
                if (message.body != null && message.hasOwnProperty("body"))
                    if (!$util.isString(message.body))
                        return "body: string expected";
                return null;
            };

            /**
             * Creates an Email message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof whatsit.gmail.Email
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {whatsit.gmail.Email} Email
             */
            Email.fromObject = function fromObject(object) {
                if (object instanceof $root.whatsit.gmail.Email)
                    return object;
                var message = new $root.whatsit.gmail.Email();
                if (object.from) {
                    if (!Array.isArray(object.from))
                        throw TypeError(".whatsit.gmail.Email.from: array expected");
                    message.from = [];
                    for (var i = 0; i < object.from.length; ++i)
                        message.from[i] = String(object.from[i]);
                }
                if (object.to) {
                    if (!Array.isArray(object.to))
                        throw TypeError(".whatsit.gmail.Email.to: array expected");
                    message.to = [];
                    for (var i = 0; i < object.to.length; ++i)
                        message.to[i] = String(object.to[i]);
                }
                if (object.subject != null)
                    message.subject = String(object.subject);
                if (object.listId != null)
                    message.listId = String(object.listId);
                if (object.body != null)
                    message.body = String(object.body);
                return message;
            };

            /**
             * Creates a plain object from an Email message. Also converts values to other types if specified.
             * @function toObject
             * @memberof whatsit.gmail.Email
             * @static
             * @param {whatsit.gmail.Email} message Email
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Email.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.from = [];
                    object.to = [];
                }
                if (options.defaults) {
                    object.subject = "";
                    object.listId = "";
                    object.body = "";
                }
                if (message.from && message.from.length) {
                    object.from = [];
                    for (var j = 0; j < message.from.length; ++j)
                        object.from[j] = message.from[j];
                }
                if (message.to && message.to.length) {
                    object.to = [];
                    for (var j = 0; j < message.to.length; ++j)
                        object.to[j] = message.to[j];
                }
                if (message.subject != null && message.hasOwnProperty("subject"))
                    object.subject = message.subject;
                if (message.listId != null && message.hasOwnProperty("listId"))
                    object.listId = message.listId;
                if (message.body != null && message.hasOwnProperty("body"))
                    object.body = message.body;
                return object;
            };

            /**
             * Converts this Email to JSON.
             * @function toJSON
             * @memberof whatsit.gmail.Email
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Email.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Email;
        })();

        gmail.Thread = (function() {

            /**
             * Properties of a Thread.
             * @memberof whatsit.gmail
             * @interface IThread
             * @property {Array.<whatsit.gmail.IEmail>|null} [email] Thread email
             */

            /**
             * Constructs a new Thread.
             * @memberof whatsit.gmail
             * @classdesc Represents a Thread.
             * @implements IThread
             * @constructor
             * @param {whatsit.gmail.IThread=} [properties] Properties to set
             */
            function Thread(properties) {
                this.email = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Thread email.
             * @member {Array.<whatsit.gmail.IEmail>} email
             * @memberof whatsit.gmail.Thread
             * @instance
             */
            Thread.prototype.email = $util.emptyArray;

            /**
             * Creates a new Thread instance using the specified properties.
             * @function create
             * @memberof whatsit.gmail.Thread
             * @static
             * @param {whatsit.gmail.IThread=} [properties] Properties to set
             * @returns {whatsit.gmail.Thread} Thread instance
             */
            Thread.create = function create(properties) {
                return new Thread(properties);
            };

            /**
             * Encodes the specified Thread message. Does not implicitly {@link whatsit.gmail.Thread.verify|verify} messages.
             * @function encode
             * @memberof whatsit.gmail.Thread
             * @static
             * @param {whatsit.gmail.IThread} message Thread message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Thread.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.email != null && message.email.length)
                    for (var i = 0; i < message.email.length; ++i)
                        $root.whatsit.gmail.Email.encode(message.email[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Thread message, length delimited. Does not implicitly {@link whatsit.gmail.Thread.verify|verify} messages.
             * @function encodeDelimited
             * @memberof whatsit.gmail.Thread
             * @static
             * @param {whatsit.gmail.IThread} message Thread message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Thread.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Thread message from the specified reader or buffer.
             * @function decode
             * @memberof whatsit.gmail.Thread
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {whatsit.gmail.Thread} Thread
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Thread.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.whatsit.gmail.Thread();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.email && message.email.length))
                            message.email = [];
                        message.email.push($root.whatsit.gmail.Email.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Thread message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof whatsit.gmail.Thread
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {whatsit.gmail.Thread} Thread
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Thread.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Thread message.
             * @function verify
             * @memberof whatsit.gmail.Thread
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Thread.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.email != null && message.hasOwnProperty("email")) {
                    if (!Array.isArray(message.email))
                        return "email: array expected";
                    for (var i = 0; i < message.email.length; ++i) {
                        var error = $root.whatsit.gmail.Email.verify(message.email[i]);
                        if (error)
                            return "email." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Thread message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof whatsit.gmail.Thread
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {whatsit.gmail.Thread} Thread
             */
            Thread.fromObject = function fromObject(object) {
                if (object instanceof $root.whatsit.gmail.Thread)
                    return object;
                var message = new $root.whatsit.gmail.Thread();
                if (object.email) {
                    if (!Array.isArray(object.email))
                        throw TypeError(".whatsit.gmail.Thread.email: array expected");
                    message.email = [];
                    for (var i = 0; i < object.email.length; ++i) {
                        if (typeof object.email[i] !== "object")
                            throw TypeError(".whatsit.gmail.Thread.email: object expected");
                        message.email[i] = $root.whatsit.gmail.Email.fromObject(object.email[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Thread message. Also converts values to other types if specified.
             * @function toObject
             * @memberof whatsit.gmail.Thread
             * @static
             * @param {whatsit.gmail.Thread} message Thread
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Thread.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.email = [];
                if (message.email && message.email.length) {
                    object.email = [];
                    for (var j = 0; j < message.email.length; ++j)
                        object.email[j] = $root.whatsit.gmail.Email.toObject(message.email[j], options);
                }
                return object;
            };

            /**
             * Converts this Thread to JSON.
             * @function toJSON
             * @memberof whatsit.gmail.Thread
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Thread.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Thread;
        })();

        return gmail;
    })();

    return whatsit;
})();

module.exports = $root;
