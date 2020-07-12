const fieldsArray = [
    "batch_id",
    "collector_type",
    "data_type",
    "guid",
    "meta.batchId",
    "meta.dmsPlatformType",
    "meta.dmsPlatformTypeName",
    "meta.ingestConfigName",
    "meta.ingestionDate",
    "meta.ingestionHash",
    "meta.metadataVersion",
    "meta.providerDealerId",
    "meta.providerDealerUuid",
    "meta.providerEisStoreName",
    "meta.providerId",
    "meta.providerName",
    "meta.recordAudit.action",
    "meta.recordAudit.actor",
    "meta.recordKeys",
    "meta.recordState",
    "meta.recordTrailId",
    "meta.subscriptionName",
    "meta.subscriptionPartnerDealerMapId",
    "meta.subscriptionPartnerName",
    "meta.targetDealerUuid",
    "meta.targetSubscriptionIds",
    "meta.testData",
    "partQuotes.airFreightCharge",
    "partQuotes.airFreightInCharge",
    "partQuotes.airFreightOutCharge",
    "partQuotes.billOfLadingNumber",
    "partQuotes.comments",
    "partQuotes.contacts.addressActive",
    "partQuotes.contacts.addressFiller1",
    "partQuotes.contacts.addressFiller2",
    "partQuotes.contacts.addressFiller3",
    "partQuotes.contacts.addressLine1",
    "partQuotes.contacts.addressLine2",
    "partQuotes.contacts.addressLine3",
    "partQuotes.contacts.addressLine4",
    "partQuotes.contacts.addressNatlDnc",
    "partQuotes.contacts.allowEmailSolicit",
    "partQuotes.contacts.allowMailSolicit",
    "partQuotes.contacts.allowPhoneSolicit",
    "partQuotes.contacts.allowSolicit",
    "partQuotes.contacts.birthDate",
    "partQuotes.contacts.blockDataShare",
    "partQuotes.contacts.businessOrPersonFlag",
    "partQuotes.contacts.city",
    "partQuotes.contacts.companyName",
    "partQuotes.contacts.contactId",
    "partQuotes.contacts.country",
    "partQuotes.contacts.customerType",
    "partQuotes.contacts.dataShare",
    "partQuotes.contacts.department",
    "partQuotes.contacts.district",
    "partQuotes.contacts.emailAddresses.email",
    "partQuotes.contacts.emailAddresses.emailDescription",
    "partQuotes.contacts.emailAddresses.emailNatlDnc",
    "partQuotes.contacts.emailAddresses.emailType",
    "partQuotes.contacts.emailAddresses.filler1",
    "partQuotes.contacts.emailAddresses.filler2",
    "partQuotes.contacts.emailAddresses.filler3",
    "partQuotes.contacts.emailAddresses.type",
    "partQuotes.contacts.filler1",
    "partQuotes.contacts.filler2",
    "partQuotes.contacts.filler3",
    "partQuotes.contacts.firstName",
    "partQuotes.contacts.fullName",
    "partQuotes.contacts.gender",
    "partQuotes.contacts.lastName",
    "partQuotes.contacts.loyaltyPrograms.id",
    "partQuotes.contacts.loyaltyPrograms.mfgCode",
    "partQuotes.contacts.maritalStatus",
    "partQuotes.contacts.middleName",
    "partQuotes.contacts.natlDnc",
    "partQuotes.contacts.natlDncEmail",
    "partQuotes.contacts.natlDncMail",
    "partQuotes.contacts.natlDncPhone",
    "partQuotes.contacts.phoneNumbers.countryCode",
    "partQuotes.contacts.phoneNumbers.description",
    "partQuotes.contacts.phoneNumbers.extension",
    "partQuotes.contacts.phoneNumbers.filler1",
    "partQuotes.contacts.phoneNumbers.filler2",
    "partQuotes.contacts.phoneNumbers.filler3",
    "partQuotes.contacts.phoneNumbers.natlDnc",
    "partQuotes.contacts.phoneNumbers.number",
    "partQuotes.contacts.phoneNumbers.type",
    "partQuotes.contacts.postalCode",
    "partQuotes.contacts.region",
    "partQuotes.contacts.salutation",
    "partQuotes.contacts.shipDate",
    "partQuotes.contacts.shipToLine1",
    "partQuotes.contacts.shipToLine2",
    "partQuotes.contacts.shipToLine3",
    "partQuotes.contacts.shipToLine4",
    "partQuotes.contacts.shipVia",
    "partQuotes.contacts.suffix",
    "partQuotes.contacts.taxExemptFlag",
    "partQuotes.contacts.taxId",
    "partQuotes.contacts.taxIdFiller1",
    "partQuotes.contacts.taxIdFiller2",
    "partQuotes.contacts.taxIdFiller3",
    "partQuotes.contacts.title",
    "partQuotes.contacts.type",
    "partQuotes.dealerId",
    "partQuotes.debitControlNumber",
    "partQuotes.deliveryZone",
    "partQuotes.detailLineCount",
    "partQuotes.detailLines.addExchangeFlag",
    "partQuotes.detailLines.comment",
    "partQuotes.detailLines.compPrice",
    "partQuotes.detailLines.coreSale",
    "partQuotes.detailLines.cost",
    "partQuotes.detailLines.dealerID",
    "partQuotes.detailLines.fillQty",
    "partQuotes.detailLines.invoiceNumber",
    "partQuotes.detailLines.lineNumber",
    "partQuotes.detailLines.listPrice",
    "partQuotes.detailLines.orderQty",
    "partQuotes.detailLines.partBase",
    "partQuotes.detailLines.partDescription",
    "partQuotes.detailLines.partNumber",
    "partQuotes.detailLines.partPrefix",
    "partQuotes.detailLines.partSuffix",
    "partQuotes.detailLines.salePrice",
    "partQuotes.detailLines.saleQty",
    "partQuotes.detailLines.salesman",
    "partQuotes.detailLines.serviceCharge",
    "partQuotes.detailLines.source",
    "partQuotes.detailLines.transactionIndicator",
    "partQuotes.discountCharge",
    "partQuotes.employee.contactId",
    "partQuotes.employee.filler1",
    "partQuotes.employee.filler2",
    "partQuotes.employee.filler3",
    "partQuotes.employee.firstName",
    "partQuotes.employee.fullName",
    "partQuotes.employee.lastName",
    "partQuotes.employee.middleName",
    "partQuotes.employee.natlIdMfgs",
    "partQuotes.employee.natlIds.id",
    "partQuotes.employee.natlIds.mfgCode",
    "partQuotes.employee.salutation",
    "partQuotes.employee.suffix",
    "partQuotes.filler1",
    "partQuotes.filler2",
    "partQuotes.filler3",
    "partQuotes.freightCharge",
    "partQuotes.freightInCharge",
    "partQuotes.freightOutCharge",
    "partQuotes.invoiceCloseDate",
    "partQuotes.invoiceNumber",
    "partQuotes.invoiceOpenDate",
    "partQuotes.invoicePostDate",
    "partQuotes.invoiceVoidDate",
    "partQuotes.printQueue",
    "partQuotes.purchaseOrder",
    "partQuotes.saleType",
    "partQuotes.taxExemptNumber",
    "partQuotes.totalTax",
    "provider_dealer_id",
    "provider_id",
    "record_time",
    "record_trail_id",
    "stored_time"
]

const initialState = fieldsArray.map(field => {
    return {value: field, label : field.replace(/\./g, '>')}
})

const SchemaFieldsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_LEAF': {
            return state.filter(t => t.completed)
        }
        case 'SHOW_OBJECT': {
            return JSON.parse(action.payload)
        }
        default: {
            return state
        }
    }
}

export default SchemaFieldsReducer;
