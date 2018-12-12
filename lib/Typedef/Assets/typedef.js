/**
 * Campaign typedefs object
 * @typedef {Object} campaignElement
 * @type Object
 * @property {String} [accessAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [memberCount]
 * @property {String} [memberErrorCount]
 * @property {String} [name]
 * @property {Array<campaignOutputTerminal>} [outputTerminals]
 * @property {Array<String>} [permissions]
 * @property {Object} [position]
 * @property {String} [position.type]
 * @property {String} [position.x]
 * @property {String} [position.y]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Campaign output terminals object
 * @typedef {Object} campaignOutputTerminal
 * @type Object
 * @property {String} [accessAt]
 * @property {String} [connectedId]
 * @property {String} [connectedType]
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
 * @property {String} [sourceTemplateId]
 * @property {String} [terminalType]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Content section object
 * @typedef {Object} contentSection
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [contentHtml]
 * @property {String} [contentText]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {Array<form>} [forms]
 * @property {Array<hyperlink>} [hyperlinks]
 * @property {String} [id]
 * @property {Array<imageFile>} [images]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scope]
 * @property {Object} [size]
 * @property {String} [size.height]
 * @property {String} [size.type]
 * @property {String} [size.width]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Field value object
 * @typedef {Object} fieldValue
 * @type Object
 * @property {String} [id]
 * @property {String} [name]
 * @property {String} [type]
 * @property {String} [value]
 */

/**
 * Email object
 * @typedef {Object} email
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [archive]
 * @property {Array<importedFile>} [attachments]
 * @property {String} [bounceBackEmail]
 * @property {Array<contentSection>} [contentSections]
 * @property {Array<cloudComponentInstance>} [contentServiceInstances]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {Array<dynamicContent>} [dynamicContents]
 * @property {String} [emailFooterId]
 * @property {String} [emailGroupId]
 * @property {String} [emailHeaderId]
 * @property {String} [encodingId]
 * @property {Array<fieldMerge>} [fieldMerges]
 * @property {Array<importedFile>} [files]
 * @property {String} [folderId]
 * @property {Array<form>} [forms]
 * @property {Object} [htmlContent]
 * @property {String} [htmlContent.contentSource]
 * @property {String} [htmlContent.type]
 * @property {Array<hyperlink>} [hyperlinks]
 * @property {String} [id]
 * @property {Array<imageFile>} [images]
 * @property {String} [isContentProtected]
 * @property {String} [isPlainTextEditable]
 * @property {String} [isPrivate]
 * @property {String} [isTracked]
 * @property {String} [layout]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [plainText]
 * @property {String} [previewText]
 * @property {String} [renderMode]
 * @property {String} [replyToEmail]
 * @property {String} [replyToName]
 * @property {String} [scheduledFor]
 * @property {String} [senderEmail]
 * @property {String} [senderName]
 * @property {String} [sendPlainTextOnly]
 * @property {String} [sourceTemplateId]
 * @property {String} [style]
 * @property {String} [subject]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 * @property {String} [virtualMTAId]
 */

/**
 * Imported files object
 * @typedef {Object} importedFile
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [fileName]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [link]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [redirectLink]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [trackedLink]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Content sections object
 * @typedef {Object} contentSection
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [contentHtml]
 * @property {String} [contentText]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {Array<importedFile>} [files]
 * @property {String} [folderId]
 * @property {Array} [forms]
 * @property {Array<hyperlink>} [hyperlinks]
 * @property {String} [id]
 * @property {Array<imageFile>} [images]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [scope]
 * @property {Object} [size]
 * @property {String} [size.height]
 * @property {String} [size.type]
 * @property {String} [size.width]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Cloud component instance object
 * @typedef {Object} cloudComponentInstance
 * @type Object
 * @property {String} [appStatus]
 * @property {String} [componentId]
 * @property {String} [configurationUrl]
 * @property {String} [configurationUrlModalSize]
 * @property {String} [editorImageUrl]
 * @property {String} [enabledConfigStatus]
 * @property {String} [height]
 * @property {String} [id]
 * @property {String} [requiresConfiguration]
 * @property {String} [type]
 * @property {String} [width]
 */

/**
 * Dynamic content object
 * @typedef {Object} dynamicContent
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {contentSection} [defaultContentSection]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {boolean} [isContentPublic]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {Array<dynamicContentRule>} [rules]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Dynamic content rule object
 * @typedef {Object} dynamicContentRule
 * @type Object
 * @property {contentSection} [contentSection]
 * @property {Array<criterion>} [criteria]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [id]
 * @property {String} [name]
 * @property {String} [statement]
 * @property {String} [type]
 */

/**
 * Criterion object
 * @typedef {Object} criterion
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
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Field merge object
 * @typedef {Object} fieldMerge
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [accountFieldId]
 * @property {String} [allowUrlsInValue]
 * @property {String} [contactFieldId]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [customObjectFieldId]
 * @property {String} [customObjectId]
 * @property {String} [customObjectSort]
 * @property {String} [defaultValue]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [eventFieldId]
 * @property {String} [eventId]
 * @property {String} [eventSessionFieldId]
 * @property {Array<fieldCondition>} [fieldConditions]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [mergeType]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [queryStringKey]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [syntax]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Field conditions object
 * @typedef {Object} fieldCondition
 * @type Object
 * @property {String} [accessedAt]
 * @property {Object} [conditions]
 * @property {String} [conditions.type]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [fieldId]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Hyperlink object
 * @typedef {Object} hyperlink
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [folderId]
 * @property {String} [href]
 * @property {String} [hyperlinkType]
 * @property {String} [id]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [referencedEntityId]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Field output format object
 * @typedef {Object} fieldOutputFormat
 * @type Object
 * @property {String} [currentStatus]
 * @property {String} [dataType]
 * @property {String} [format]
 * @property {String} [id]
 * @property {String} [type]
 */

/**
 * External asset object
 * @typedef {Object} externalAssets
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [externalAssetTypeId]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * External asset object
 * @typedef {Object} externalAssets
 * @type Object
 * @property {String} [accessedAt]
 * @property {Array<externalActivityType>} [activityTypes]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {imageFile} [image]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * External activity type object
 * @typedef {Object} externalActivityType
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
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Form object
 * @typedef {Object} form
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [customCSS]
 * @property {formFieldUpdateMapping} [defaultKeyFieldMapping]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {Array<formElement>} [typedefs]
 * @property {String} [externalIntegrationUrl]
 * @property {String} [folderId]
 * @property {String} [formJson]
 * @property {String} [html]
 * @property {String} [htmlName]
 * @property {String} [id]
 * @property {String} [isHidden]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {Array<formProcessingStep>} [processingSteps]
 * @property {String} [processingType]
 * @property {String} [scheduledFor]
 * @property {Object} [size]
 * @property {String} [size.height]
 * @property {String} [size.type]
 * @property {String} [size.width]
 * @property {String} [sourceTemplateId]
 * @property {String} [style]
 * @property {String} [submitFailedLandingPageId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Form field update mapping object
 * @typedef {Object} formFieldUpdateMapping
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
 * @property {String} [sourceFormFieldId]
 * @property {String} [sourceTemplateId]
 * @property {String} [targetEntityFieldId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 * @property {String} [updateType]
 */

/**
 * Form typedef object
 * @typedef {Object} formElement
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [instructions]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [style]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Form processing step object
 * @typedef {Object} formProcessingStep
 * @type Object
 * @property {String} [accessedAt]
 * @property {processingStepCriteria} [condition]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [execute]
 * @property {String} [folderId]
 * @property {String} [hasValidationIssue]
 * @property {String} [id]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Processing step criteria object
 * @typedef {Object} processingStepCriteria
 * @type Object
 * @property {Array<fieldComparisonCriteria>} [conditionalFieldCriteria]
 * @property {String} [isConditionallyNegated]
 * @property {String} [type]
 */

/**
 * Field comparison criteria object
 * @typedef {Object} fieldComparisonCriteria
 * @type Object
 * @property {String} [accessedAt]
 * @property {Object} [condition]
 * @property {String} [condition.type]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [fieldId]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Image files object
 * @typedef {Object} imageFile
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {String} [folderId]
 * @property {String} [fullImageUrl]
 * @property {String} [id]
 * @property {String} [link]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [scheduledFor]
 * @property {Object} [size]
 * @property {String} [size.height]
 * @property {String} [size.type]
 * @property {String} [size.width]
 * @property {String} [source]
 * @property {String} [sourceTemplateId]
 * @property {String} [syncDate]
 * @property {String} [thumbnailUrl]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Landing page object
 * @typedef {Object} landingPage
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [autoCloseWaitFor]
 * @property {String} [autoRedirectUrl]
 * @property {String} [autoRedirectWaitFor]
 * @property {Array<contentSection>} [contentSections]
 * @property {Array<cloudComponentInstance>} [contentServiceInstances]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [deployedAt]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {Array<dynamicContent>} [dynamicContents]
 * @property {String} [excludeFromAuthentication]
 * @property {Array<importedFile>} [files]
 * @property {String} [folderId]
 * @property {Array<form>} [forms]
 * @property {Object} [htmlContent]
 * @property {String} [htmlContent.contentSource]
 * @property {String} [htmlContent.type]
 * @property {Array<hyperlink>} [hyperlinks]
 * @property {String} [id]
 * @property {Array<imageFile>} [images]
 * @property {String} [isContentProtected]
 * @property {String} [isHidden]
 * @property {String} [layout]
 * @property {String} [micrositeId]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [refreshedAt]
 * @property {String} [relativePath]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [style]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */

/**
 * Program object
 * @typedef {Object} program
 * @type Object
 * @property {String} [accessedAt]
 * @property {String} [createdAt]
 * @property {String} [createdBy]
 * @property {String} [currentStatus]
 * @property {String} [defaultEntityId]
 * @property {String} [defaultEntityType]
 * @property {String} [depth]
 * @property {String} [description]
 * @property {Array<campaignElement>} [typedefs]
 * @property {String} [folderId]
 * @property {String} [id]
 * @property {String} [isMemberAllowedDuplicates]
 * @property {String} [isReadOnly]
 * @property {String} [name]
 * @property {Array<String>} [permissions]
 * @property {String} [runAsUserId]
 * @property {String} [scheduledFor]
 * @property {String} [sourceTemplateId]
 * @property {String} [type]
 * @property {String} [updatedAt]
 * @property {String} [updatedBy]
 */
