export interface Package {
  paynumber: string
  status: string
  actualPickUpDate: Date
  actualDeliveryDate: Date
  originCity: string
  destinationCity: string
  searchCriteria: string
  trackingComments: {
    comment: string
    user: string
    timestamp: Date
    dateTime: Date
  }[]
}
