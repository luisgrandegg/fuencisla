import { AuditLog, IAuditLog } from "../models/AuditLog";

export class AuditLogService {
  async logAudit(curso: string, motivo?: string): Promise<IAuditLog> {
    try {
      const auditLog = new AuditLog({
        curso,
        motivo,
      });
      return await auditLog.save();
    } catch (error) {
      console.error("Error saving audit log:", error);
      throw new Error("Failed to log audit");
    }
  }
}
