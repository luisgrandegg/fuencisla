import mongoose, { Schema, Document } from "mongoose";

export interface IAuditLog extends Document {
  curso: string;
  motivo?: string;
  timestamp: Date;
}

const AuditLogSchema: Schema = new Schema({
  curso: { type: String, required: true },
  motivo: { type: String, required: false },
  timestamp: { type: Date, default: Date.now },
});

export const AuditLog =
  mongoose.models.AuditLog ||
  mongoose.model<IAuditLog>("AuditLog", AuditLogSchema);
