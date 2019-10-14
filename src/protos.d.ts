import * as $protobuf from "protobufjs";
/** Namespace whatsit. */
export namespace whatsit {

    /** Namespace gmail. */
    namespace gmail {

        /** Properties of an Email. */
        interface IEmail {

            /** Email from */
            from?: (string[]|null);

            /** Email to */
            to?: (string[]|null);

            /** Email subject */
            subject?: (string|null);

            /** Email listId */
            listId?: (string|null);

            /** Email body */
            body?: (string|null);
        }

        /** Represents an Email. */
        class Email implements IEmail {

            /**
             * Constructs a new Email.
             * @param [properties] Properties to set
             */
            constructor(properties?: whatsit.gmail.IEmail);

            /** Email from. */
            public from: string[];

            /** Email to. */
            public to: string[];

            /** Email subject. */
            public subject: string;

            /** Email listId. */
            public listId: string;

            /** Email body. */
            public body: string;

            /**
             * Creates a new Email instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Email instance
             */
            public static create(properties?: whatsit.gmail.IEmail): whatsit.gmail.Email;

            /**
             * Encodes the specified Email message. Does not implicitly {@link whatsit.gmail.Email.verify|verify} messages.
             * @param message Email message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: whatsit.gmail.IEmail, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Email message, length delimited. Does not implicitly {@link whatsit.gmail.Email.verify|verify} messages.
             * @param message Email message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: whatsit.gmail.IEmail, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Email message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Email
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whatsit.gmail.Email;

            /**
             * Decodes an Email message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Email
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): whatsit.gmail.Email;

            /**
             * Verifies an Email message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Email message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Email
             */
            public static fromObject(object: { [k: string]: any }): whatsit.gmail.Email;

            /**
             * Creates a plain object from an Email message. Also converts values to other types if specified.
             * @param message Email
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: whatsit.gmail.Email, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Email to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Thread. */
        interface IThread {

            /** Thread email */
            email?: (whatsit.gmail.IEmail[]|null);
        }

        /** Represents a Thread. */
        class Thread implements IThread {

            /**
             * Constructs a new Thread.
             * @param [properties] Properties to set
             */
            constructor(properties?: whatsit.gmail.IThread);

            /** Thread email. */
            public email: whatsit.gmail.IEmail[];

            /**
             * Creates a new Thread instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Thread instance
             */
            public static create(properties?: whatsit.gmail.IThread): whatsit.gmail.Thread;

            /**
             * Encodes the specified Thread message. Does not implicitly {@link whatsit.gmail.Thread.verify|verify} messages.
             * @param message Thread message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: whatsit.gmail.IThread, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Thread message, length delimited. Does not implicitly {@link whatsit.gmail.Thread.verify|verify} messages.
             * @param message Thread message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: whatsit.gmail.IThread, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Thread message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Thread
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whatsit.gmail.Thread;

            /**
             * Decodes a Thread message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Thread
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): whatsit.gmail.Thread;

            /**
             * Verifies a Thread message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Thread message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Thread
             */
            public static fromObject(object: { [k: string]: any }): whatsit.gmail.Thread;

            /**
             * Creates a plain object from a Thread message. Also converts values to other types if specified.
             * @param message Thread
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: whatsit.gmail.Thread, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Thread to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
