/**
 * Account object
 * @typedef {Object} account
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [address1]
 * @property {String} [address2]
 * @property {String} [address3]
 * @property {String} [businessPhone]
 * @property {String} [city]
 * @property {String} [country]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {Array<fieldValue>} [fieldValues]
 * @property {String} [id]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [postalCode]
 * @property {String} [province]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Contact object
 * @typedef {Object} contact
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [accountId]
 * @property {String} [accountName]
 * @property {String} [address1]
 * @property {String} [address2]
 * @property {String} [address3]
 * @property {String} [bouncebackDate]
 * @property {String} [businessPhone]
 * @property {String} [city]
 * @property {String} [country]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [emailAddress]
 * @property {String} [emailFormatPreference]
 * @property {String} [fax]
 * @property {Array<fieldValue>} [fieldValues]
 * @property {String} [firstName]
 * @property {String} [id]
 * @property {String} [isBounceback]
 * @property {String} [isSubscribed]
 * @property {String} [lastName]
 * @property {String} [mobilePhone]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [postalCode]
 * @property {String} [province]
 * @property {String} [salesPerson]
 * @property {String} [subscriptionDate]
 * @property {String} [title]
 * @property {String} [type]
 * @property {String} [unsubscriptionDate]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Custom object data record object
 * @typedef {Object} customObjectData
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [accountId]
 * @property {String} [contactId]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [customObjectRecordStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {Array<fieldValue>} [fieldValues]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [uniqueCode]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Custom object object
 * @typedef {Object} customObject
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [displayNameFieldId]
 * @property {String} [emailAddressFieldId]
 * @property {Array<customObjectField>} [fields]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [uniqueCodeFieldId]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Custom object field object
 * @typedef {Object} customObjectField
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [checkedValue]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [dataType]
 * @property {String} [defaultValue]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [displayType]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [internalName]
 * @property {String} [name]
 * @property {String} [optionListId]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [uncheckedValue]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Event registration data object
 * @typedef {Object} eventRegistrationData
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [accountId]
 * @property {String} [contactId]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [customObjectRecordStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {Array<fieldValue>} [fieldValues]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [isMapped]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [uniqueCode]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Event object
 * @typedef {Object} event
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [emailAddressFieldId]
 * @property {String} [eventGroupByFieldId]
 * @property {Array<customObjectField>} [fields]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {Array<eventSessionField>} [sessionFields]
 * @property {Array<eventSessionFieldValue>} [sessionFieldValues]
 * @property {Array<eventSession>} [sessions]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [uniqueCodeFieldId]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Event session fields object
 * @typedef {Object} eventSessionField
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [dataType]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [name]
 * @property {fieldOutputFormat} [outputFormat]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Event session field value object
 * @typedef {Object} eventSessionFieldValue
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sessionFieldId]
 * @property {String} [sessionId]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 * @property {String} [value]
 */

/**
 * Event session object
 * @typedef {Object} eventSession
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [name]
 * @property {number} [participantsLimit]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */
