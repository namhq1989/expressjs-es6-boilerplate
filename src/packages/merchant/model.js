import { mongoose, Schema } from '@app-mongoose'

const MerchantSchema = new Schema({}, {
  versionKey: false,
  collection: 'businesses'
})

// Export
export default mongoose.model('Merchant', MerchantSchema)
