import { db } from "@db/pages/datatable/db";
import { HttpResponse, http } from "msw";

// Handler for pages/datatable
export const handlerPagesDatatable = [
  http.get("/api/pages/datatable", () => {
    return HttpResponse.json(db.salesDetails, { status: 200 });
  }),
  http.get("/api/pages/loan-request", () => {
    return HttpResponse.json(db.loanRequests, { status: 200 });
  }),
];
