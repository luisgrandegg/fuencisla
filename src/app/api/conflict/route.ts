import { MailingService } from "../../../Mail/MailingService";
import { AuditLogService } from "@/AuditLog/services";

import { config } from "../../../config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, curso, motivo, descripcion } = await req.json();

  const mailingService = new MailingService();

  try {
    await mailingService.send({
      from: "noreply@yourdomain.com",
      to: config.modules.conflict.email.to,
      cc: config.modules.conflict.email.to,
      replyTo: email,
      subject: `Nuevo conflicto en el curso ${curso}`,
      text: `Motivo: ${motivo}\nDescripción: ${descripcion}`,
    });
    new AuditLogService().logAudit(curso, motivo);

    return NextResponse.json(
      { message: "Email sent successfully" },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Failed to send email:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      {
        status: 500,
      },
    );
  }
}
